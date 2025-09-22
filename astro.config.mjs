import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://kamaldhingra1.github.io",
  base: "/me/",
  outDir: './docs',
  output: "static",
  build: {
    assets: "astro"
  },
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})