import { useMemo } from "react";
import Fuse from "fuse.js";
import MaterialInterface from "@/database/Materials/MaterialInterface";

/**
 * Custom hook for performing a fuzzy search using Fuse.js on a hashmap of items.
 *
 * @param itemsMap - A hashmap of items to search.
 * @param searchTerm - The term to search for.
 * @param searchOptions - Fuse.js search options.
 * @returns A list of keys of the items that match the search term.
 * @see {@link https://fusejs.io/} for more information on Fuse.js.
 */
function useFuseSearch<T extends MaterialInterface>(
  itemsMap: Database<T>,
  searchTerm: string,
  searchKeys: string[]
): string[] {
  // Enhanced search options to handle nested arrays
  const searchOptions = useMemo(
    () => ({
      keys: searchKeys.map((key) => {
        // Adding custom path logic for nested arrays like 'skills'
        if (key.includes("skills")) {
          return {
            name: key,
            getFn: (item: T) => item.skills.map((skill) => skill.toString()), // Assuming enum values are converted to string for comparison
          };
        }
        return key;
      }),
      threshold: 0.3, // Fixed threshold
      includeScore: true, // Optional: include scoring to debug or refine searches
    }),
    [searchKeys]
  );

  // Convert the hashmap into an array for Fuse.js
  const itemsArray: T[] = useMemo(() => Object.values(itemsMap), [itemsMap]);

  // Initialize Fuse with the items array and search options
  const fuse = useMemo(
    () => new Fuse(itemsArray, searchOptions),
    [itemsArray, searchOptions]
  );

  // Perform the search
  const searchedItems = useMemo(() => {
    return searchTerm
      ? fuse.search(searchTerm).map((result) => result.item)
      : itemsArray;
  }, [fuse, itemsArray, searchTerm]);

  // Create a reverse lookup map for item names to keys
  const nameToKeyMap = useMemo(() => {
    return Object.keys(itemsMap).reduce((acc, key) => {
      const item = itemsMap[key];
      acc[item.name] = key;
      return acc;
    }, {} as { [name: string]: string });
  }, [itemsMap]);

  // Convert the searched items back into a hashmap using the reverse lookup
  const filteredItemsMap = useMemo(() => {
    return searchedItems.reduce((acc, item) => {
      const key = nameToKeyMap[item.name];
      if (key) {
        acc[key] = item;
      }
      return acc;
    }, {} as Database<T>);
  }, [searchedItems, nameToKeyMap]);

  return Object.keys(filteredItemsMap);
}

export default useFuseSearch;
