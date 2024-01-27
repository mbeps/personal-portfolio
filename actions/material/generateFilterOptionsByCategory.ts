import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";

export default function generateFilterOptionsByCategory<
  T extends MaterialInterface,
>(allMaterials: T[]): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...allMaterials
      .map((material) => ({
        slug: stringToSlug(material.category),
        entryName: material.category,
      }))
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.slug === value.slug) === index,
      ),
  ];
}
