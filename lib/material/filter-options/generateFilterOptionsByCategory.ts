import MaterialInterface from "@/database/materials/MaterialInterface";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";
import stringToSlug from "../../stringToSlug";

/**
 * Converts whatever editorial categories exist in the current dataset into drawer options so section lists and filters stay aligned.
 * Uses the category labels already present on each material, which lets curated sections introduce bespoke groupings.
 *
 * @param materialsDatabase Material map scoped to the active page.
 * @returns Unique filter options sorted by first appearance to preserve editorial ordering.
 */
export default function generateFilterOptionsByCategory<
  T extends MaterialInterface
>(materialsDatabase: Database<T>): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(materialsDatabase)
      .map((material) => ({
        slug: stringToSlug(material.category),
        entryName: material.category,
      }))
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.slug === value.slug) === index
      ),
  ];
}
