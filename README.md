# spaday-vaadin

Typed [Vaadin](https://vaadin.com/docs/latest/components) web components and browser assets for spaday.

[![Build Status](https://github.com/1kbgz/spaday-vaadin/actions/workflows/build.yaml/badge.svg?branch=main&event=push)](https://github.com/1kbgz/spaday-vaadin/actions/workflows/build.yaml)
[![codecov](https://codecov.io/gh/1kbgz/spaday-vaadin/branch/main/graph/badge.svg)](https://codecov.io/gh/1kbgz/spaday-vaadin)
[![License](https://img.shields.io/github/license/1kbgz/spaday-vaadin)](https://github.com/1kbgz/spaday-vaadin)
[![PyPI](https://img.shields.io/pypi/v/spaday-vaadin.svg)](https://pypi.python.org/pypi/spaday-vaadin)

[![Preview of vaadin components in spaday rendering a fulfillment cockpit](https://raw.githubusercontent.com/1kbgz/spaday-vaadin/main/docs/img/preview.webp)](https://1kbgz.github.io/spaday-vaadin/lite/)

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

## Browser examples

- [Fulfillment desk](https://1kbgz.github.io/spaday-vaadin/lite/) — complete interactive example, with Python running in Pyodide.
- [Component gallery](https://1kbgz.github.io/spaday-vaadin/lite/?example=gallery) — all 20 generated Vaadin wrappers and their Python source.

## Run the local example

```bash
python -m pip install -e ".[examples]"
python -m spaday_vaadin.example
```

Open `http://127.0.0.1:8027` for the [fulfillment desk](spaday_vaadin/example.py): a grid of orders
streamed live from Python with selection, sorting and filtering, shipping the selected orders through a
Python endpoint, an order form of combo box, text field, select, date picker and checkbox two-way bound
to spaday state, a dialog confirming what the server created, tabs, Lumo badges, and a dark mode that
re-themes Lumo and the spaday shell together.

Run `python -m spaday_vaadin.gallery` and open `http://127.0.0.1:8028` for the exhaustive local component gallery.

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

> [!NOTE]
> This library was generated using [copier](https://copier.readthedocs.io/en/stable/) from the [Base Python Project Template repository](https://github.com/python-project-templates/base).
