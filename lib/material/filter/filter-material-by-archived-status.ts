import type MaterialInterface from "@/database/materials/material-interface";
import type Database from "@/interfaces/database";
import filterMaterialKeysByPredicate from "@/lib/material/filter/filter-material-keys-by-predicate";

/**
 * Backs the “Show archived” toggle so we can expose historical work without polluting the primary view.
 *
 * @param isArchived `true` when archived content should be shown.
 * @param materialKeys Keys currently under consideration.
 * @param materialDatabase Lookup map with metadata, including the `archived` flag.
 * @returns Keys filtered by the archive selection.
 */
export default function filterMaterialByArchivedStatus<
  T extends MaterialInterface,
>(
  isArchived: boolean,
  materialKeys: string[],
  materialDatabase: Database<T>,
): string[] {
  return filterMaterialKeysByPredicate(
    materialKeys,
    materialDatabase,
    (material) => Boolean(material && (isArchived ? true : !material.archived)),
  );
}
