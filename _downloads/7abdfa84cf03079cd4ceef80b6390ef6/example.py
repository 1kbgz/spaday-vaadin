import asyncio
import logging
from datetime import date, timedelta

import transports
import uvicorn
from pydantic import BaseModel
from spaday import CallEndpoint, Sequence, SetField, SetProp, by_id, concat, element, eq, event_prop, event_value, field, obj
from spaday.backends.starlette import serve
from spaday.components.shell import App, Body, Main, Nav, Row, Show
from starlette.responses import JSONResponse
from starlette.routing import Route, WebSocketRoute

from spaday_vaadin import (
    VaadinButton,
    VaadinCheckbox,
    VaadinComboBox,
    VaadinDatePicker,
    VaadinDialog,
    VaadinGrid,
    VaadinGridColumn,
    VaadinGridFilterColumn,
    VaadinGridSelectionColumn,
    VaadinGridSortColumn,
    VaadinSelect,
    VaadinTab,
    VaadinTabs,
    VaadinTextField,
    package,
)

logger = logging.getLogger("uvicorn.error")

CUSTOMERS = ["Northwind Traders", "Contoso Retail", "Fabrikam Outdoor", "Tailspin Toys", "Wide World Importers"]
PRIORITIES = [
    {"label": "Standard", "value": "standard"},
    {"label": "Express", "value": "express"},
    {"label": "Overnight", "value": "overnight"},
]
TODAY = date(2026, 9, 14)


def order(number: int, customer: str, quantity: int, status: str, priority: str = "standard") -> dict:
    return {
        "id": f"SO-{number}",
        "customer": customer,
        "quantity": quantity,
        "total": round(quantity * 42.5, 2),
        "priority": priority,
        "status": status,
    }


class FulfillmentFeed(BaseModel):
    orders: list[dict] = [
        order(1041, "Northwind Traders", 12, "Packing"),
        order(1042, "Contoso Retail", 4, "Ready", "express"),
        order(1043, "Fabrikam Outdoor", 30, "Packing"),
        order(1044, "Tailspin Toys", 7, "Ready", "overnight"),
        order(1045, "Wide World Importers", 18, "Packing"),
    ]
    open_orders: str = "5"
    shipped_today: str = "38"
    on_time: str = "97.4%"


feed = FulfillmentFeed()
session = transports.Session()
session.host(feed)
server = transports.Server(session)


def refresh_metrics(shipped: int = 0) -> None:
    feed.open_orders = str(sum(1 for row in feed.orders if row["status"] != "Shipped"))
    feed.shipped_today = str(int(feed.shipped_today) + shipped)


def next_number() -> int:
    return max(int(row["id"].removeprefix("SO-")) for row in feed.orders) + 1


async def advance_orders() -> None:
    """Warehouse progress, pushed to the browser: the oldest packing order becomes ready to ship, and
    every third tick a new order arrives (the oldest shipped one drops off past twelve rows)."""
    tick = 0
    while True:
        await asyncio.sleep(2)
        tick += 1
        rows = feed.orders
        packing = [row for row in rows if row["status"] == "Packing"]
        if packing:
            first = packing[0]["id"]
            rows = [{**row, "status": "Ready"} if row["id"] == first else row for row in rows]
        if tick % 3 == 0:
            rows = [*rows, order(next_number(), CUSTOMERS[tick % len(CUSTOMERS)], 3 + tick % 20, "Packing")]
            shipped = [row for row in rows if row["status"] == "Shipped"]
            if len(rows) > 12 and shipped:
                rows = [row for row in rows if row is not shipped[0]]
        feed.orders = rows
        feed.on_time = f"{97 + (tick % 9) / 10:.1f}%"
        refresh_metrics()


async def create_order(request):
    body = await request.json()
    logger.info("New order from browser: %s", body)
    customer = (body.get("customer") or "").strip()
    quantity = int(body.get("quantity") or 0)
    if not customer or quantity < 1:
        return JSONResponse({"message": "Choose a customer and a quantity of at least 1."}, status_code=422)
    created = order(next_number(), customer, quantity, "Packing", body.get("priority") or "standard")
    feed.orders = [*feed.orders, created]
    refresh_metrics()
    wrap = " with gift wrap" if body.get("gift") else ""
    return JSONResponse({"message": f"{created['id']}: {quantity} units for {customer}, {created['priority']}{wrap}, ship by {body.get('ship_by')}."})


async def ship_orders(request):
    body = await request.json()
    ids = {row["id"] for row in body.get("orders") or []}
    ready = [row["id"] for row in feed.orders if row["id"] in ids and row["status"] == "Ready"]
    feed.orders = [{**row, "status": "Shipped"} if row["id"] in ready else row for row in feed.orders]
    refresh_metrics(shipped=len(ready))
    skipped = len(ids) - len(ready)
    message = f"Shipped {len(ready)} order{'s' * (len(ready) != 1)}"
    return JSONResponse({"message": message + (f"; {skipped} not ready yet" if skipped else "")})


