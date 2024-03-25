import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../../stringToSlug";

export default function generateFilterOptionsByCategory<
  T extends MaterialInterface
>(allMaterialsMap: { [key: string]: T }): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(allMaterialsMap)
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
