import { expect, test } from "@playwright/test";

const PAGE = "http://127.0.0.1:8032";

test("renders the curated Vaadin controls and explicit fallbacks", async ({
  page,
}) => {
  await page.goto(PAGE);
  await page.locator("#dialog").waitFor({ state: "attached" });
  expect(
    await page.evaluate(() =>
      ["save", "name", "date", "agree", "plan", "dialog"].map(
        (id) => document.getElementById(id).localName,
      ),
    ),
  ).toEqual([
    "vaadin-button",
    "vaadin-text-field",
    "vaadin-date-picker",
    "vaadin-checkbox",
    "vaadin-select",
    "vaadin-dialog",
  ]);
  await expect(page.locator("[data-ui-fallback]")).toHaveCount(8);
  await expect(page.locator("#plan")).toHaveJSProperty("value", '"basic"');
});

test("Vaadin values round-trip through the shared store", async ({ page }) => {
  await page.goto(PAGE);
  const state = page.locator("#state");
  await page.locator("#name").evaluate((element) => {
    element.value = "Ada";
    element.dispatchEvent(new Event("value-changed", { bubbles: true }));
  });
  await page.locator("#date").evaluate((element) => {
    element.value = "2026-10-01";
    element.dispatchEvent(new Event("value-changed", { bubbles: true }));
  });
  await page.getByRole("checkbox", { name: "Agree" }).check();
  await page.locator("#plan").evaluate((element) => {
    element.value = '"plus"';
    element.dispatchEvent(new Event("change", { bubbles: true }));
  });
  await expect(state).toContainText("Ada||2|2026-10-01|true|false|plus|");
  await page.locator("#save").click();
  await expect(state).toContainText("|true|false");
});

test("dialog and validation state remain bound", async ({ page }) => {
  await page.goto(PAGE);
  const dialog = page.locator("#dialog");
  await expect(dialog).toHaveJSProperty("opened", false);
  await page.locator("#open").click();
  await expect(dialog).toHaveJSProperty("opened", true);
  await expect(dialog.getByText("Confirm?")).toBeVisible();
  await dialog.evaluate((element) => {
    element.opened = false;
    element.dispatchEvent(new CustomEvent("opened-changed"));
  });
  await expect(page.locator("#state")).toContainText("|false");
  const email = page.locator("#email");
  await expect(email).toHaveAttribute("data-invalid", "");
  await expect(email.locator("..").locator('[data-ui="error"]')).toHaveText(
    "Required",
  );
});
