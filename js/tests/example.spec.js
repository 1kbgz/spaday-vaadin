import { expect, test } from "@playwright/test";

/* The fulfillment desk in spaday_vaadin/example.py, run as its own server. */

const PAGE = "http://127.0.0.1:8027";

test("streams warehouse progress from Python into the grid", async ({
  page,
}) => {
  await page.goto(PAGE);
  const grid = page.locator("#orders");
  await expect(grid).toContainText("SO-1041");
  const rows = () => grid.evaluate((el) => el.items.length);
  const initial = await rows();
  // a new order arrives every few seconds
  await expect.poll(rows, { timeout: 10_000 }).toBeGreaterThan(initial);
});

test("ships the selected orders through Python", async ({ page }) => {
  await page.goto(PAGE);
  const grid = page.locator("#orders");
  await expect(grid).toContainText("Ready");
  // select the first ready order the way the selection column does
  const id = await grid.evaluate((el) => {
    const ready = el.items.find((row) => row.status === "Ready");
    el.selectItem(ready);
    return ready.id;
  });
  await expect(page.locator("#ship")).toHaveText("Ship selected (1)");
  await page.locator("#ship").click();
  await expect(page.locator("#ship-result")).toHaveText("Shipped 1 order");
  await expect(page.locator("#ship")).toBeDisabled();
  await expect
    .poll(() =>
      grid.evaluate(
        (el, id) => el.items.find((row) => row.id === id)?.status,
        id,
      ),
    )
    .toBe("Shipped");
});

test("creates an order from the form and confirms it in a dialog", async ({
  page,
}) => {
  await page.goto(PAGE);
  await page.locator("vaadin-tab", { hasText: "New order" }).click();
  await page.getByRole("textbox", { name: "Quantity" }).fill("42");
  await page.locator("vaadin-checkbox", { hasText: "Gift wrap" }).click();
  await page.locator("#create").click();
  const message = page.locator("#confirm-message");
  await expect(message).toContainText("42 units for Northwind Traders");
  await expect(message).toContainText("with gift wrap");
  const id = (await message.textContent()).split(":")[0];
  await page.getByRole("button", { name: "View orders" }).click();
  await expect(page.locator("#orders")).toContainText(id);
});

test("dark mode re-themes Lumo and the spaday shell together", async ({
  page,
}) => {
  await page.goto(PAGE);
  const surface = () =>
    page.evaluate(() => {
      const probe = document.createElement("div");
      probe.style.color = "var(--spa-surface)";
      document.body.append(probe);
      const color = getComputedStyle(probe).color;
      probe.remove();
      return color;
    });
  const light = await surface();
  await page.locator("#dark").click();
  await expect(page.locator("html")).toHaveClass(/wa-dark/);
  await expect.poll(surface).not.toBe(light);
  expect(
    await page
      .locator("spa-nav")
      .evaluate((nav) => getComputedStyle(nav).backgroundColor),
  ).toBe(await surface());
});
