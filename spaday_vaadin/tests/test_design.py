import json

from spaday import Button, Checkbox, DateInput, Dialog, Select, TextInput, validate
from spaday.ui import conformance, resolve
from spaday.ui.design import _plain

from spaday_vaadin import DESIGN, package


def _props(node: dict) -> dict:
    return {key: _plain(value) for key, value in node.get("props", {}).items()}


def test_the_package_publishes_its_design():
    assert package.design is DESIGN
    assert set(DESIGN.controls) == {"button", "checkbox", "date-input", "dialog", "input", "select"}


def test_vaadin_fields_use_their_native_label_and_validation_properties():
    text = resolve(
        TextInput(label="Name", help="Hint", error="Bad", type="text").bind("value", "name", mode="two-way").to_node(),
        DESIGN,
    )
    assert text["tag"] == "vaadin-text-field"
    assert _props(text) == {"label": "Name", "helper-text": "Hint", "error-message": "Bad", "invalid": True}
    assert text["bindings"] == {"value": {"field": "name", "mode": "two-way", "event": "value-changed"}}

    date = resolve(DateInput(label="Date", min="2026-01-01", max="2026-12-31").to_node(), DESIGN)
    assert _props(date) == {"label": "Date", "min": "2026-01-01", "max": "2026-12-31"}

    checkbox = resolve(Checkbox(label="Agree").bind("value", "agree", mode="two-way").to_node(), DESIGN)
    assert checkbox["tag"] == "vaadin-checkbox"
    assert checkbox["bindings"]["checked"] == {"field": "agree", "mode": "two-way", "event": "checked-changed"}

    password = resolve(TextInput(label="Password", type="password").to_node(), DESIGN)
    assert _props(password["slots"]["default"][1])["data-ui-fallback"] == "native"


def test_button_and_dialog_map_to_vaadin():
    button = resolve(Button(label="Save", intent="danger", appearance="plain", size="lg").to_node(), DESIGN)
    assert button["tag"] == "vaadin-button"
    assert _props(button) == {"textContent": "Save", "theme": "error primary"}

    dialog = resolve(Dialog(label="Confirm").bind("open", "open", mode="two-way").to_node(), DESIGN)
    assert dialog["tag"] == "vaadin-dialog"
    assert _props(dialog) == {"header-title": "Confirm"}
    assert dialog["bindings"] == {"opened": {"field": "open", "mode": "two-way", "event": "opened-changed"}}


def test_select_defers_its_items_and_value_until_vaadin_is_connected():
    select = resolve(
        Select(label="Plan", options=["a", {"value": 2, "label": "Two"}]).bind("value", "plan", mode="two-way").to_node(),
        DESIGN,
    )
    assert _props(select) == {"label": "Plan"}
    assert select["bindings"]["items"] == {
        "compute": {
            "expr": "lit",
            "value": [{"value": '"a"', "label": "a"}, {"value": "2", "label": "Two"}],
        },
        "mode": "one-way",
        "defer": True,
    }
    assert select["bindings"]["value"] == {
        "field": "plan",
        "mode": "two-way",
        "event": "change",
        "codec": "json",
        "defer": True,
    }


def test_the_conformance_page_marks_the_curated_catalog_gaps():
    node = resolve(conformance.page().to_node(), DESIGN)
    validate(node)
    rendered = json.dumps(node)
    assert '"tag": "ui-' not in rendered
    assert rendered.count("data-ui-fallback") == 8
