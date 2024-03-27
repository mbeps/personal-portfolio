import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../../stringToSlug";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

/**
 * Generates the filter options based on the categories of the materials.
 * For all the materials, it will generate a filter option for each unique category within the skills.
 * These are then used as options the user can select to filter the materials.
 *
 * @param materialsDatabase The database of all materials from which to generate the filter options
 * @param skillsDatabase The database of all skills from which to generate the filter options
 * @param skillType The specific skill type to filter for in the materials
 * @param excludeCategory Category to exclude from the filter options
 * @returns The filter options generated from the categories of the materials
 */
export default function generateFilterOptionsBySkillType<
  T extends MaterialInterface
>(
  materialsDatabase: Database<T>,
  skillsDatabase: Database<SkillInterface>,
  skillType: SkillTypesEnum,
  excludeCategory?: SkillCategoriesEnum
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(materialsDatabase)
      .flatMap((material) =>
        material.skills
          .map((skillSlug) => skillsDatabase[skillSlug]) // Map slugs to SkillInterface objects
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
