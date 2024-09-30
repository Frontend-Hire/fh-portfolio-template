import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getSlug, loadFont, Template } from "../../../utils";
import { generateImageResponse } from "../../../lib/astro-opengraph-image";

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

  const robotoLight = loadFont({ fontName: "Roboto-Light", fileType: "ttf" });
  const robotoBlack = loadFont({ fontName: "Roboto-Black", fileType: "ttf" });
  const robotoMedium = loadFont({ fontName: "Roboto-Medium", fileType: "ttf" });

  return generateImageResponse(Template(learning), {
    fonts: [
      { name: "RobotoLight", data: robotoLight, style: "normal" },
      { name: "RobotoBlack", data: robotoBlack, style: "normal" },
      { name: "RobotoMedium", data: robotoMedium, style: "normal" },
    ],
  });
};
