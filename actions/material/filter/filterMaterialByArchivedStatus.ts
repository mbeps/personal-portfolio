import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function filterMaterialByArchivedStatus<
  T extends MaterialInterface
>(
  includeArchived: boolean,
  materialKeys: string[],
  materialsMap: { [key: string]: T }
): string[] {
  return materialKeys.reduce<string[]>((acc, key) => {
    const material = materialsMap[key];
    const shouldBeIncluded = includeArchived ? true : !material.archived;
    if (shouldBeIncluded) {
      acc.push(key);
    }
    return acc;
  }, []);
}
