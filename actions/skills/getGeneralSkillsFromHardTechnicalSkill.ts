import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function getGeneralSkillsFromHardTechnicalSkill(
  skill: SkillInterface,
): SkillInterface[] {
  return skill.technicalGeneralSkills || [];
}
