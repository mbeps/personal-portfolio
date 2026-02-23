import MaterialInterface from "@/database/materials/MaterialInterface";
import Database from "@/interfaces/Database";
import useFuseSearch from "./useFuseSearch";

// Stable module-level reference keeps the Fuse options memo from firing on every render.
const MATERIAL_ARRAY_FIELDS: Record<
  string,
  (item: MaterialInterface) => string[]
> = {
  skills: (item) => item.skills.map((skill) => skill.toString()),
};

/**
 * Shared Fuse.js wrapper for material datasets so every listing behaves consistently when searching names, summaries, or nested skills.
 * Used inside `useMaterialFilterState`, which expects the return value to remain stable even as datasets grow.
 *
 * @template T The type of the material, extending `MaterialInterface`.
 * @param itemsMap Hashmap of materials, usually one of the database maps.
 * @param searchTerm Query read from the URL or command palette.
 * @param searchKeys Fields inspected by Fuse, including derived ones such as `skills`.
 * @returns Array of material keys ranked by Fuse, falling back to all keys when the query is empty.
 */
function useFuseMaterialSearch<T extends MaterialInterface>(
  itemsMap: Database<T>,
  searchTerm: string,
  searchKeys: string[],
): string[] {
  return useFuseSearch<T>(
    itemsMap as Record<string, T>,
    searchTerm,
    searchKeys,
    MATERIAL_ARRAY_FIELDS as Partial<Record<string, (item: T) => string[]>>,
  );
}

export default useFuseMaterialSearch;
