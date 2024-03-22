import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export function filterSkillsByCategoryHashmapOfSkills(
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

export function filterSkillSlugsByCategoryArrayOfKeys(
  skills: Database<SkillInterface>,
  specificCategory: SkillCategoriesEnum
): SkillSlugEnum[] {
  const filteredSkillSlugs: SkillSlugEnum[] = [];

  Object.entries(skills).forEach(([key, skill]) => {
    if (skill.category === specificCategory) {
      filteredSkillSlugs.push(key as SkillSlugEnum);
    }
  });

  return filteredSkillSlugs;
}
