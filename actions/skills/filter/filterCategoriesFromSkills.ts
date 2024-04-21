import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";

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
