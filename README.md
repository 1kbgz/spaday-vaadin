# spaday-vaadin

Typed [Vaadin](https://vaadin.com/docs/latest/components) web components and browser assets for spaday.

[![Build Status](https://github.com/1kbgz/spaday-vaadin/actions/workflows/build.yaml/badge.svg?branch=main&event=push)](https://github.com/1kbgz/spaday-vaadin/actions/workflows/build.yaml)
[![codecov](https://codecov.io/gh/1kbgz/spaday-vaadin/branch/main/graph/badge.svg)](https://codecov.io/gh/1kbgz/spaday-vaadin)
[![License](https://img.shields.io/github/license/1kbgz/spaday-vaadin)](https://github.com/1kbgz/spaday-vaadin)
[![PyPI](https://img.shields.io/pypi/v/spaday-vaadin.svg)](https://pypi.python.org/pypi/spaday-vaadin)

## Overview

```python
from spaday import SetField, element, serve
from spaday_vaadin import VaadinButton, VaadinGrid, VaadinGridColumn, VaadinTextField

page = element("div").child(
    VaadinButton(theme="primary").text("Approve").on("click", SetField("state", "approved")),
    VaadinTextField(label="State", readonly=True).bind("value", "state"),
    VaadinGrid(items=[{"name": "Ada"}, {"name": "Grace"}]).child(VaadinGridColumn(path="name")),
)
serve(page, packages=["vaadin"], store={"state": "pending"})
```

A curated core of Vaadin's free components — button, checkbox, combo box, date picker, dialog, grid
and its columns, notification, select, tabs and text field, 20 elements in all — has typed classes
generated from their Custom Elements Manifests, so props, events and slots are checked when you
author the tree. Array properties such as a grid's `items` are keyword arguments too, set on the
element as properties. Installing the package does not inject assets; select it with
`packages=["vaadin"]` or pass the exported `package` descriptor.

## Theming

The elements are styled with Vaadin's Lumo theme, and the stylesheet maps spaday's `--spa-*` shell
palette onto Lumo's properties, so restyling Lumo restyles the shell and every other spaday component
package with it. `TOKENS` lists the properties wired to the palette:

```python
App().css(lumo_primary_color="#0C4253")
```

The theme follows spaday's page mode: a `wa-dark` class (for example
`App(...).bind_root_class("wa-dark", "dark")`) switches Lumo to dark, and a `wa-light` island inside
a dark page stays light.

## Sharing Vaadin with your own library

Vaadin registers global custom element names, so a page can hold only one copy. The package serves
Vaadin's modules under their own bare specifiers — `@vaadin/button`, `@vaadin/grid/…`,
`@vaadin/component-base/…` and the other packages these elements are built from — through the page's
import map. A library that imports or extends them and leaves those imports out of its bundle
(`external: ["@vaadin/*"]` with esbuild) gets this copy.

The served copy carries the opt-out of Vaadin's development-time usage statistics, which its package
normally installs at `npm install` time.

## Development

`make catalog` regenerates the typed classes from the installed Vaadin packages: it collects their
manifests into `spaday_vaadin/custom-elements.json` (`js/tools/manifest.mjs`) and generates
`spaday_vaadin/components.py` from it. `js/tools/unpublished.json` supplies the theming mixins that
Vaadin publishes no manifest for.

> [!NOTE]
> This library was generated using [copier](https://copier.readthedocs.io/en/stable/) from the [Base Python Project Template repository](https://github.com/python-project-templates/base).
