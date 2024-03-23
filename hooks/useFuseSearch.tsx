import { useMemo } from "react";
import Fuse from "fuse.js";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

/**
 * Custom hook for performing a fuzzy search using Fuse.js on a hashmap of items.
 * @param itemsMap - A hashmap of items to search.
 * @param searchTerm - The term to search for.
 * @param searchOptions - Fuse.js search options.
 * @returns A hashmap of items that match the search term.
 */
function useFuseSearch<T extends MaterialInterface>(
  itemsMap: { [key: string]: T },
  searchTerm: string,
  searchKeys: string[]
): string[] {
  // Define search options inside the hook, with fixed threshold and dynamic keys
  const searchOptions = useMemo(
    () => ({
      keys: searchKeys,
      threshold: 0.3, // Fixed threshold
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
      acc[item.name] = key; // Assuming 'name' is a unique identifier
      return acc;
    }, {} as { [name: string]: string });
  }, [itemsMap]);

  // Convert the searched items back into a hashmap using the reverse lookup
  const filteredItemsMap = useMemo(() => {
    return searchedItems.reduce((acc, item) => {
      const key = nameToKeyMap[item.name]; // Retrieve the original key using the item's name
      if (key) {
        acc[key] = item;
      }
      return acc;
    }, {} as { [key: string]: T });
  }, [searchedItems, nameToKeyMap]);

  return Object.keys(filteredItemsMap);
}

export default useFuseSearch;
