import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

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
): SkillKeysEnum[] {
  return Object.keys(skillsDatabase).filter((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    return !ignoredCategories.includes(skill.category);
  }) as SkillKeysEnum[];
}
