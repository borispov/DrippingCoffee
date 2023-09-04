import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
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
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            name: "posts",
            label: "Posts",
            label_singular: "Post",
            folder: "src/pages/posts/",
            create: true,
            delete: true,
            slug: "{{slug}}",
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Description", name: "description", widget: "string" },
              { label: "Author", name: "author", widget: "string" },
              { label: "Date", name: "date", widget: "datetime" },
              { label: "Tags", name: "tags", widget: "list", default: ["post"] },
              { label: "Featured Image", name: "image", widget: "image" },
              { label: "Image Caption", name: "imageAlt", widget: "string" },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          }
        ],
      }
    }),
    mdx(), 
    sitemap(), 
    svelte(), 
  ],
  site: 'https://drippingcoffee.com/'
});