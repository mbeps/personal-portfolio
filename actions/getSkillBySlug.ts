import { Skill } from "@/types/skills";

export default function findSkillBySlug(
  slug: string,
  skillsArray: Skill[]
): Skill | undefined {
  return skillsArray.find((skill) => skill.slug === slug);
}
