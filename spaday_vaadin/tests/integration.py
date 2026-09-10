"""A spaday page on spaday-vaadin, shared with a downstream library through the import map.

The integration this exercises end to end:

* the generated catalog authored in Python and wired with spaday's own state -- two
  ``VaadinButton``\\ s drive a store field that a ``VaadinTextField`` reads, and a ``VaadinGrid``
  takes its rows as a property from Python;
* a downstream library that imports Vaadin by its bare specifiers, left as imports in its bundle,
  which the page's import map resolves to spaday-vaadin's copy, so nothing registers the same tags
  twice. It has no Python of its own beyond a schema-carrying :class:`~spaday.Component` and a
  :class:`~spaday.ComponentPackage` serving its bundle.

Served for the browser tests; ``/conformance.js`` hands back the check that the package's own
bundle implements the catalog generated for it.
"""

from pathlib import Path

import uvicorn
from spaday import Component, ComponentPackage, ComponentSchema, PropertySchema, SetField, check_script, element
from spaday.backends.starlette import serve
from starlette.responses import PlainTextResponse
from starlette.routing import Route

from spaday_vaadin import VaadinButton, VaadinGrid, VaadinGridColumn, VaadinTextField, package as vaadin_package


class DemoAction(Component):
    """The downstream library's element, bound from Python with no Python of its own."""

    tag = "demo-action"
    schema = ComponentSchema(
        tag="demo-action",
        class_name="DemoAction",
        summary="An action built from Vaadin's button.",
        props=(PropertySchema(name="label", kind="string", description="Button label."),),
    )


downstream_package = ComponentPackage(
    name="demo-downstream",
    assets_dir=Path(__file__).parent / "downstream",
    assets=(("js", "downstream.js"),),
    components=(DemoAction,),
)

page = element("div", id="app").child(
    element("section", id="card").child(
        VaadinButton(id="approve", theme="primary success").text("Approve").on("click", SetField("state", "approved")),
        VaadinButton(id="reject", theme="primary error").text("Reject").on("click", SetField("state", "rejected")),
        VaadinTextField(id="state", label="State", readonly=True).bind("value", "state"),
    ),
    VaadinGrid(id="people", items=[{"name": "Ada"}, {"name": "Grace"}], all_rows_visible=True).child(
        VaadinGridColumn(path="name", header="Name"),
    ),
    DemoAction(id="downstream", label="Downstream"),
)


async def conformance(request) -> PlainTextResponse:
    """The browser-side check of spaday-vaadin's own bundle against its generated catalog."""
    return PlainTextResponse(check_script([vaadin_package]), media_type="text/plain")


app = serve(
    page,
    packages=[vaadin_package, downstream_package],
    routes=[Route("/conformance.js", conformance)],
    store={"state": "pending"},
    title="spaday-vaadin integration",
)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8022)
