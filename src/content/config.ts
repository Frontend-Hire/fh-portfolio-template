import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    isDraft: z.boolean().optional(),
  }),
});

const learningsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    isDraft: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  learnings: learningsCollection,
};
