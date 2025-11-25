import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Builds dynamic filter options for a given skill type (language, framework, soft skill, etc.).
 * Lets each listing surface whatever skills actually appear in its dataset instead of curating manual dropdowns.
 *
 * @param materialsDatabase Material dictionary that defines the scope.
 * @param skillsDatabase Skill metadata repository.
 * @param skillType Skill type to surface (drives which related skills show in the drawer).
 * @param excludeCategory Optional guard to hide overlapping categories, e.g., when mixing general vs. soft skills.
 * @returns Sorted, deduplicated filter options keyed by the skill slug.
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
          .map((skillKey) => ({
            skill: skillsDatabase[skillKey],
            slug: skillKey, // Use skillSlug for unique identification
          }))
          .filter(
            ({ skill, slug }) =>
              skill && // Ensure the skill exists
              skill.skillType === skillType &&
              (!excludeCategory || skill.category !== excludeCategory)
          )
      )
      .map(({ skill, slug: skillKey }) => ({
        slug: skillKey, // Use the skill key as the slug
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
