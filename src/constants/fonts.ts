import type { LocalFont } from "@types";
import { loadFont } from "@utils/opengraph";

const FONTS: LocalFont[] = [
  {
    name: "RobotoLight",
    fontName: "Roboto-Light",
    fileType: "ttf",
    style: "normal",
  },
  {
    name: "RobotoBlack",
    fontName: "Roboto-Black",
    fileType: "ttf",
    style: "normal",
  },
  {
    name: "RobotoMedium",
    fontName: "Roboto-Medium",
    fileType: "ttf",
    style: "normal",
  },
];

export const LOADED_FONTS = FONTS.map(
  ({ name, fontName, fileType, style }) => ({
    name,
    data: loadFont({ fontName, fileType, style, name }),
    style,
  }),
);
