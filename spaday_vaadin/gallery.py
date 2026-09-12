"""Gallery of every Vaadin component wrapped by spaday-vaadin."""

from __future__ import annotations

import io
import keyword
import textwrap
import tokenize

from spaday import element
from spaday.backends.starlette import serve
from spaday.components.shell import App, Body, Main, Nav

from . import (
    VaadinButton,
    VaadinCheckbox,
    VaadinComboBox,
    VaadinDatePicker,
    VaadinDialog,
    VaadinGrid,
    VaadinGridColumn,
    VaadinGridColumnGroup,
    VaadinGridFilter,
    VaadinGridFilterColumn,
    VaadinGridSelectionColumn,
    VaadinGridSortColumn,
    VaadinGridSorter,
    VaadinGridTreeColumn,
    VaadinGridTreeToggle,
    VaadinNotification,
    VaadinSelect,
    VaadinTab,
    VaadinTabs,
    VaadinTextField,
    components as _components,
    package,
)

COMPONENT_NAMES = tuple(_components.__all__)
COMPONENT_SNIPPETS: list[str] = []


def _snippet(names: str, body: str) -> str:
    source = f"from spaday_vaadin import {names}\n\n{textwrap.dedent(body).strip()}\n"
    COMPONENT_SNIPPETS.append(source)
    return source


def _offsets(source: str) -> list[int]:
    offsets = [0]
    for line in source.splitlines(keepends=True):
        offsets.append(offsets[-1] + len(line))
    return offsets


def _code(source: str):
    """Render dependency-free highlighted Python."""
    offsets = _offsets(source)
    children = []
    cursor = 0
    for token in tokenize.generate_tokens(io.StringIO(source).readline):
        if token.type == tokenize.ENDMARKER:
            continue
        start = offsets[token.start[0] - 1] + token.start[1]
        end = offsets[token.end[0] - 1] + token.end[1]
        if start > cursor:
            children.append(source[cursor:start])
        token_class = None
        if token.type == tokenize.NAME and keyword.iskeyword(token.string):
            token_class = "keyword"
        elif token.type == tokenize.STRING:
            token_class = "string"
        elif token.type == tokenize.NUMBER:
            token_class = "number"
        elif token.type == tokenize.COMMENT:
            token_class = "comment"
        elif token.type == tokenize.OP:
            token_class = "operator"
        children.append(element("span", class_=f"token-{token_class}").text(token.string) if token_class else token.string)
        cursor = end
    return element("pre", element("code", *children), class_="code-block")


def _demo(title: str, description: str, source: str, preview):
    return element(
        "article",
        element(
            "header",
            element("div", element("h2").text(title), element("p").text(description)),
            element("span", class_="language-pill").text("Python"),
            class_="demo-heading",
        ),
        element("div", preview, class_="preview"),
        _code(source),
        class_="gallery-card",
    )


fields = _demo(
    "Fields and actions",
    "Build compact operational forms from familiar Lumo controls.",
    _snippet(
        "VaadinButton, VaadinCheckbox, VaadinComboBox, VaadinDatePicker, VaadinSelect, VaadinTextField",
        """
        controls = [
            VaadinTextField(label="Order reference", value="SO-1088"),
            VaadinComboBox(label="Warehouse", items=["East", "West"]),
            VaadinSelect(label="Priority", items=[{"label": "Express", "value": "express"}]),
            VaadinDatePicker(label="Ship by", value="2026-09-18"),
            VaadinCheckbox(label="Insured", checked=True),
            VaadinButton(theme="primary").text("Create shipment"),
        ]
        """,
    ),
    element(
        "div",
        VaadinTextField(label="Order reference", value="SO-1088", clear_button_visible=True),
        VaadinComboBox(label="Warehouse", items=["East", "West", "Central"], value="East"),
        VaadinSelect(
            label="Priority",
            items=[{"label": "Standard", "value": "standard"}, {"label": "Express", "value": "express"}],
            value="express",
        ),
        VaadinDatePicker(label="Ship by", value="2026-09-18"),
        element(
            "div",
            VaadinCheckbox(label="Insured", checked=True),
            VaadinButton(theme="primary").text("Create shipment"),
            class_="field-actions",
        ),
        class_="form-preview",
    ),
)

