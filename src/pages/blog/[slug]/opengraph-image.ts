import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getSlug, loadFont, Template } from "../../../utils";
import { generateImageResponse } from "../../../lib/astro-opengraph-image";

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
  const robotoLight = loadFont({ fontName: "Roboto-Light", fileType: "ttf" });
  const robotoBlack = loadFont({ fontName: "Roboto-Black", fileType: "ttf" });
  const robotoMedium = loadFont({ fontName: "Roboto-Medium", fileType: "ttf" });

  return generateImageResponse(Template(post), {
    fonts: [
      { name: "RobotoLight", data: robotoLight, style: "normal" },
      { name: "RobotoBlack", data: robotoBlack, style: "normal" },
      { name: "RobotoMedium", data: robotoMedium, style: "normal" },
    ],
  });
};
