import asyncio

import httpx
import pytest

from spaday_vaadin import example


async def request(method: str, path: str, **kwargs):
    transport = httpx.ASGITransport(app=example.app)
    async with httpx.AsyncClient(transport=transport, base_url="http://example") as client:
        return await client.request(method, path, **kwargs)


def one_tick(monkeypatch, ticks: int = 1):
    """Run the warehouse loop for ``ticks`` iterations."""
    sleeps = 0

    class Done(Exception):
        pass

    async def sleep(_delay):
        nonlocal sleeps
        sleeps += 1
        if sleeps > ticks:
            raise Done

    monkeypatch.setattr(example.asyncio, "sleep", sleep)
    with pytest.raises(Done):
        asyncio.run(example.advance_orders())


def test_example_serves_the_desk():
    response = asyncio.run(request("GET", "/tree.json"))
    assert response.status_code == 200
    for tag in ("vaadin-grid", "vaadin-combo-box", "vaadin-date-picker", "vaadin-dialog", "vaadin-tabs"):
        assert tag in response.text


def test_warehouse_readies_orders_and_takes_new_ones(monkeypatch):
    packing = sum(row["status"] == "Packing" for row in example.feed.orders)
    count = len(example.feed.orders)
    one_tick(monkeypatch, ticks=3)
    assert len(example.feed.orders) == count + 1  # every third tick an order arrives
    assert sum(row["status"] == "Packing" for row in example.feed.orders) == max(packing - 3, 0) + 1


def test_creating_an_order_adds_it_to_the_feed():
    response = asyncio.run(
        request(
            "POST",
            "/api/orders",
            json={"customer": "Contoso Retail", "quantity": "25", "priority": "express", "ship_by": "2026-09-20", "gift": True},
        )
    )
    assert response.status_code == 200
    created = example.feed.orders[-1]
    assert (created["customer"], created["quantity"], created["priority"], created["status"]) == ("Contoso Retail", 25, "express", "Packing")
    assert response.json()["message"] == f"{created['id']}: 25 units for Contoso Retail, express with gift wrap, ship by 2026-09-20."
    rejected = asyncio.run(request("POST", "/api/orders", json={"customer": "", "quantity": "0"}))
    assert rejected.status_code == 422


def test_shipping_ships_only_ready_orders():
    ready = next(row for row in example.feed.orders if row["status"] == "Ready")
    packing = {**example.feed.orders[-1], "status": "Packing"}
    example.feed.orders = [*example.feed.orders[:-1], packing]
    shipped_before = int(example.feed.shipped_today)
    response = asyncio.run(request("POST", "/api/orders/ship", json={"orders": [ready, packing]}))
    assert response.json() == {"message": "Shipped 1 order; 1 not ready yet"}
    statuses = {row["id"]: row["status"] for row in example.feed.orders}
    assert statuses[ready["id"]] == "Shipped" and statuses[packing["id"]] == "Packing"
    assert int(example.feed.shipped_today) == shipped_before + 1
