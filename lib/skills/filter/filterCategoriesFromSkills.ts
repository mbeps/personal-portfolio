import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import Database from "@/interfaces/Database";

/**
 * Filter out skills that belong to the specified categories.
 *
 * @param skillsDatabase The database of all skills that need to be filtered
 * @param ignoredCategories The categories to ignore
 * @returns The filtered skill keys
 */
export default function filterCategoriesFromSkills(
  skillsDatabase: Database<SkillInterface>,
  ignoredCategories: SkillCategoriesEnum[]
): SkillDatabaseKeys[] {
  return Object.keys(skillsDatabase).filter((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    return !ignoredCategories.includes(skill.category);
  }) as SkillDatabaseKeys[];
}
