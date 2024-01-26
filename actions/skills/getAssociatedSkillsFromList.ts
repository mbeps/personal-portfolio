import SkillInterface from "@/interfaces/skills/SkillInterface";
import getAssociatedSkills from "./getAssociatedSkills";

export default function getAssociatedSkillsFromList(
  skills: SkillInterface[],
  skillType?: "hard" | "general" | "soft" | "all",
): SkillInterface[] {
  const allAssociatedSkills: SkillInterface[] = [];

  // Iterate through each skill and gather associated skills
  skills.forEach((skill) => {
    const associatedSkills = getAssociatedSkills(skills, skill, skillType);
    allAssociatedSkills.push(...associatedSkills);
  });

  // Remove duplicates
  const uniqueSkills = Array.from(
    new Set(allAssociatedSkills.map((skill) => skill.slug)),
  )
    .map((slug) => skills.find((skill) => skill.slug === slug))
    .filter((skill) => skill !== undefined) as SkillInterface[];

  return uniqueSkills;
}
