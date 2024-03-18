import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

// returns a database of skills which does not include the excluded category
export default function filterSkillsExcludingCategory(
  skills: Database<SkillInterface>,
  excludedCategory: SkillCategoriesEnum
): Database<SkillInterface> {
  const filteredSkills: Database<SkillInterface> = {};

  Object.entries(skills).forEach(([key, skill]) => {
    if (skill.category !== excludedCategory) {
      filteredSkills[key] = skill;
    }
  });

  return filteredSkills;
}
