import { LOADED_FONTS } from "@constants/fonts";
import { generateImageResponse } from "@lib/opengraph-image";
import { Template } from "@utils/opengraph";
import { getSlug } from "@utils/slugs";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export async function getStaticPaths() {
  const blogEntries = await getCollection("blog");

  return blogEntries
    .filter((post) => !post.data.isDraft)
    .map((post: { data: { title: string } }) => ({
      params: { slug: getSlug(post.data.title) },
      props: { post },
    }));
}

export const GET: APIRoute = async function get({ params }) {
  const blogEntries = await getCollection("blog");

  const post = blogEntries.find(
    (post: { data: { title: string } }) =>
      getSlug(post.data.title) === params.slug,
  );

  if (!post) return new Response("Page not found", { status: 404 });

  return generateImageResponse(Template(post), {
    fonts: LOADED_FONTS,
  });
};
