import stringToSlug from "@/actions/stringToSlug";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import Database from "@/interfaces/Database";

/**
 * Handles category filtering for views that expose editorial groupings (e.g., “Research”, “Talks”, etc.).
 * Maintains whatever ordering the list already had by only filtering the incoming keys.
 *
 * @param category Category label selected via the drawer.
 * @param materialKeys Keys currently visible before the category filter is applied.
 * @param materialsDatabase Database map for metadata access.
 * @returns Keys limited to the chosen category.
 */
export default function filterMaterialByCategory<T extends MaterialInterface>(
  category: string,
  materialKeys: string[],
  materialsDatabase: Database<T> // Keep materialsMap for accessing material details
): string[] {
  const filteredMaterialSlugs = materialKeys.reduce((acc: string[], key) => {
    const material = materialsDatabase[key];
    if (
      material &&
      stringToSlug(material.category) === stringToSlug(category)
    ) {
      acc.push(key);
    }
    return acc;
  }, []); // Initialize the accumulator as an empty array of strings

  return filteredMaterialSlugs;
}
