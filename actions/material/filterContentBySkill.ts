import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterContentBySkill<T extends MaterialInterface>(
  contentItems: T[],
  selectedSkill: SkillInterface,
): T[] {
  const includesSkill = (
    skillList: SkillInterface[],
    skillToCheck: SkillInterface,
  ): boolean => {
    return skillList.some((skill) => skill.slug === skillToCheck.slug);
  };

  return contentItems.filter(
    (item) => "skills" in item && includesSkill(item.skills, selectedSkill),
  );
}
