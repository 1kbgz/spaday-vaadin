"""How Vaadin renders spaday's generic controls (:mod:`spaday.ui`)."""

from spaday.ui import ControlSpec, Design, Open, Options, Part, Value

_BUTTON_THEMES = {
    "neutral": "tertiary",
    "primary": "primary",
    "info": "primary",
    "success": "success primary",
    "warning": "contrast",
    "danger": "error primary",
}
_FIELD = {"disabled": "disabled", "required": "required", "readonly": "readonly", "name": "name", "size": None}
_LABEL = Part(kind="attr", name="label")
_HELP = Part(kind="attr", name="helper-text")
_ERROR = Part(kind="attr", name="error-message")
_INVALID = {"invalid": True}

DESIGN = Design(
    name="vaadin",
    controls={
        "button": ControlSpec(
            tag="vaadin-button",
            label=Part(kind="text"),
            props={"intent": "theme", "appearance": None, "size": None, "disabled": "disabled", "name": None},
            values={"intent": _BUTTON_THEMES},
        ),
        "input": ControlSpec(
            tag="vaadin-text-field",
            accepts={"type": ("text",)},
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "placeholder": "placeholder", "type": None},
            value=Value(event="value-changed"),
        ),
        "date-input": ControlSpec(
            tag="vaadin-date-picker",
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "min": "min", "max": "max"},
            value=Value(event="value-changed"),
        ),
        "checkbox": ControlSpec(
            tag="vaadin-checkbox",
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD},
            value=Value(prop="checked", event="checked-changed"),
        ),
        "select": ControlSpec(
            tag="vaadin-select",
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "placeholder": "placeholder"},
            options=Options(kind="prop", name="items", value="value", label="label", defer=True),
            value=Value(event="change", codec="json", defer=True),
        ),
        "dialog": ControlSpec(
            tag="vaadin-dialog",
            label=Part(kind="attr", name="header-title"),
            open=Open(prop="opened", event="opened-changed"),
        ),
    },
)

__all__ = ["DESIGN"]
