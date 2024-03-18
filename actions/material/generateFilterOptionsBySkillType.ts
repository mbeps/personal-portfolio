import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function generateFilterOptionsBySkillType<
  T extends MaterialInterface
>(
  allMaterialsMap: { [key: string]: T },
  skillsMap: { [key: string]: SkillInterface },
  skillType: SkillTypesEnum,
  excludeCategory?: SkillCategoriesEnum
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(allMaterialsMap)
      .flatMap((material) =>
        material.skills
          .map((skillSlug) => skillsMap[skillSlug]) // Map slugs to SkillInterface objects
          .filter(
            (skill) =>
              skill && // Ensure the skill exists
              skill.skillType === skillType &&
              (!excludeCategory || skill.category !== excludeCategory)
          )
      )
      .map((skill) => ({
        slug: stringToSlug(skill.name), // Convert the skill name to a slug
        entryName: skill.name,
      }))
      .reduce((unique, item) => {
        if (!unique.some((o) => o.slug === item.slug)) {
          unique.push(item);
        }
        return unique;
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
