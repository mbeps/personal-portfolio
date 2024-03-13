import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function applySearchResultsToMaterial<
  T extends MaterialInterface
>(
  filteredArray: T[],
  originalHashMap: { [key: string]: T }
): { [key: string]: T } {
  const keyMap: Map<T, string> = new Map();

  // Reverse-map objects to their keys
  Object.entries(originalHashMap).forEach(([key, item]) => {
    keyMap.set(item, key);
  });

  const filteredHashMap: { [key: string]: T } = {};

  filteredArray.forEach((item) => {
    const key = keyMap.get(item);
    if (key) {
      filteredHashMap[key] = item;
    }
  });

  return filteredHashMap;
}
