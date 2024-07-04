import { defineCollection } from "astro:content";

const machines = defineCollection({
  type: "content",
});

export const collections = {
  machines: machines,
};
