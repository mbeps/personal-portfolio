import SkillInterface, {
  SkillTypesEnum,
} from "@/interfaces/skills/SkillInterface";

export function getAssociatedMentionedSkills(
  skills: SkillInterface[],
  skillToCheck: SkillInterface | SkillInterface[],
  skillType?: SkillTypesEnum // No default value needed, undefined signifies "all"
): SkillInterface[] {
  const associatedSkills: SkillInterface[] = [];

  // Recursive function to check nested skills
  const isSkillAssociated = (
    skill: SkillInterface,
    skillSlug: string
  ): boolean => {
    if (skill.slug === skillSlug) {
      return true;
    }
    if (skill.relatedSkills) {
      return skill.relatedSkills.some((nestedSkill) =>
        isSkillAssociated(nestedSkill, skillSlug)
      );
    }
    return false;
  };

  const checkSkillsAssociation = (checkSkill: SkillInterface) => {
    // Iterate over each skill and check for association and type match
    skills.forEach((skill) => {
      if (
        isSkillAssociated(skill, checkSkill.slug) &&
        skill.slug !== checkSkill.slug &&
        (!skillType || skill.skillType === skillType) // Check for undefined or match
      ) {
        associatedSkills.push(skill);
      }
    });
  };

  if (Array.isArray(skillToCheck)) {
    skillToCheck.forEach(checkSkillsAssociation);
  } else {
    checkSkillsAssociation(skillToCheck);
  }

  // Remove duplicates from associatedSkills
  return Array.from(new Set(associatedSkills.map((skill) => skill.slug)))
    .map((slug) => skills.find((skill) => skill.slug === slug))
    .filter((skill): skill is SkillInterface => skill !== undefined);
}

export function getAssociatedNestedSkills(
  skillToCheck: SkillInterface | SkillInterface[],
  skillType?: SkillTypesEnum // Use SkillTypes or undefined, default is implicitly all
): SkillInterface[] {
  const isSingleSkill = !Array.isArray(skillToCheck);
  const skillsToCheck: SkillInterface[] = isSingleSkill
    ? [skillToCheck as SkillInterface]
    : (skillToCheck as SkillInterface[]);

  const associatedSkills: SkillInterface[] = [];

  skillsToCheck.forEach((skill) => {
    if (skill.relatedSkills) {
      skill.relatedSkills.forEach((relatedSkill) => {
        // Check if skillType is undefined or matches the relatedSkill's type
        if (!skillType || relatedSkill.skillType === skillType) {
          if (!associatedSkills.some((s) => s.slug === relatedSkill.slug)) {
            associatedSkills.push(relatedSkill);
          }
        }
      });
    }
  });

  return associatedSkills;
}

export default function getAssociatedSkills(
  skills: SkillInterface[],
  skillToCheck: SkillInterface | SkillInterface[],
  skillType?: SkillTypesEnum // No default value needed; undefined signifies "all"
): SkillInterface[] {
  // Get skills from both functions
  const associatedMentionedSkills = getAssociatedMentionedSkills(
    skills,
    skillToCheck,
    skillType
  );
  const associatedNestedSkills = getAssociatedNestedSkills(
    skillToCheck,
    skillType
  );

  // Combine and remove duplicates
  const combinedSkills = [
    ...associatedMentionedSkills,
    ...associatedNestedSkills,
  ];
  return Array.from(new Set(combinedSkills.map((skill) => skill.slug)))
    .map((slug) => skills.find((skill) => skill.slug === slug))
    .filter((skill): skill is SkillInterface => skill !== undefined);
}
