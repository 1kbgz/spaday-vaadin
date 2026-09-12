import fs from "fs";
import { expect, test } from "@playwright/test";

const built = fs.existsSync("dist/lite/index.html");

async function renderedComponentTags(page, expectedTags, structuralTags = []) {
  return page.locator("body").evaluate(
    (body, { expectedTags, structuralTags }) => {
      const components = [...body.querySelectorAll("*")].filter((element) =>
        expectedTags.includes(element.localName),
      );
      const tags = [...new Set(components.map((element) => element.localName))];
      const structural = new Set(structuralTags);
      const unrendered = tags.filter(
        (tag) =>
          !structural.has(tag) &&
          !components
            .filter((element) => element.localName === tag)
            .some((element) => {
              const bounds = element.getBoundingClientRect();
              return bounds.width > 0 && bounds.height > 0;
            }),
      );
      return {
        missing: expectedTags.filter((tag) => !tags.includes(tag)),
        unrendered,
      };
    },
    { expectedTags, structuralTags },
  );
}

async function waitForPython(page) {
  await page.waitForFunction(
    () =>
      document.documentElement.dataset.ready === "true" ||
      document.querySelector("#pyodide-status")?.textContent ===
        "Unable to start",
    undefined,
    { timeout: 180_000 },
  );
  await expect(page.locator("html")).toHaveAttribute("data-ready", "true");
}

function collectErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

async function expectNoHorizontalOverflow(page) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  const contentOverflow = await page
    .locator("spa-main")
    .evaluate((node) => node.scrollWidth - node.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  expect(contentOverflow).toBeLessThanOrEqual(1);
}

async function expectTabNavigationToKeepScrollPosition(page) {
  const tabs = page.locator("#tabs");

  for (const name of ["New order", "Orders"]) {
    await tabs.evaluate((element) => {
      window.scrollTo({
        behavior: "instant",
        top: element.getBoundingClientRect().top + window.scrollY - 120,
      });
    });
    const before = await page.evaluate(() => window.scrollY);
    await page.locator("vaadin-tab", { hasText: name }).click();
    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeCloseTo(before, 0);
  }
}

test("runs the fulfillment example in Pyodide", async ({ page }) => {
  test.skip(!built, "run `make pyodide-example` first");
  test.setTimeout(240_000);
  await page.setViewportSize({ width: 320, height: 800 });
  const errors = collectErrors(page);

  await page.goto("/dist/lite/index.html");
  await waitForPython(page);
  await expect(page.locator(".hero h1")).toHaveText(
    "Ship today with every order in view",
  );

  const grid = page.locator("#orders");
  const initial = await grid.evaluate((node) => node.items.length);
  await expect
    .poll(() => grid.evaluate((node) => node.items.length), { timeout: 10_000 })
    .toBeGreaterThan(initial);
  const id = await grid.evaluate((node) => {
    const ready = node.items.find((row) => row.status === "Ready");
    node.selectItem(ready);
    return ready.id;
  });
  await page.locator("#ship").click();
  await expect(page.locator("#ship-result")).toHaveText("Shipped 1 order");
  await expect
    .poll(() =>
      grid.evaluate(
        (node, orderId) => node.items.find((row) => row.id === orderId)?.status,
        id,
      ),
    )
    .toBe("Shipped");

  await expectTabNavigationToKeepScrollPosition(page);

  await expectNoHorizontalOverflow(page);
  expect(errors).toEqual([]);
});

test("runs the complete component gallery in Pyodide", async ({ page }) => {
  test.skip(!built, "run `make pyodide-example` first");
  test.setTimeout(240_000);
  await page.setViewportSize({ width: 320, height: 800 });
  const errors = collectErrors(page);

  await page.goto("/dist/lite/?example=gallery");
  await waitForPython(page);
  await expect(page.locator(".hero h1")).toHaveText("Component gallery");
  await expect(page.locator(".hero > p")).toContainText(
    "not the full Vaadin component suite",
  );
  await expect(page.locator(".hero-facts")).toContainText("20 wrapped tags");
  await expect(page.locator(".gallery-card")).toHaveCount(4);
  await expect(page.locator(".grid-primitives")).toBeVisible();
  await expect(
    page.locator(".grid-primitives vaadin-grid-filter"),
  ).toBeVisible();
  await expect(
    page.locator(".grid-primitives vaadin-grid-sorter"),
  ).toBeVisible();
  await expect(
    page.locator(".grid-primitives vaadin-grid-tree-toggle"),
  ).toBeVisible();
  const rendered = await renderedComponentTags(
    page,
    [
      "vaadin-button",
      "vaadin-checkbox",
      "vaadin-combo-box",
      "vaadin-date-picker",
      "vaadin-dialog",
      "vaadin-grid",
      "vaadin-grid-column",
      "vaadin-grid-column-group",
      "vaadin-grid-filter",
      "vaadin-grid-filter-column",
      "vaadin-grid-selection-column",
      "vaadin-grid-sort-column",
      "vaadin-grid-sorter",
      "vaadin-grid-tree-column",
      "vaadin-grid-tree-toggle",
      "vaadin-notification",
      "vaadin-select",
      "vaadin-tab",
      "vaadin-tabs",
      "vaadin-text-field",
    ],
    [
      "vaadin-dialog",
      "vaadin-grid-column",
      "vaadin-grid-column-group",
      "vaadin-grid-filter-column",
      "vaadin-grid-selection-column",
      "vaadin-grid-sort-column",
      "vaadin-grid-tree-column",
      "vaadin-notification",
    ],
  );
  expect(rendered.missing).toEqual([]);
  expect(rendered.unrendered).toEqual([]);
  await page.getByRole("button", { name: "Open shipment dialog" }).click();
  await expect(page.locator("#gallery-dialog")).toHaveJSProperty(
    "opened",
    true,
  );
  await expect(page.locator("vaadin-dialog-overlay")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Show notification" }).click();
  await expect(page.locator("#gallery-notification")).toHaveJSProperty(
    "opened",
    true,
  );
  await expect(page.locator("vaadin-notification-card")).toBeVisible();
  await expect(page.locator(".token-keyword").first()).toHaveText("from");

  await expectNoHorizontalOverflow(page);
  expect(errors).toEqual([]);
});
