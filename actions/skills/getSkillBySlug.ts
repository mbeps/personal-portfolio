import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function getSkillBySlug(
  slug: string,
  skillsArray: SkillInterface[],
): SkillInterface | undefined {
  return skillsArray.find((skill) => skill.slug === slug);
}
