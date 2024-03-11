import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function validateSlugsWithContent<T extends MaterialInterface>(
  slugs: string[],
  contentItemsMap: { [key: string]: T }
): boolean {
  return slugs.every((slug) => contentItemsMap.hasOwnProperty(slug));
}
