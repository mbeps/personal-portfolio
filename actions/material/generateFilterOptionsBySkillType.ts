import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export default function generateFilterOptionsBySkillType<
  T extends MaterialInterface
>(
  allMaterialsMap: { [key: string]: T },
  skillType: SkillTypesEnum,
  excludeCategory?: string
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(allMaterialsMap)
      .flatMap((material) =>
        material.skills.filter(
          (skill) =>
            skill.skillType === skillType &&
            (!excludeCategory || skill.category !== excludeCategory)
        )
      )
      .map((skill) => ({
        slug: stringToSlug(skill.slug), // Assume stringToSlug is defined elsewhere
        entryName: skill.name,
      }))
      .reduce((unique, item) => {
        if (!unique.some((o) => o.slug === item.slug)) {
          unique.push(item);
        }
        return unique;
      }, [] as FilterOption[]) // Ensure FilterOption is defined elsewhere
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
