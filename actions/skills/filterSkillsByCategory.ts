import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterSkillsByCategory(
  skills: Database<SkillInterface>,
  specificCategory: SkillCategoriesEnum
): Database<SkillInterface> {
  const filteredSkills: Database<SkillInterface> = {};

  Object.entries(skills).forEach(([key, skill]) => {
    if (skill.category === specificCategory) {
      filteredSkills[key] = skill;
    }
  });

  return filteredSkills;
}
