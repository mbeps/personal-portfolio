import MaterialInterface from "@/database/Materials/MaterialInterface";

/**
 * Filters the materials that match a specific archived status.
 * If the archived status is true, the archived materials will be included.
 * If the archived status is false, the archived materials will be excluded.
 *
 * @param isArchived Whether the archived materials should be included
 * @param materialKeys The keys of the materials to filter
 * @param materialDatabase All the materials in the database
 * @returns The keys of the materials that match the archived status
 */
export default function filterMaterialByArchivedStatus<
  T extends MaterialInterface
>(
  isArchived: boolean,
  materialKeys: string[],
  materialDatabase: Database<T>
): string[] {
  return materialKeys.reduce<string[]>((acc, key) => {
    const material: T = materialDatabase[key];
    const shouldBeIncluded: boolean = isArchived ? true : !material.archived;
    if (shouldBeIncluded) {
      acc.push(key);
    }
    return acc;
  }, []);
}