def metric(label: str, value_field: str, badge: str, badge_theme: str):
    # Lumo's badge styles: `theme="badge success"` on any element
    return element(
        "article",
        element("span").text(label),
        element("strong").bind("textContent", value_field),
        element("span", theme=f"badge {badge_theme}").text(badge),
        class_="metric",
    )


metrics = Row(
    metric("Open orders", "open_orders", "Live", "contrast"),
    metric("Shipped today", "shipped_today", "+12 vs. yesterday", "success"),
    metric("On-time rate", "on_time", "Target 95%", "primary"),
    gap="var(--lumo-space-m)",
    class_="metrics",
)

orders_panel = element(
    "section",
    VaadinGrid(id="orders", item_id_path="id", all_rows_visible=True, theme="row-stripes")
    .bind("items", "orders")
    .on(
        "selected-items-changed",
        Sequence(
            SetField("selected", event_value("value")),
            SetField("selected_count", event_prop("target.selectedItems.length")),
        ),
    )
    .child(
        VaadinGridSelectionColumn(auto_width=True, flex_grow=0),
        VaadinGridSortColumn(path="id", header="Order", auto_width=True),
        VaadinGridFilterColumn(path="customer", header="Customer"),
        VaadinGridSortColumn(path="quantity", header="Units", text_align="end", auto_width=True),
        VaadinGridSortColumn(path="total", header="Total ($)", text_align="end", auto_width=True),
        VaadinGridColumn(path="priority", header="Priority", auto_width=True),
        VaadinGridSortColumn(path="status", header="Status", auto_width=True),
    ),
    Row(
        element("span", class_="hint").text("Select ready orders, then ship them. Packing orders turn ready as the warehouse works."),
        VaadinButton(id="ship", theme="primary")
        .compute("textContent", concat("Ship selected (", field("selected_count"), ")"))
        .compute("disabled", eq(field("selected_count"), 0))
        .on(
            "click",
            Sequence(
                CallEndpoint("POST", "/api/orders/ship", obj({"orders": field("selected")}), result="shipped"),
                SetProp(by_id("orders"), "selectedItems", []),
                SetField("selected", []),
                SetField("selected_count", 0),
            ),
        ),
        justify="space-between",
        class_="actions",
    ),
    Show(
        element("p", id="ship-result", theme="badge success").compute("textContent", field("shipped.body.message")),
        when=field("shipped.ok"),
    ),
    class_="panel",
)

order_form = element(
    "section",
    element(
        "div",
        VaadinComboBox(
            label="Customer", items=CUSTOMERS, allow_custom_value=True, clear_button_visible=True, helper_text="Pick one or type a new customer"
        ).bind("value", "customer", mode="two-way"),
        VaadinTextField(label="Quantity", allowed_char_pattern="[0-9]", helper_text="Units to ship").bind("value", "quantity", mode="two-way"),
        VaadinSelect(label="Priority", items=PRIORITIES).bind("value", "priority", mode="two-way"),
        VaadinDatePicker(label="Ship by", min=TODAY.isoformat(), max=(TODAY + timedelta(days=60)).isoformat()).bind(
            "value", "ship_by", mode="two-way"
        ),
        class_="form-grid",
    ),
    Row(
        VaadinCheckbox(label="Gift wrap").bind("checked", "gift", mode="two-way"),
        VaadinButton(id="create", theme="primary")
        .text("Create order")
        .on(
            "click",
            Sequence(
                CallEndpoint(
                    "POST",
                    "/api/orders",
                    obj(
                        {
                            "customer": field("customer"),
                            "quantity": field("quantity"),
                            "priority": field("priority"),
                            "ship_by": field("ship_by"),
                            "gift": field("gift"),
                        }
                    ),
                    result="created",
                ),
                SetProp(by_id("confirm"), "opened", True),
            ),
        ),
        justify="space-between",
        class_="actions",
    ),
    class_="panel",
)

confirm = VaadinDialog(
    element("p", id="confirm-message").compute("textContent", field("created.body.message")),
    element("div", slot="footer").child(
        VaadinButton(theme="tertiary").text("New order").on("click", SetProp(by_id("confirm"), "opened", False)),
        VaadinButton(theme="primary").text("View orders").on("click", Sequence(SetProp(by_id("confirm"), "opened", False), SetField("tab", 0))),
    ),
    id="confirm",
    header_title="Order submitted",
)

hero = element(
    "section",
    element("span", class_="eyebrow").text("FULFILLMENT CONTROL · LIVE FLOOR"),
    element("h1").text("Ship today with every order in view"),
    element("p").text("Warehouse progress, order creation and shipping decisions stay synchronized with one Python service."),
    element(
        "div",
        element("span", theme="badge success").text("20 typed elements"),
        element("span", theme="badge primary").text("Live warehouse feed"),
        element("span", theme="badge contrast").text("Python fulfillment"),
        class_="hero-facts",
    ),
    class_="hero",
)

