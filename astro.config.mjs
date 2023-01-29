import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import netlify from "@astrojs/netlify/functions";
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), solid(), mdx(), sitemap()],
  site: `https://www.drippingcoffee.com`,
  adapter: netlify()
});