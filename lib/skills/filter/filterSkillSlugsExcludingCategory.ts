import type SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import type SkillInterface from "@/database/skills/SkillInterface";
import type SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import type Database from "@/interfaces/Database";

/**
 * Removes skills belonging to a given category, handy when a page wants to show stacks without repeating their parent language.
 *
 * @param skillKeys Slugs to check.
 * @param skillsDatabase Skill lookup map.
 * @param excludedCategory Category that should be removed.
 * @returns Skill keys that are not part of the excluded category.
 */
export function filterSkillSlugsExcludingCategory(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  excludedCategory: SkillCategoriesEnum,
): SkillDatabaseKeys[] {
  return skillKeys.filter(
    (skillKey) => skillsDatabase[skillKey].category !== excludedCategory,
  );
}
