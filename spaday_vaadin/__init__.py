import json
from pathlib import Path

from spaday import ComponentPackage

from . import components as _components
from .components import *
from .components import __all__ as _component_names

__version__ = "0.1.0"

_EXTENSION = Path(__file__).parent / "extension"
# Vaadin's packages under their own bare specifiers, written by the JS build (js/tools/vendor.mjs): a
# library on the page that imports or extends a Vaadin element resolves to this copy instead of
# registering the same tags a second time
_IMPORTS = _EXTENSION / "vendor" / "imports.json"

package = ComponentPackage(
    name="vaadin",
    assets_dir=_EXTENSION,
    assets=(("css", "css/vaadin.css"), ("js", "cdn/index.js")),
    components=tuple(getattr(_components, name) for name in _component_names),
    imports=tuple(json.loads(_IMPORTS.read_text(encoding="utf-8")).items()) if _IMPORTS.exists() else (),
)

#: ``css()`` kwarg → (CSS custom property, what it controls), in the shape of
#: :data:`spaday.theme.SHELL_TOKENS`.
#:
#: Lumo is a design system, so this package themes the *other* way round from a rendering package:
#: rather than exposing ``--spa-vaadin-*`` tokens of its own, its stylesheet maps Lumo's properties
#: onto the ``--spa-*`` palette that spaday's shell and every other component package reads. Set
#: these and the whole page follows — shell, graphs, tables, trees::
#:
#:     App().css(lumo_primary_color="#0C4253")
#:
#: Every other Lumo property works the same way (``css()`` takes arbitrary custom properties);
#: these are the ones wired to the shell palette.
TOKENS = {
    "lumo_base_color": ("--lumo-base-color", "drives --spa-surface"),
    "lumo_contrast_5pct": ("--lumo-contrast-5pct", "drives --spa-surface-2"),
    "lumo_contrast_10pct": ("--lumo-contrast-10pct", "drives --spa-border"),
    "lumo_secondary_text_color": ("--lumo-secondary-text-color", "drives --spa-muted"),
    "lumo_primary_color": ("--lumo-primary-color", "drives --spa-accent and --spa-info"),
    "lumo_success_color": ("--lumo-success-color", "drives --spa-success"),
    "lumo_warning_color": ("--lumo-warning-color", "drives --spa-warning"),
    "lumo_error_color": ("--lumo-error-color", "drives --spa-danger"),
}

__all__ = [*_component_names, "TOKENS", "package"]  # noqa: PLE0604
