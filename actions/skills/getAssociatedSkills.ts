import SkillInterface from "@/interfaces/skills/SkillInterface";

export function getAssociatedMentionedSkills(
  skills: SkillInterface[],
  skillToCheck: SkillInterface | SkillInterface[],
  skillType: "hard" | "general" | "soft" | "all" = "all",
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
    // Iterate over each skill and check for association and type match
    skills.forEach((skill) => {
      if (
        isSkillAssociated(skill, checkSkill.slug) &&
        skill.slug !== checkSkill.slug &&
        (skillType === "all" || !skillType || skill.skillType === skillType)
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

export function getAssociatedNestedSkills(
  skills: SkillInterface[],
  skillToCheck: SkillInterface | SkillInterface[],
  skillType: "hard" | "general" | "soft" | "all" = "all",
): SkillInterface[] {
  const isSingleSkill = !Array.isArray(skillToCheck);
  const skillsToCheck: SkillInterface[] = isSingleSkill
    ? [skillToCheck as SkillInterface]
    : (skillToCheck as SkillInterface[]);

  const associatedSkills: SkillInterface[] = [];

  skillsToCheck.forEach((skill) => {
    if (skill.relatedSkills) {
      skill.relatedSkills.forEach((relatedSkill) => {
        if (skillType === "all" || relatedSkill.skillType === skillType) {
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
  skillType: "hard" | "general" | "soft" | "all" = "all",
): SkillInterface[] {
  // Get skills from both functions
  const associatedMentionedSkills = getAssociatedMentionedSkills(
    skills,
    skillToCheck,
    skillType,
  );
  const associatedNestedSkills = getAssociatedNestedSkills(
    skills,
    skillToCheck,
    skillType,
  );

  // Combine and remove duplicates
  const combinedSkills = [
    ...associatedMentionedSkills,
    ...associatedNestedSkills,
  ];
  return Array.from(new Set(combinedSkills.map((skill) => skill.slug)))
    .map((slug) => skills.find((skill) => skill.slug === slug))
    .filter((skill) => skill !== undefined) as SkillInterface[];
}
