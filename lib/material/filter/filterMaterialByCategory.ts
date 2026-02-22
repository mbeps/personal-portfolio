import stringToSlug from "@/lib/stringToSlug";
import MaterialInterface from "@/database/materials/MaterialInterface";
import Database from "@/interfaces/Database";
import filterMaterialKeysByPredicate from "@/lib/material/filter/filterMaterialKeysByPredicate";

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
  materialsDatabase: Database<T>, // Keep materialsMap for accessing material details
): string[] {
  return filterMaterialKeysByPredicate(
    materialKeys,
    materialsDatabase,
    (material) =>
      Boolean(
        material && stringToSlug(material.category) === stringToSlug(category),
      ),
  );
}
