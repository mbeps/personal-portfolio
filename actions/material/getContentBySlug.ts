import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function getContentBySlug<T extends MaterialInterface>(
  slug: string,
  contentItems: T[],
): T | undefined {
  return contentItems.find((item) => item.slug === slug);
}
