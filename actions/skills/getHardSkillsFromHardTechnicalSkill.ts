import Skill from "@/types/skills";

export default function getTechnologiesFromHardTechnicalSkill(
  skill: Skill
): Skill[] {
  return skill.technicalHardSkills || [];
}
