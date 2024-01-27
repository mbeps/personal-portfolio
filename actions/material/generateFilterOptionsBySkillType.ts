import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";

export default function generateFilterOptionsBySkillType<
  T extends MaterialInterface,
>(
  allMaterials: T[],
  skillType: "hard" | "general" | "soft",
  excludeCategory?: string,
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...allMaterials
      .flatMap((material) =>
        material.skills.filter(
          (skill) =>
            skill.skillType === skillType &&
            (!excludeCategory || skill.category !== excludeCategory),
        ),
      )
      .map((skill) => ({
        slug: stringToSlug(skill.slug),
        entryName: skill.name,
      }))
      .reduce((unique, item) => {
        if (unique.findIndex((v) => v.slug === item.slug) === -1) {
          unique.push(item);
        }
        return unique;
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
