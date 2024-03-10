import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function applySearchResultsToHashMap<
  T extends MaterialInterface
>(
  filteredArray: T[],
  originalHashMap: { [key: string]: T }
): { [key: string]: T } {
  const filteredHashMap: { [key: string]: T } = {};

  filteredArray.forEach((item) => {
    const itemInHashMap = originalHashMap[item.slug];
    if (itemInHashMap) {
      filteredHashMap[item.slug] = itemInHashMap;
    }
  });

  return filteredHashMap;
}
