import { expect, test } from "@playwright/test";

test("registers and renders the Vaadin catalog", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/dist/index.html");
  await page.evaluate(() => {
    const button = document.createElement("vaadin-button");
    button.textContent = "Run";
    document.body.appendChild(button);
  });
  await expect
    .poll(() =>
      page.locator("vaadin-button").evaluate((button) => !!button.shadowRoot),
    )
    .toBe(true);
  expect(
    await page.evaluate(() => ({
      grid: !!customElements.get("vaadin-grid"),
      datePicker: !!customElements.get("vaadin-date-picker"),
    })),
  ).toEqual({ grid: true, datePicker: true });
  expect(errors).toEqual([]);
});

test("styles the elements with Lumo", async ({ page }) => {
  await page.goto("/dist/index.html");
  await page.evaluate(() => {
    const button = document.createElement("vaadin-button");
    button.setAttribute("theme", "primary");
    button.textContent = "Run";
    document.body.appendChild(button);
  });
  // Lumo's button styles reach the shadow root only through its injection, from the stylesheet's
  // `@media lumo_components_button` rules
  await expect
    .poll(() =>
      page
        .locator("vaadin-button")
        .evaluate((button) => getComputedStyle(button).backgroundColor),
    )
    .toBe(
      await page.evaluate(() => {
        const probe = document.createElement("div");
        probe.style.color = "var(--lumo-primary-color)";
        document.body.append(probe);
        return getComputedStyle(probe).color;
      }),
    );
});

test("survives an application that already registered a Vaadin element", async ({
  page,
}) => {
  // an app shipping its own copy of Vaadin registers `vaadin-button` first; Vaadin's own
  // defineCustomElement skips a registered name, so the rest of the catalog still registers
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    customElements.define("vaadin-button", class extends HTMLElement {});
  });
  await page.goto("/dist/index.html");
  await page.waitForFunction(() => !!customElements.get("vaadin-text-field"));
  expect(errors).toEqual([]);
  expect(
    await page.evaluate(
      () => !document.createElement("vaadin-button").shadowRoot,
    ),
  ).toBe(true);
});

test("publishes the Vaadin version it serves", async ({ page }) => {
  await page.goto("/dist/index.html");
  await page.waitForFunction(() => !!globalThis.__spadayVaadin);
  expect(await page.evaluate(() => globalThis.__spadayVaadin.version)).toMatch(
    /^\d+\.\d+\.\d+/,
  );
});

test("a Lumo property set on the app drives the shell palette inside it", async ({
  page,
}) => {
  // what `App().css(lumo_primary_color=...)` renders
  await page.goto("/dist/index.html");
  expect(
    await page.evaluate(() => {
      const app = document.createElement("spa-app");
      app.style.setProperty("--lumo-primary-color", "rgb(255, 0, 0)");
      const probe = document.createElement("div");
      probe.style.color = "var(--spa-accent)";
      app.append(probe);
      document.body.append(app);
      return getComputedStyle(probe).color;
    }),
  ).toBe("rgb(255, 0, 0)");
});

test("follows spaday's page mode, on the root and on islands", async ({
  page,
}) => {
  await page.goto("/dist/index.html");
  const background = (selector) =>
    page
      .locator(selector)
      .evaluate((el) => getComputedStyle(el).backgroundColor);
  await page.evaluate(() => {
    const island = document.createElement("section");
    island.id = "island";
    island.className = "wa-light";
    document.body.append(island);
  });
  const light = await background("html");
  await page.evaluate(() => document.documentElement.classList.add("wa-dark"));
  expect(await background("html")).not.toBe(light);
  // a light island inside the dark page gets Lumo's light palette back
  expect(await background("#island")).toBe(light);
  // the shell palette follows Lumo's
  expect(
    await page.evaluate(() => {
      const probe = document.createElement("div");
      probe.style.color = "var(--spa-surface)";
      document.body.append(probe);
      return getComputedStyle(probe).color;
    }),
  ).toBe(await background("html"));
});
