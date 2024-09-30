import { SITE_CONFIG } from "@src/site-config";
import type { LocalFont, Post } from "@types";
import { readFileSync } from "fs";

export function Template(post: Post) {
  const title = post.data.title;
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
    .format(new Date(post.data.publishDate))
    .replace(",", "");

  return `
    <div tw="flex p-8 h-full w-full bg-white flex-col justify-between">
        <header tw="flex w-full">
          <p style="font-size:34px;font-family:RobotoBlack">${SITE_CONFIG.name}</p>  
        </header>
        <main tw="flex grow pb-2 flex-col items-start justify-end" >
          <p style="font-size:34px;font-family:RobotoMedium">
            ${title}
          </p>
          <p style="font-size:28px;font-family:RobotoLight">
            ${date}
          </p>
        </main>
    </div>
    `;
}

export function loadFont({ fontName, fileType }: LocalFont) {
  const fontPath = `${process.cwd()}/public/font/${fontName}.${fileType}`;
  return readFileSync(fontPath);
}