page = App(
    Nav(
        element("strong", class_="brand").text("Vaadin fulfillment desk"),
        VaadinCheckbox(id="dark", label="Dark mode").bind("checked", "dark", mode="two-way"),
    ),
    Body(
        Main(
            hero,
            element("p", class_="lede").text("Typed Vaadin components, live warehouse data from Python, and Lumo theming the spaday shell."),
            metrics,
            VaadinTabs(VaadinTab().text("Orders"), VaadinTab().text("New order"), id="tabs")
            .bind("selected", "tab")
            .on("selected-changed", SetField("tab", event_value("value"))),
            Show(orders_panel, when=eq(field("tab"), 0)),
            Show(order_form, when=eq(field("tab"), 1)),
            confirm,
            class_="page",
        ),
    ),
).bind_root_class("wa-dark", "dark")

styles = """
<style>
  * { box-sizing: border-box; }
  body { margin: 0; font-family: var(--lumo-font-family); color: var(--lumo-body-text-color);
    background: radial-gradient(circle at 12% 0%, color-mix(in srgb, var(--lumo-primary-color) 12%, transparent), transparent 34rem),
      var(--lumo-contrast-5pct); }
  spa-nav { position: sticky; z-index: 20; top: 0; justify-content: space-between; border-bottom: 1px solid var(--spa-border); }
  .brand { font-size: var(--lumo-font-size-l); color: var(--lumo-header-text-color); }
  .page { box-sizing: border-box; width: 100%; max-width: 72rem; margin: 0 auto; padding: var(--lumo-space-l);
    display: grid; grid-template-columns: minmax(0, 1fr); align-content: start; gap: var(--lumo-space-m); }
  .hero { padding: clamp(1.5rem, 5vw, 3.5rem); border: 1px solid color-mix(in srgb, var(--lumo-primary-color) 30%, transparent);
    border-radius: calc(var(--lumo-border-radius-l) * 2); color: white;
    background: linear-gradient(125deg, #34246d 0%, #5146a6 52%, #1676a5 100%);
    box-shadow: 0 1.5rem 3rem color-mix(in srgb, #211651 20%, transparent); }
  .eyebrow { display: block; margin-bottom: var(--lumo-space-s); font-size: var(--lumo-font-size-xs); font-weight: 700; letter-spacing: .12em; opacity: .75; }
  .hero h1 { max-width: 17ch; margin: 0; color: white; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.03; letter-spacing: -.035em; }
  .hero > p { max-width: 42rem; margin: var(--lumo-space-m) 0; font-size: var(--lumo-font-size-l); line-height: 1.55; opacity: .88; }
  .hero-facts { display: flex; flex-wrap: wrap; gap: var(--lumo-space-xs); }
  .hero-facts [theme~="badge"] { color: white; border: 1px solid #ffffff3d; background: #ffffff16; }
  .lede { margin: 0; color: var(--lumo-secondary-text-color); }
  .metrics { flex-wrap: wrap; }
  .metric { flex: 1 1 12rem; display: grid; gap: var(--lumo-space-xs); padding: var(--lumo-space-m);
    border: 1px solid var(--spa-border); border-radius: var(--lumo-border-radius-l); background: var(--lumo-base-color);
    box-shadow: 0 .5rem 1.5rem color-mix(in srgb, var(--lumo-contrast) 8%, transparent); }
  .metric span:first-child { color: var(--lumo-secondary-text-color); font-size: var(--lumo-font-size-s); }
  .metric strong { font-size: var(--lumo-font-size-xxl); color: var(--lumo-header-text-color); }
  .metric [theme~="badge"] { justify-self: start; }
  .panel { display: grid; gap: var(--lumo-space-m); padding-top: var(--lumo-space-s); }
  vaadin-grid { width: 100%; min-width: 0; max-width: 100%; }
  .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 var(--lumo-space-l); }
  .form-grid > * { width: 100%; }
  .actions { flex-wrap: wrap; }
  .hint { color: var(--lumo-secondary-text-color); font-size: var(--lumo-font-size-s); }
  #ship-result { margin: 0; justify-self: start; }
  @media (max-width: 720px) {
    spa-nav { position: static; flex-wrap: wrap; gap: var(--lumo-space-s); }
    .page { padding: var(--lumo-space-s); }
    .hero { border-radius: var(--lumo-border-radius-l); }
    .form-grid { grid-template-columns: 1fr; }
  }
</style>
"""

initial_store = {
    "dark": False,
    "tab": 0,
    "selected": [],
    "selected_count": 0,
    "shipped": {},
    "customer": "Northwind Traders",
    "quantity": "10",
    "priority": "standard",
    "ship_by": (TODAY + timedelta(days=3)).isoformat(),
    "gift": False,
    "created": {"body": {"message": ""}},
}

app = serve(
    page,
    packages=[package],
    wire="transports",
    routes=[
        WebSocketRoute("/ws", transports.ws_endpoint(server)),
        Route("/api/orders", create_order, methods=["POST"]),
        Route("/api/orders/ship", ship_orders, methods=["POST"]),
    ],
    background=[transports.autosync(server), advance_orders()],
    store=initial_store,
    head=styles,
    title="spaday-vaadin example",
)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8027)
