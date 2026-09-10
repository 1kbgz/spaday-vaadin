import ast
from pathlib import Path

from spaday import element, generate
from spaday.bootstrap import bootstrap

from spaday_vaadin import TOKENS, VaadinButton, VaadinGrid, VaadinGridColumn, VaadinTextField, package

ROOT = Path(__file__).parent.parent


def test_generated_components_serialize():
    node = element("div").child(VaadinButton(theme="primary").text("Save"), VaadinTextField(label="Name")).to_node()
    assert [child["tag"] for child in node["slots"]["default"]] == ["vaadin-button", "vaadin-text-field"]
    assert node["slots"]["default"][0]["props"]["theme"] == {"Str": "primary"}


def test_catalog_covers_the_curated_set():
    tags = {schema.tag for schema in package.catalog}
    assert {"vaadin-button", "vaadin-text-field", "vaadin-grid", "vaadin-date-picker", "vaadin-dialog"} <= tags
    assert len(tags) == 20
    # the theme variants every element takes come from a mixin in another package
    assert "theme" in {prop.name for prop in VaadinButton.schema.props}


def test_grid_items_are_a_property_only_input():
    # Vaadin's manifest leaves array properties out of `attributes`; the collector lists them as fields
    assert {"items", "selectedItems"} <= {field.name for field in VaadinGrid.schema.fields}
    node = VaadinGrid(items=[{"name": "Ada"}]).child(VaadinGridColumn(path="name")).to_node()
    assert node["props"]["items"] == {"List": [{"Map": {"name": {"Str": "Ada"}}}]}


def test_package_drives_bootstrap_asset_urls():
    html = bootstrap(packages=[package])
    assert 'href="/components/vaadin/css/vaadin.css"' in html
    assert 'src="/components/vaadin/cdn/index.js"' in html
    assert '"@vaadin/grid/": "/components/vaadin/vendor/@vaadin/grid/"' in html
    assert '"@vaadin/component-base/"' in html  # the base classes a library extends
    # the bundle's own imports resolve through the map, so it must come first
    assert html.index('type="importmap"') < html.index('src="/components/vaadin/cdn/index.js"')


def test_published_imports_are_served():
    assert package.imports, "the JS build writes the import map; run it first"
    for specifier, path in package.imports:
        target = package.assets_dir / path
        assert target.is_dir() if path.endswith("/") else target.is_file(), f"{specifier} maps to {path}, which the build did not produce"


def test_tokens_are_lumo_properties_the_css_kwarg_produces():
    for kwarg, (prop, description) in TOKENS.items():
        assert prop == "--" + kwarg.replace("_", "-") and description.startswith("drives --spa-")
        assert element("div").css(**{kwarg: "x"}).to_node()["props"]["style"]["Str"] == f"{prop}: x"


def test_generated_catalog_is_current():
    fresh = generate(str(ROOT / "custom-elements.json"))
    assert ast.dump(ast.parse(fresh)) == ast.dump(ast.parse((ROOT / "components.py").read_text(encoding="utf-8")))
