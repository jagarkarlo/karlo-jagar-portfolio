import { expect, test } from "@playwright/test";

test("the home scene stays beside the introduction and changes as the page scrolls", async ({ page }) => {
  await page.goto("./");
  const scene = page.locator("home-flow");
  const canvas = scene.locator("canvas");
  await expect(scene).toBeVisible();
  await expect(scene).toHaveAttribute("data-stage", "current");
  await expect(scene).toHaveAttribute("data-running", "true");

  const title = await page.locator("#hero-title").boundingBox();
  const artwork = await canvas.boundingBox();
  expect(title).not.toBeNull();
  expect(artwork).not.toBeNull();
  expect(artwork.x).toBeGreaterThanOrEqual(title.x + title.width);

  const firstFrame = await canvas.evaluate((element) => element.toDataURL());
  await page.locator("[data-home-journey]").evaluate((element) => {
    const bottom = element.getBoundingClientRect().bottom + window.scrollY;
    window.scrollTo({ top: bottom - window.innerHeight - 20, behavior: "instant" });
  });
  await expect(scene).toHaveAttribute("data-stage", "network");
  await expect(page.getByRole("button", { name: "Pause animation" })).toBeInViewport();
  await expect.poll(() => canvas.evaluate((element) => element.toDataURL())).not.toBe(firstFrame);
  await page.getByRole("button", { name: "Pause animation" }).click();
  await expect(scene).toHaveAttribute("data-running", "false");
});

test("the motion control pauses and resumes both parts of the home scene", async ({ page }) => {
  await page.goto("./");
  const scene = page.locator("home-flow");
  const canvas = scene.locator("canvas");
  const stars = page.locator(".edge-stars__drift");
  await expect(scene).toHaveAttribute("data-running", "true");

  await page.getByRole("button", { name: "Pause animation" }).click();
  await expect(scene).toHaveAttribute("data-running", "false");
  const frame = await canvas.evaluate((element) => element.toDataURL());
  const starTime = await stars.evaluate((element) => element.getAnimations()[0].currentTime);
  await page.waitForTimeout(200);
  expect(await canvas.evaluate((element) => element.toDataURL())).toBe(frame);
  expect(await stars.evaluate((element) => element.getAnimations()[0].currentTime)).toBe(starTime);

  await page.getByRole("button", { name: "Resume animation" }).click();
  await expect(scene).toHaveAttribute("data-running", "true");
  await expect.poll(() => canvas.evaluate((element) => element.toDataURL())).not.toBe(frame);
});

test("the scene adapts to both themes and stays clear of the introduction at every breakpoint", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./");
  const scene = page.locator("home-flow");
  const canvas = scene.locator("canvas");

  for (const theme of ["dark", "light"]) {
    await page.evaluate((value) => { document.documentElement.dataset.theme = value; }, theme);
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: width < 500 ? 844 : 900 });
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      await expect(scene).toHaveAttribute("data-rendered", "");
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      const title = await page.locator("#hero-title").boundingBox();
      const artwork = await canvas.boundingBox();
      expect(title.x).toBeGreaterThanOrEqual(0);
      expect(title.x + title.width).toBeLessThanOrEqual(width);
      if (width >= 1024) {
        expect(artwork.x).toBeGreaterThanOrEqual(title.x + title.width);
      } else {
        expect(artwork.y).toBeGreaterThanOrEqual(title.y + title.height);
      }
    }
  }
  expect(errors).toEqual([]);
});

test("the mobile artwork changes while it is visible during scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  const scene = page.locator("home-flow");
  await expect(scene).toHaveAttribute("data-stage", "current");
  await scene.evaluate((element) => {
    const top = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top - window.innerHeight * 0.18, behavior: "instant" });
  });
  await expect(scene).toHaveAttribute("data-running", "true");
  await expect(scene).toHaveAttribute("data-stage", "network");
  await expect(scene).toBeInViewport();
});

test("reduced motion is static and can be changed without reloading", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("./");
  const scene = page.locator("home-flow");
  const canvas = scene.locator("canvas");
  await expect(scene).toHaveAttribute("data-rendered", "");
  await expect(scene).toHaveAttribute("data-running", "false");
  await expect(page.getByRole("button", { name: "Pause animation" })).toBeHidden();
  await expect(page.locator(".edge-stars__drift")).toHaveCSS("animation-name", "none");

  const frame = await canvas.evaluate((element) => element.toDataURL());
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: "instant" }));
  await page.waitForTimeout(200);
  expect(await canvas.evaluate((element) => element.toDataURL())).toBe(frame);

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(scene).toHaveAttribute("data-running", "true");
  await expect.poll(() => canvas.evaluate((element) => element.toDataURL())).not.toBe(frame);
});

