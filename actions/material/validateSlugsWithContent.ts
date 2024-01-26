import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function validateSlugsWithContent<T extends MaterialInterface>(
  slugs: string[],
  contentItems: T[],
): boolean {
  return slugs.every((slug) => contentItems.some((item) => item.slug === slug));
}
