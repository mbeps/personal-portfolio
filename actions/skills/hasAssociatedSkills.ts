import Skill from "@/types/skills";

export default function hasAssociatedSkills(
  skill: Skill,
  skills: Skill[]
): boolean {
  // Check if the skill has its own technicalGeneralSkills or technicalHardSkills
  if (
    skill.technicalGeneralSkills?.length ||
    skill.technicalHardSkills?.length
  ) {
    return true; // Return true immediately if the skill has its own associations
  }

  // Check if the skill is listed in the technicalHardSkills of any other skill
  for (let s of skills) {
    if (
      s.technicalHardSkills?.some((hardSkill) => hardSkill.slug === skill.slug)
    ) {
      return true; // Return true immediately if the skill is found in other's technicalHardSkills
    }
  }

  // Return false if no associations are found
  return false;
}
