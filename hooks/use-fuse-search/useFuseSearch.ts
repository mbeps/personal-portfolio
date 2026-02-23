import Fuse from "fuse.js";
import { useMemo } from "react";

/**
 * Generic Fuse.js wrapper for any database hashmap so all listing pages share
 * the same fuzzy-search ranking logic.
 *
 * @template TItem The type of each database value.
 * @param database Hashmap of items (key → item).
 * @param searchTerm Query string; empty string returns all keys in insertion order.
 * @param searchKeys Fields inspected by Fuse.
 * @param arrayFields Optional map of field names to extractor functions.
 *   When Fuse encounters a matching key it calls the extractor to retrieve the
 *   string array to search against, instead of using the raw field value.
 * @returns Array of database keys ranked by Fuse, or all keys when query is empty.
 */
function useFuseSearch<TItem>(
  database: Record<string, TItem>,
  searchTerm: string,
  searchKeys: string[],
  arrayFields?: Partial<Record<string, (item: TItem) => string[]>>,
): string[] {
  const entries = useMemo(
    () => Object.entries(database) as [string, TItem][],
    [database],
  );

  const searchOptions = useMemo(
    () => ({
      keys: searchKeys.map((key) => {
        const arrayExtractor = arrayFields?.[key];
        if (arrayExtractor) {
          return {
            name: key,
            getFn: (entry: [string, TItem]) => arrayExtractor(entry[1]),
          };
        }
        return {
          name: key,
          getFn: (entry: [string, TItem]) => {
            const value = (entry[1] as Record<string, unknown>)[key];
            if (Array.isArray(value)) {
              return value.map((item) => item?.toString() ?? "");
            }
            return value?.toString() ?? "";
          },
        };
      }),
      threshold: 0.3,
      includeScore: true,
    }),
    // arrayFields is expected to be a stable module-level constant from callers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchKeys, arrayFields],
  );

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

export default useFuseSearch;
