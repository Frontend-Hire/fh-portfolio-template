import type { FontStyle } from "satori";

type FontFileType = "ttf" | "otf" | "woff";

export type LocalFont = {
  fontName: string;
  fileType: FontFileType;
  name: string;
  style: FontStyle;
};

export type Post = {
  data: {
    title: string;
    publishDate: Date;
  };
};
