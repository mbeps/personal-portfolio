import Fuse from "fuse.js";

/**
 * Executes a pure fuzzy search over any key-value database hashmap using Fuse.js.
 * Safe for use in server components, route handlers, and MCP tools without React hooks.
 *
 * @template TItem The item type stored in the database map.
 * @param database Key-value record of database entries.
 * @param searchTerm Optional query string. If undefined or empty, returns all keys in entry order.
 * @param searchKeys List of property names on TItem to search against. Defaults to `["name"]`.
 * @param arrayFields Optional mapping of property names to extractor functions returning string arrays.
 * @returns Array of matched database keys ranked by relevance.
 */
export function searchDatabase<TItem>(
  database: Record<string, TItem>,
  searchTerm?: string,
  searchKeys: string[] = ["name"],
  arrayFields?: Partial<Record<string, (item: TItem) => string[]>>,
): string[] {
  const entries = Object.entries(database);
  if (!searchTerm || searchTerm.trim() === "") {
    return entries.map(([key]) => key);
  }

  const fuse = new Fuse(entries, {
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
  });

  return fuse.search(searchTerm).map((result) => result.item[0]);
}

export default searchDatabase;
