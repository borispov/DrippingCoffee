import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [mdx(), sitemap(), solidJs(), svelte()],
  site: 'https://www.drippingcoffee.com/',
});