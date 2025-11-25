import MaterialInterface from "@/database/Materials/MaterialInterface";
import Database from "@/interfaces/Database";

/**
 * Backs the “Show archived” toggle so we can expose historical work without polluting the primary view.
 *
 * @param isArchived `true` when archived content should be shown.
 * @param materialKeys Keys currently under consideration.
 * @param materialDatabase Lookup map with metadata, including the `archived` flag.
 * @returns Keys filtered by the archive selection.
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
