import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterSkillsByType(
  skills: SkillInterface[],
  skillType: "hard" | "general" | "soft",
): SkillInterface[] {
  return skills.filter((skill) => skill.skillType === skillType);
}
