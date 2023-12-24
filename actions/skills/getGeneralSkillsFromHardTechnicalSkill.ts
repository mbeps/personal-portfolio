import Skill from "@/types/skills";

export default function getGeneralSkillsFromHardTechnicalSkill(
  skill: Skill
): Skill[] {
  return skill.technicalGeneralSkills || [];
}
