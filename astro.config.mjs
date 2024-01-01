import { defineConfig } from 'astro/config';
// import NetlifyCMS from 'astro-netlify-cms';
import remarkToc from 'remark-toc';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

export default defineConfig({
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[remarkToc, {
      heading: 'content'
    }]],
    drafts: true
  },
  integrations: [
    mdx(), 
    sitemap(), 
    svelte(), 
  ],
  site: 'https://drippingcoffee.com/'
});