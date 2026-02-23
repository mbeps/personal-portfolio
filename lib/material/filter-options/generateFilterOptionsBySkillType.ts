import MaterialInterface from "@/database/materials/MaterialInterface";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";
import generateFilterOptions from "./generateFilterOptions";

/**
 * Builds dynamic filter options for a given skill type (language, framework, etc.).
 * Lets each listing surface whatever skills actually appear in its dataset instead of curating manual dropdowns.
 *
 * @param materialsDatabase Material dictionary that defines the scope.
 * @param skillsDatabase Skill metadata repository.
 * @param skillType Skill type to surface (drives which related skills show in the drawer).
 * @param excludeCategory Optional guard to hide overlapping categories.
 * @returns Sorted, deduplicated filter options keyed by the skill slug.
 */
export default function generateFilterOptionsBySkillType<
  T extends MaterialInterface,
>(
  materialsDatabase: Database<T>,
  skillsDatabase: Database<SkillInterface>,
  skillType: SkillTypesEnum,
  excludeCategory?: SkillCategoriesEnum,
): FilterOption[] {
  return generateFilterOptions(
    materialsDatabase,
    (material) =>
      material.skills.flatMap((skillKey) => {
        const skill = skillsDatabase[skillKey];
        if (
          !skill ||
          skill.skillType !== skillType ||
          (excludeCategory && skill.category === excludeCategory)
        ) {
          return [];
        }
        return [{ slug: skillKey, entryName: skill.name }];
      }),
    true,
  );
}
