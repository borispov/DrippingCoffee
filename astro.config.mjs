// import { loadEnv } from "vite";
// const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(import.meta.env.MODE, process.cwd(), "");
// if (
//   !PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET
// ) {
//   throw new Error("Did you forget to run sanity init --env?");
// }

import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
// import sanity from "@sanity/astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[remarkToc, {
      heading: 'content'
    }]],
    drafts: true
  },
  integrations: [
  // sanity({
  //   projectId: PUBLIC_SANITY_PROJECT_ID,
  //   dataset: PUBLIC_SANITY_DATASET,
  //   useCdn: false,
  //   apiVersion: "2023-03-20",
  // }),
    mdx(), 
    sitemap(), 
    svelte(), 
    react(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    })
  ],
  site: 'https://drippingcoffee.com/'
});