navigation = _demo(
    "Navigation and feedback",
    "Tabs organize workflows while dialogs and notifications handle consequential feedback.",
    _snippet(
        "VaadinButton, VaadinDialog, VaadinNotification, VaadinTab, VaadinTabs",
        """
        navigation = VaadinTabs(
            VaadinTab().text("Orders"),
            VaadinTab().text("Shipments"),
        )
        dialog = VaadinDialog(header_title="Shipment created")
        notice = VaadinNotification(duration=4000)
        """,
    ),
    element(
        "div",
        VaadinTabs(VaadinTab().text("Orders"), VaadinTab().text("Shipments"), VaadinTab().text("Exceptions")),
        element(
            "div",
            element("span", theme="badge success").text("24 shipped"),
            element("span", theme="badge primary").text("5 packing"),
            element("span", theme="badge error").text("1 exception"),
            class_="status-row",
        ),
        VaadinButton(theme="tertiary").text("Review activity"),
        element(
            "span",
            VaadinDialog(header_title="Shipment created"),
            VaadinNotification(duration=4000),
            class_="structural-probes",
        ),
        class_="stack-preview",
    ),
)

orders = [
    {"id": "SO-1088", "customer": "Northwind", "units": 12, "status": "Ready"},
    {"id": "SO-1089", "customer": "Contoso", "units": 8, "status": "Packing"},
    {"id": "SO-1090", "customer": "Fabrikam", "units": 21, "status": "Ready"},
]

grid = _demo(
    "Operational grid",
    "Selection, sorting and filtering stay declarative while rows remain ordinary Python data.",
    _snippet(
        "VaadinGrid, VaadinGridColumn, VaadinGridFilterColumn, VaadinGridSelectionColumn, VaadinGridSortColumn",
        """
        orders = VaadinGrid(items=rows, all_rows_visible=True).child(
            VaadinGridSelectionColumn(),
            VaadinGridSortColumn(path="id", header="Order"),
            VaadinGridFilterColumn(path="customer", header="Customer"),
            VaadinGridColumn(path="status", header="Status"),
        )
        """,
    ),
    VaadinGrid(items=orders, all_rows_visible=True, theme="row-stripes").child(
        VaadinGridSelectionColumn(auto_width=True, flex_grow=0),
        VaadinGridSortColumn(path="id", header="Order", auto_width=True),
        VaadinGridFilterColumn(path="customer", header="Customer"),
        VaadinGridColumn(path="units", header="Units", text_align="end", auto_width=True),
        VaadinGridColumn(path="status", header="Status", auto_width=True),
    ),
)

advanced = _demo(
    "Advanced grid composition",
    "Column groups and tree columns expose Vaadin's lower-level grid primitives when a flat table is not enough.",
    _snippet(
        "VaadinGrid, VaadinGridColumn, VaadinGridColumnGroup, VaadinGridFilter, VaadinGridSorter, VaadinGridTreeColumn, VaadinGridTreeToggle",
        """
        hierarchy = VaadinGrid(items=rows, all_rows_visible=True).child(
            VaadinGridTreeColumn(path="name", header="Network"),
            VaadinGridColumnGroup(
                VaadinGridColumn(path="owner", header="Owner"),
            ),
        )
        header_tools = [
            VaadinGridFilter(path="name"),
            VaadinGridSorter(path="name"),
            VaadinGridTreeToggle(leaf=True),
        ]
        """,
    ),
    element(
        "div",
        VaadinGrid(
            items=[
                {"name": "East network", "owner": "Ada", "capacity": "82%"},
                {"name": "West network", "owner": "Grace", "capacity": "74%"},
            ],
            all_rows_visible=True,
        ).child(
            VaadinGridTreeColumn(path="name", header="Network"),
            VaadinGridColumnGroup(
                VaadinGridColumn(path="owner", header="Owner"),
                VaadinGridColumn(path="capacity", header="Capacity"),
            ),
        ),
        element(
            "span",
            VaadinGridFilter(path="name"),
            VaadinGridSorter(path="name"),
            VaadinGridTreeToggle(leaf=True),
            class_="structural-probes",
        ),
        class_="stack-preview",
    ),
)

page = App(
    Nav(element("strong").text("spaday · Vaadin"), element("span", theme="badge primary").text("Python component gallery")),
    Body(
        Main(
            element(
                "section",
                element("span", class_="eyebrow").text("VAADIN · CURATED CORE"),
                element("h1").text("Component gallery"),
                element("p").text("Twenty typed wrappers from ten selected Vaadin packages—not the full Vaadin component suite."),
                element(
                    "div",
                    element("span").text("20 wrapped tags"),
                    element("span").text("Vaadin 25.2.10"),
                    element("span").text("Runs in Pyodide"),
                    class_="hero-facts",
                ),
                class_="hero",
            ),
            element("section", fields, navigation, grid, advanced, class_="gallery-grid"),
            class_="gallery-page",
        )
    ),
)

