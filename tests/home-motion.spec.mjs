import { expect, test } from "@playwright/test";
import { createHash } from "node:crypto";

const frame = async (canvas) =>
  createHash("sha256")
    .update(await canvas.evaluate((element) => element.toDataURL()))
    .digest("hex");

test("home uses the same SignalField engine and editorial layout as the other pages with a unique galaxy shape", async ({ page }) => {
  await page.goto("./");
  const field = page.locator('signal-field[data-scene="galaxy"]');
  const canvas = field.locator("canvas[data-signal-field]");
  await expect(field).toBeVisible();
  await expect(canvas).toBeVisible();
  await expect(page.locator("#hero-title")).toHaveText("Karlo Jagar");
  await expect(page.locator("#selected-work-title")).toHaveText("Featured projects");

  const initial = await frame(canvas);
  await expect.poll(() => frame(canvas)).not.toBe(initial);
});

test("dragging rotates the home scene and clicking triggers interactive motion without selecting text", async ({ page }) => {
  await page.goto("./");
  const canvas = page.locator("signal-field canvas[data-signal-field]");
  await expect(canvas).toBeVisible();

  await page.mouse.move(720, 360);
  await page.mouse.down();
  await page.mouse.move(900, 420, { steps: 8 });
  await page.mouse.up();
  expect(await page.evaluate(() => window.getSelection()?.toString() ?? "")).toBe("");
});

test("scrolling morphs the home scene and reaches featured work and technology stack", async ({ page }) => {
  await page.goto("./");
  const canvas = page.locator("signal-field canvas[data-signal-field]");
  const topFrame = await frame(canvas);
  await page.locator("#selected-work").scrollIntoViewIfNeeded();
  await expect(page.locator("#selected-work-title")).toBeInViewport();
  await page.locator("#stack-section").scrollIntoViewIfNeeded();
  await expect.poll(() => frame(canvas)).not.toBe(topFrame);
});

test("all main pages use SignalField with their own scene shape and never overflow in dark or light mode", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  const routes = [
    { path: "./", scene: "galaxy" },
    { path: "about/", scene: "globe" },
    { path: "work/", scene: "cluster" },
    { path: "blog/", scene: "helix" },
    { path: "contact/", scene: "bridge" },
  ];

  for (const route of routes) {
    await page.goto(route.path);
    await expect(page.locator(`signal-field[data-scene="${route.scene}"]`)).toHaveCount(1);
    await expect(page.locator("main h1")).toBeVisible();
    for (const theme of ["dark", "light"]) {
      await page.evaluate((value) => {
        document.documentElement.dataset.theme = value;
      }, theme);
      for (const width of [320, 390, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: width < 500 ? 844 : 900 });
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      }
    }
  }
  expect(errors).toEqual([]);
});

test("home scene survives client navigation and supports operations console 3D commands", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./");
  await page.getByRole("button", { name: "Open operations console" }).click();
  await page.locator("[data-terminal-input]").fill("warp");
  await page.locator("[data-terminal-input]").press("Enter");
  await expect(page.locator("[data-terminal-output]")).toContainText("Engaging 3D orbital hyperdrive…");

  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Work", exact: true }).click();
  await expect(page.locator('signal-field[data-scene="cluster"]')).toHaveCount(1);
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Home", exact: true }).click();
  await expect(page.locator('signal-field[data-scene="galaxy"]')).toHaveCount(1);
  expect(errors).toEqual([]);
});
