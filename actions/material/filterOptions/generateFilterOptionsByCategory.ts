import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import stringToSlug from "../../stringToSlug";

/**
 * Generates the filter options based on the categories of the materials.
 * For all the materials, it will generate a filter option for each unique category.
 * These are then used as options the user can select to filter the materials.
 *
 * @param materialsDatabase The database of all materials from which to generate the filter options
 * @returns The filter options generated from the categories of the materials
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
