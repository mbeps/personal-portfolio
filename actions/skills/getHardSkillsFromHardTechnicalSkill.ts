import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function getTechnologiesFromHardTechnicalSkill(
  skill: SkillInterface,
): SkillInterface[] {
  return skill.technicalHardSkills || [];
}
