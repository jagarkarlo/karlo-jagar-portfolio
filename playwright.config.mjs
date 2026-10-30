import { defineConfig } from "@playwright/test";

const externalURL = process.env.PORTFOLIO_TEST_URL;
const baseURL = externalURL ?? "http://127.0.0.1:4338/karlo-jagar-portfolio/";

export default defineConfig({
  testDir: "./tests",
  workers: 1,
  use: {
    baseURL,
    viewport: { width: 1440, height: 900 },
  },
  webServer: externalURL ? undefined : {
    command: "npm run dev -- --host 127.0.0.1 --port 4338 --strictPort",
    url: baseURL,
    timeout: 60_000,
  },
});
