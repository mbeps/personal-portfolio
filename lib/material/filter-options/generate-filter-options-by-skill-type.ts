import type MaterialInterface from "@/database/materials/material-interface";
import type SkillInterface from "@/database/skills/skill-interface";
import type SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import type SkillTypesEnum from "@/enums/skill/skill-types-enum";
import type Database from "@/interfaces/database";
import type FilterOption from "@/interfaces/filters/filter-option";
import generateFilterOptions from "./generate-filter-options";

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
