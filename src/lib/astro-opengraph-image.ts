import satori, { type Font } from "satori";
import { html } from "satori-html";
import sharp from "sharp";
interface ImageResponseOptions {
  fonts?: Font[];
}

export async function GenerateImageResponse(
  template: string,
  options: ImageResponseOptions,
) {
  const markup = html(template);
  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [...(options.fonts || [])],
  });

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(pngBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
}
