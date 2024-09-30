import { readFileSync } from "fs";

type FontFileType = "ttf" | "otf" | "woff";

export interface IFont {
  fontName: string;
  fileType: FontFileType;
}

export interface IPostData {
  title: string;
  publishDate: Date;
}

export interface IPost {
  data: IPostData;
}

export function Template(post: IPost) {
  const title = post.data.title;
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
    .format(new Date(post.data.publishDate))
    .replace(",", "");

  return `
    <div tw="flex p-8 h-full w-full bg-white flex-col justify-between ">
        <header tw="flex w-full">
          <p style="font-size:34px;font-family:RobotoBlack">Hruthik</p>  
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

export function loadFont({ fontName, fileType }: IFont) {
  const fontPath = `${process.cwd()}/public/font/${fontName}.${fileType}`;
  return readFileSync(fontPath);
}