styles = """
<style>
  * { box-sizing: border-box; }
  body { margin: 0; font-family: var(--lumo-font-family); color: var(--lumo-body-text-color);
    background: radial-gradient(circle at 12% 0%, color-mix(in srgb, var(--lumo-primary-color) 12%, transparent), transparent 34rem),
      var(--lumo-contrast-5pct); }
  spa-nav { position: sticky; z-index: 20; top: 0; justify-content: space-between; border-bottom: 1px solid var(--spa-border); }
  .gallery-page { display: grid; gap: var(--lumo-space-m); width: min(100%, 76rem); margin: 0 auto; padding: var(--lumo-space-l); }
  .hero { padding: clamp(1.5rem, 5vw, 3.5rem); border-radius: calc(var(--lumo-border-radius-l) * 2); color: white;
    background: linear-gradient(125deg, #34246d 0%, #5146a6 52%, #1676a5 100%);
    box-shadow: 0 1.5rem 3rem color-mix(in srgb, #211651 20%, transparent); }
  .eyebrow { display: block; margin-bottom: var(--lumo-space-s); font-size: var(--lumo-font-size-xs); font-weight: 700; letter-spacing: .12em; opacity: .75; }
  .hero h1 { max-width: 15ch; margin: 0; color: white; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.03; letter-spacing: -.035em; }
  .hero > p { max-width: 42rem; margin: var(--lumo-space-m) 0; font-size: var(--lumo-font-size-l); line-height: 1.55; opacity: .88; }
  .hero-facts, .status-row { display: flex; flex-wrap: wrap; gap: var(--lumo-space-xs); }
  .hero-facts span { padding: .4rem .65rem; border: 1px solid #ffffff3d; border-radius: 999px; background: #ffffff16; font-size: .8rem; font-weight: 700; }
  .gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--lumo-space-m); }
  .gallery-card { min-width: 0; overflow: hidden; border: 1px solid var(--spa-border); border-radius: var(--lumo-border-radius-l);
    background: var(--lumo-base-color); box-shadow: 0 .6rem 1.6rem color-mix(in srgb, var(--lumo-contrast) 8%, transparent); }
  .demo-heading { display: flex; justify-content: space-between; gap: var(--lumo-space-m); padding: var(--lumo-space-m); border-bottom: 1px solid var(--spa-border); }
  .demo-heading h2 { margin: 0; font-size: var(--lumo-font-size-l); }
  .demo-heading p { margin: var(--lumo-space-xs) 0 0; color: var(--lumo-secondary-text-color); font-size: var(--lumo-font-size-s); line-height: 1.45; }
  .language-pill { flex: none; align-self: start; padding: .28rem .55rem; border-radius: 999px; color: var(--lumo-primary-text-color);
    background: var(--lumo-primary-color-10pct); font-size: var(--lumo-font-size-xs); font-weight: 700; }
  .preview { min-height: 13rem; padding: var(--lumo-space-m); background: var(--lumo-contrast-5pct); }
  .form-preview { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 var(--lumo-space-m); }
  .form-preview > * { width: 100%; min-width: 0; }
  .field-actions { display: flex; align-items: end; justify-content: space-between; gap: var(--lumo-space-s); }
  .stack-preview { display: grid; gap: var(--lumo-space-m); }
  vaadin-grid { width: 100%; min-width: 0; max-width: 100%; }
  .structural-probes { display: none; }
  .code-block { max-width: 100%; min-height: 9rem; max-height: 20rem; margin: 0; overflow: auto; padding: 1rem 1.2rem; color: #e0e7ff;
    background: #17132c; font: .78rem/1.65 ui-monospace, SFMono-Regular, Menlo, monospace; white-space: pre; }
  .token-keyword { color: #93c5fd; } .token-string { color: #a7f3d0; } .token-number { color: #fcd34d; }
  .token-comment { color: #94a3b8; } .token-operator { color: #c4b5fd; }
  @media (max-width: 760px) {
    spa-nav { position: static; flex-wrap: wrap; gap: var(--lumo-space-s); }
    .gallery-page { padding: var(--lumo-space-s); }
    .hero { border-radius: var(--lumo-border-radius-l); }
    .gallery-grid, .form-preview { grid-template-columns: 1fr; }
    .demo-heading { align-items: start; }
    .field-actions { align-items: center; flex-wrap: wrap; }
  }
</style>
"""

app = serve(page, packages=[package], head=styles, title="spaday-vaadin gallery")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8028)
