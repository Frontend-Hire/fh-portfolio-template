import slugify from "slugify";

export function getSlug(value: string) {
  return slugify(value, { strict: true }).toLowerCase();
}
