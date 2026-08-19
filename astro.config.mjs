import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jagarkarlo.github.io",
  base: "/karlo-jagar-portfolio",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
