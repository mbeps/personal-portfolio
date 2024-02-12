import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";

export default function filterSkillsByType(
  skills: SkillInterface[],
  skillType: SkillTypes
): SkillInterface[] {
  return skills.filter((skill) => skill.skillType === skillType);
}
