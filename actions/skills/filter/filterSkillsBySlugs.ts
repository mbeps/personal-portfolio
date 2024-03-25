import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterSkillsBySlugs(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface }
): { [key in SkillSlugEnum]?: SkillInterface } {
  const filteredSkills: { [key in SkillSlugEnum]?: SkillInterface } = {};

  skillSlugs.forEach((slug) => {
    const skill = allSkills[slug];
    if (skill) {
      filteredSkills[slug] = skill;
    }
  });

  return filteredSkills;
}
