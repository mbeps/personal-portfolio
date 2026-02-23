import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import Database from "@/interfaces/Database";

/**
 * Filters skills by a specific category so pages can isolate programming languages, DevOps tools, or other curated groups.
 *
 * @param skillKeys Skills to check.
 * @param skillsDatabase Skill map providing category metadata.
 * @param specificCategory Category to keep.
 * @returns Skill keys that belong to the requested category.
 */
export default function filterSkillsByCategory(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  specificCategory: SkillCategoriesEnum,
): SkillDatabaseKeys[] {
  return skillKeys.filter(
    (skillKey) => skillsDatabase[skillKey].category === specificCategory,
  );
}
