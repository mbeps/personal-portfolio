import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function hasAssociatedSkills(
  skill: SkillInterface,
  skills: SkillInterface[],
): boolean {
  // Check if the skill has its own skills
  if (skill.relatedSkills?.length) {
    return true; // Return true immediately if the skill has its own nested skills
  }

  // Check if the skill is listed in the skills of any other skill
  for (let s of skills) {
    if (
      s.relatedSkills?.some((nestedSkill) => nestedSkill.slug === skill.slug)
    ) {
      return true; // Return true immediately if the skill is found in other's skills
    }
  }

  // Return false if no associations are found
  return false;
}
