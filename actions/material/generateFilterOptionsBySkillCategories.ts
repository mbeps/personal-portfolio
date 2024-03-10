import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";

export default function generateFilterOptionsBySkillCategories<
  T extends MaterialInterface
>(allMaterials: T[]): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...allMaterials
      .flatMap((material) =>
        material.skills.map((skill) => ({
          slug: stringToSlug(skill.category),
          entryName: skill.category,
        }))
      )
      .reduce((unique, item) => {
        if (unique.findIndex((v) => v.slug === item.slug) === -1) {
          unique.push(item);
        }
        return unique;
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}

export function generateFilterOptionsBySkillCategoriesHashMap<
  T extends MaterialInterface
>(allMaterialsMap: { [key: string]: T }): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(allMaterialsMap)
      .flatMap((material) =>
        material.skills.map((skill) => ({
          slug: stringToSlug(skill.category),
          entryName: skill.category,
        }))
      )
      .reduce((unique, item) => {
        if (!unique.some((v) => v.slug === item.slug)) {
          unique.push(item);
        }
        return unique;
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
