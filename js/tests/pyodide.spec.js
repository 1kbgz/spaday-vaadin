import fs from "fs";
import { expect, test } from "@playwright/test";

const built = fs.existsSync("dist/lite/index.html");

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
  await expect(page.locator(".gallery-card")).toHaveCount(4);
  await expect(
    page.locator(".structural-probes > vaadin-grid-tree-toggle"),
  ).toBeAttached();
  await expect(page.locator(".token-keyword").first()).toHaveText("from");

  await expectNoHorizontalOverflow(page);
  expect(errors).toEqual([]);
});