test("hidden and offscreen scenes stop and resume; a paused scene still updates its theme", async ({ page }) => {
  await page.goto("./");
  const scene = page.locator("home-flow");
  const canvas = scene.locator("canvas");
  const stars = page.locator("edge-stars");
  await expect(scene).toHaveAttribute("data-running", "true");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { configurable: true, value: true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(scene).toHaveAttribute("data-running", "false");
  await expect(stars).toHaveAttribute("data-suspended", "");
  await page.evaluate(() => {
    delete document.hidden;
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(scene).toHaveAttribute("data-running", "true");
  await expect(stars).not.toHaveAttribute("data-suspended", "");

  await page.getByRole("button", { name: "Pause animation" }).click();
  const frame = await canvas.evaluate((element) => element.toDataURL());
  await page.evaluate(() => { document.documentElement.dataset.theme = "light"; });
  await expect.poll(() => canvas.evaluate((element) => element.toDataURL())).not.toBe(frame);
  await expect(scene).toHaveAttribute("data-running", "false");
  await page.getByRole("button", { name: "Resume animation" }).click();
  await page.locator("#stack-section").scrollIntoViewIfNeeded();
  await expect(scene).toHaveAttribute("data-running", "false");
  await expect(stars).toHaveAttribute("data-suspended", "");
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect(scene).toHaveAttribute("data-running", "true");
  await expect(stars).not.toHaveAttribute("data-suspended", "");
});

test("the home scene survives client navigation and the console explains unsupported effects", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./");
  await page.getByRole("button", { name: "Open operations console" }).click();
  await page.locator("[data-terminal-input]").fill("warp");
  await page.locator("[data-terminal-input]").press("Enter");
  await expect(page.getByText("The home scene does not support the console's 3D effects.", { exact: true })).toBeVisible();
  await page.keyboard.press("Escape");

  await page.evaluate(() => { window.navigationProbe = true; });
  for (let i = 0; i < 2; i++) {
    await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Work", exact: true }).click();
    await expect(page).toHaveURL(/\/work\/$/);
    await expect(page.locator("home-flow")).toHaveCount(0);
    await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Home", exact: true }).click();
    await expect(page.locator("home-flow")).toHaveAttribute("data-running", "true");
    await page.getByRole("button", { name: "Pause animation" }).click();
    await expect(page.locator("home-flow")).toHaveAttribute("data-running", "false");
    await page.getByRole("button", { name: "Resume animation" }).click();
    await expect(page.locator("home-flow")).toHaveAttribute("data-running", "true");
  }
  expect(await page.evaluate(() => window.navigationProbe)).toBe(true);
  expect(errors).toEqual([]);
});

test("the other main pages remain usable", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const path of ["about/", "work/", "blog/", "contact/"]) {
    await page.goto(path);
    await expect(page.locator("main h1")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(1440);
  }
  expect(errors).toEqual([]);
});

test("the static artwork remains available when a canvas cannot be initialized", async ({ page }) => {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.addInitScript(() => {
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (this.closest("home-flow") && type === "2d") return null;
      return getContext.call(this, type, ...args);
    };
  });
  await page.goto("./");
  await expect(page.locator(".home-flow__fallback")).toBeVisible();
  await expect(page.locator("home-flow")).not.toHaveAttribute("data-rendered", "");
  expect(errors).toContain("Home animation could not initialize its 2D canvas; the static artwork remains available.");
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("the introduction and static artwork remain visible", async ({ page }) => {
    await page.goto("./");
    await expect(page.locator("#hero-title")).toHaveText(/Karlo Jagar/);
    await expect(page.locator(".home-flow__fallback")).toBeVisible();
    await expect(page.locator("home-flow canvas")).toHaveCSS("opacity", "0");
    await expect(page.getByRole("button", { name: "Pause animation", includeHidden: true })).toBeHidden();
    await expect(page.locator(".edge-stars__drift")).toHaveCSS("animation-play-state", "paused");
  });
});
