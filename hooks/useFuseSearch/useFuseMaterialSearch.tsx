import MaterialInterface from "@/database/Materials/MaterialInterface";
import Database from "@/interfaces/Database";
import Fuse from "fuse.js";
import { useMemo } from "react";

/**
 * A hook for performing fuzzy search on a database of materials.
 * It uses Fuse.js to search through specified fields of the materials.
 * This is optimized with `useMemo` to avoid re-computation on every render.
 *
 * @template T The type of the material, extending `MaterialInterface`.
 * @param itemsMap A map of materials to search within.
 * @param searchTerm The string to search for.
 * @param searchKeys The fields within each material to search against.
 * @returns An array of keys for the materials that match the search term.
 */
function useFuseMaterialSearch<T extends MaterialInterface>(
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

export default useFuseMaterialSearch;
