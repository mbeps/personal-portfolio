import Skill from "@/types/skills";

// Function to group skills by language
export function groupByLanguage(skills: Skill[]): Record<string, Skill[]> {
  let groupedSkills: Record<string, Skill[]> = {};

  skills.forEach((skill) => {
    // Determine if the skill is a programming language or should be categorized under "Others"
    const groupName =
      skill.category === "Programming Languages" ? skill.name : "Others";

    // Initialize the group in the accumulator if it doesn't exist
    if (!groupedSkills[groupName]) {
      groupedSkills[groupName] = [];
    }

    // Add the skill to the appropriate group
    groupedSkills[groupName].push(skill);

    // If it's a programming language, include its nested skills
    if (skill.category === "Programming Languages") {
      const nestedSkills = [
        ...(skill.technicalGeneralSkills || []),
        ...(skill.technicalHardSkills || []),
        ...(skill.technicalSoftSkills || []),
      ];

      groupedSkills[groupName] = removeDuplicates(
        groupedSkills[groupName].concat(nestedSkills),
      );
    }
  });

  return groupedSkills;
}

// Function to group skills by category
export function groupByCategory(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce((acc: Record<string, Skill[]>, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});
}

// Function to group skills by skill type
export function groupBySkillType(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce((acc: Record<string, Skill[]>, skill) => {
    const skillType = skill.skillType || "Other";
    if (!acc[skillType]) {
      acc[skillType] = [];
    }
    acc[skillType].push(skill);
    return acc;
  }, {});
}

export function removeDuplicates(skills: Skill[]): Skill[] {
  const skillSet = new Set();
  const uniqueSkills: Skill[] = [];

  skills.forEach((skill) => {
    const serializedSkill = JSON.stringify(skill);
    if (!skillSet.has(serializedSkill)) {
      skillSet.add(serializedSkill);
      uniqueSkills.push(skill);
    }
  });

  return uniqueSkills;
}

function recursiveFilter(
  skills: Skill[],
  excludedSkillTypes: ("hard" | "general" | "soft")[],
): Skill[] {
  return skills
    .filter((skill) => !excludedSkillTypes.includes(skill.skillType))
    .map((skill) => {
      const filteredSkill: Skill = { ...skill };

      if (filteredSkill.technicalGeneralSkills) {
        filteredSkill.technicalGeneralSkills = recursiveFilter(
          filteredSkill.technicalGeneralSkills,
          excludedSkillTypes,
        );
      }
      if (filteredSkill.technicalHardSkills) {
        filteredSkill.technicalHardSkills = recursiveFilter(
          filteredSkill.technicalHardSkills,
          excludedSkillTypes,
        );
      }
      if (filteredSkill.technicalSoftSkills) {
        filteredSkill.technicalSoftSkills = recursiveFilter(
          filteredSkill.technicalSoftSkills,
          excludedSkillTypes,
        );
      }

      return filteredSkill;
    });
}

export default function groupSkills(
  groupedBy: string,
  skills: Skill[],
  excludedSkillTypes?: ("hard" | "general" | "soft")[],
): Record<string, Skill[]> {
  let organizedSkills: Record<string, Skill[]> = {};

  // Filter out the skills of excluded types recursively
  const filteredSkills = excludedSkillTypes
    ? recursiveFilter(skills, excludedSkillTypes)
    : skills;

  switch (groupedBy) {
    case "language":
      organizedSkills = groupByLanguage(filteredSkills);
      break;
    case "category":
      organizedSkills = groupByCategory(filteredSkills);
      break;
    case "skill-type":
      organizedSkills = groupBySkillType(filteredSkills);
      break;
    default:
      organizedSkills["None"] = removeDuplicates(filteredSkills);
      break;
  }

  // Remove duplicates for each category
  for (const key in organizedSkills) {
    organizedSkills[key] = removeDuplicates(organizedSkills[key]);
  }

  return organizedSkills;
}
