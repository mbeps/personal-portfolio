import stringToSlug from "@/actions/stringToSlug";
import MaterialInterface from "@/database/Materials/MaterialInterface";

/**
 * Filters the materials that match a specific category.
 *
 * @param category The specific category to filter
 * @param materialKeys The keys of the materials to filter
 * @param materialsDatabase All the materials in the database so that we can access the material details
 * @returns The keys of the materials that match the category
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
