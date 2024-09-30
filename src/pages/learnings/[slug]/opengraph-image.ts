import { LOADED_FONTS } from "@constants/fonts";
import { generateImageResponse } from "@lib/opengraph-image";
import { Template } from "@utils/opengraph";
import { getSlug } from "@utils/slugs";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export async function getStaticPaths() {
  const allLearnings = await getCollection("learnings");

  return allLearnings
    .filter((learning) => !learning.data.isDraft)
    .map((learning: { data: { title: string } }) => ({
      params: { slug: getSlug(learning.data.title) },
      props: { learning },
    }));
}

export const GET: APIRoute = async function get({ params }) {
  const allLearnings = await getCollection("learnings");

  const learning = allLearnings.find(
    (learning: { data: { title: string } }) =>
      getSlug(learning.data.title) === params.slug,
  );

  if (!learning) return new Response("Page not found", { status: 404 });

  return generateImageResponse(Template(learning), {
    fonts: LOADED_FONTS,
  });
};
