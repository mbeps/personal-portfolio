import { Skill } from "@/types/skills";

export default function getSkillBySlug(
  slug: string,
  skillsArray: Skill[]
): Skill | undefined {
  return skillsArray.find((skill) => skill.slug === slug);
}
