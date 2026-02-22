import MaterialInterface from "@/database/materials/MaterialInterface";
import Database from "@/interfaces/Database";
import Fuse from "fuse.js";
import { useMemo } from "react";

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
  const entries = useMemo(
    () => Object.entries(itemsMap) as [string, T][],
    [itemsMap],
  );

  // Enhanced search options to handle nested arrays
  const searchOptions = useMemo(
    () => ({
      keys: searchKeys.map((key) => {
        // Adding custom path logic for nested arrays like 'skills'
        if (key === "skills") {
          return {
            name: key,
            getFn: (entry: [string, T]) =>
              entry[1].skills.map((skill) => skill.toString()), // Assuming enum values are converted to string for comparison
          };
        }
        return {
          name: key,
          getFn: (entry: [string, T]) => {
            const value = (entry[1] as Record<string, unknown>)[key];

            if (Array.isArray(value)) {
              return value.map((item) => item?.toString() ?? "");
            }

            return value?.toString() ?? "";
          },
        };
      }),
      threshold: 0.3, // Fixed threshold
      includeScore: true, // Optional: include scoring to debug or refine searches
    }),
    [searchKeys],
  );

  // Initialize Fuse with the items array and search options
  const fuse = useMemo(
    () => new Fuse(entries, searchOptions),
    [entries, searchOptions],
  );

  return useMemo(() => {
    if (!searchTerm) {
      return entries.map(([key]) => key);
    }

    return fuse.search(searchTerm).map((result) => result.item[0]);
  }, [entries, fuse, searchTerm]);
}

export default useFuseMaterialSearch;
