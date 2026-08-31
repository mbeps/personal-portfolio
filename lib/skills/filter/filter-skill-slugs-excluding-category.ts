import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import type SkillInterface from "@/database/skills/skill-interface";
import type SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import type Database from "@/interfaces/database";

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
