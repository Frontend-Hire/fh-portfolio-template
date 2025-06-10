import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    isDraft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    canonicalUrl: z.string().url().optional(),
  }),
});

const learningsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    isDraft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  learnings: learningsCollection,
};
