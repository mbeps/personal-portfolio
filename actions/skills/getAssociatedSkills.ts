import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function getAssociatedSkills(
  skills: SkillInterface[],
  skillToCheck: SkillInterface | SkillInterface[],
): SkillInterface[] {
  const associatedSkills: SkillInterface[] = [];

  // Recursive function to check nested skills
  const isSkillAssociated = (
    skill: SkillInterface,
    skillSlug: string,
  ): boolean => {
    if (skill.slug === skillSlug) {
      return true;
    }
    if (skill.relatedSkills) {
      return skill.relatedSkills.some((nestedSkill) =>
        isSkillAssociated(nestedSkill, skillSlug),
      );
    }
    return false;
  };

  const checkSkillsAssociation = (checkSkill: SkillInterface) => {
    // Iterate over each skill and check for association
    skills.forEach((skill) => {
      if (
        isSkillAssociated(skill, checkSkill.slug) &&
        skill.slug !== checkSkill.slug
      ) {
        associatedSkills.push(skill);
      }
    });
  };

  if (Array.isArray(skillToCheck)) {
    skillToCheck.forEach((checkSkill) => {
      checkSkillsAssociation(checkSkill);
    });
  } else {
    checkSkillsAssociation(skillToCheck);
  }

  // Remove duplicates from associatedSkills
  return Array.from(new Set(associatedSkills.map((skill) => skill.slug)))
    .map((slug) => skills.find((skill) => skill.slug === slug))
    .filter((skill) => skill !== undefined) as SkillInterface[];
}
