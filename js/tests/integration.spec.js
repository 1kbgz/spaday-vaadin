import { expect, test } from "@playwright/test";

/* spaday-vaadin authored from Python, on a page it shares with a downstream library that imports
 * Vaadin by its bare specifiers. See spaday_vaadin/tests/integration.py.
 */

const PAGE = "http://127.0.0.1:8022";

test("spaday state wires the generated catalog together", async ({ page }) => {
  await page.goto(PAGE);
  const state = page.locator("#state");
  await expect(state).toHaveJSProperty("value", "pending");
  await page.locator("#approve").click();
  await expect(state).toHaveJSProperty("value", "approved");
  await page.locator("#reject").click();
  await expect(state).toHaveJSProperty("value", "rejected");
});

test("a grid renders the rows Python set as a property", async ({ page }) => {
  await page.goto(PAGE);
  // the grid's cells are slotted into light DOM
  await expect(page.locator("#people")).toContainText("Grace");
  expect(
    await page.locator("#people").evaluate((grid) => grid.items.length),
  ).toBe(2);
});

test("a library importing Vaadin by name gets the page's copy", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(PAGE);
  const downstream = page.locator("#downstream");
  await expect(downstream.locator("vaadin-button")).toBeAttached();
  // the downstream library's imported Button is the class the page registered
  await expect(downstream).toHaveAttribute("data-shared-class", "true");
  expect(errors).toEqual([]);
});

test("the package's own bundle satisfies its generated catalog", async ({
  page,
}) => {
  await page.goto(PAGE);
  const script = await (
    await page.request.get(`${PAGE}/conformance.js`)
  ).text();
  await expect(page.locator("#approve")).toBeAttached();
  expect(await page.evaluate(script)).toEqual([]);
});
