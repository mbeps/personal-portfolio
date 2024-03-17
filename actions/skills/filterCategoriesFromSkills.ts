import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

/**
 * Filter out skills that belong to the specified categories.
 * @param skills - The skills hashmap to filter.
 * @param ignoredCategories - The categories to ignore.
 * @returns The filtered skills hashmap.
 */
export default function filterCategoriesFromSkills(
  skills: Database<SkillInterface>,
  ignoredCategories: SkillCategoriesEnum[]
): Database<SkillInterface> {
  const filteredSkills: Database<SkillInterface> = {};

  Object.entries(skills).forEach(([key, skill]) => {
    if (!ignoredCategories.includes(skill.category)) {
      filteredSkills[key] = skill;
    }
  });

  return filteredSkills;
}
