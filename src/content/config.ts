import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    publishDate: z.date(),
    isDraft: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
