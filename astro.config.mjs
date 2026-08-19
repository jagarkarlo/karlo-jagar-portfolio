import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jagarkarlo.github.io",
  base: "/karlo-jagar-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
