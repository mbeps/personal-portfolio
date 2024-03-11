import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function getContentBySlug<T extends MaterialInterface>(
  slug: string,
  contentItemsMap: { [key: string]: T }
): T | undefined {
  // Directly return the item by accessing the hashmap using the slug as a key
  return contentItemsMap[slug];
}
