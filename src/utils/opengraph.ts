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
