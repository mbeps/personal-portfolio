import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterSkillsBySlugs(
  skillSlugs: SkillKeysEnum[],
  allSkills: Database<SkillInterface>
): { [key in SkillKeysEnum]?: SkillInterface } {
  const filteredSkills: { [key in SkillKeysEnum]?: SkillInterface } = {};

  skillSlugs.forEach((slug) => {
    const skill = allSkills[slug];
    if (skill) {
      filteredSkills[slug] = skill;
    }
  });

  return filteredSkills;
}
