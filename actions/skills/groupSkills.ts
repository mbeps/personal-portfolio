import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

// Function to group skills by language
export function groupByLanguage(
  skills: SkillInterface[],
): SkillsCategoryInterface[] {
  let groupedSkills: SkillsCategoryInterface[] = [];

  skills.forEach((skill) => {
    // Determine if the skill is a programming language or should be categorized under "Others"
    const groupName =
      skill.category === "Programming Languages" ? skill.name : "Others";

    // Find or initialize the group in the groupedSkills array
    let group = groupedSkills.find((g) => g.skillCategoryName === groupName);
    if (!group) {
      group = { skillCategoryName: groupName, skills: [] };
      groupedSkills.push(group);
    }

    // Add the skill to the appropriate group
    group.skills.push(skill);

    // If it's a programming language, include its nested skills
    if (skill.category === "Programming Languages") {
      const nestedSkills = [
        ...(skill.technicalGeneralSkills || []),
        ...(skill.technicalHardSkills || []),
        ...(skill.technicalSoftSkills || []),
      ];

      group.skills = removeDuplicates(group.skills.concat(nestedSkills));
    }
  });

  return groupedSkills;
}

// Function to group skills by category
export function groupByCategory(
  skills: SkillInterface[],
): SkillsCategoryInterface[] {
  return skills.reduce((acc: SkillsCategoryInterface[], skill) => {
    const category = skill.category || "Other";

    // Find an existing category or create a new one
    let categoryGroup = acc.find((c) => c.skillCategoryName === category);
    if (!categoryGroup) {
      categoryGroup = { skillCategoryName: category, skills: [] };
      acc.push(categoryGroup);
    }

    // Add the skill to the appropriate category group
    categoryGroup.skills.push(skill);

    return acc;
  }, []);
}

// Function to group skills by skill type
export function groupBySkillType(
  skills: SkillInterface[],
): SkillsCategoryInterface[] {
  return skills.reduce((acc: SkillsCategoryInterface[], skill) => {
    const skillType = skill.skillType || "Other";

    // Find an existing skill type category or create a new one
    let skillTypeGroup = acc.find((c) => c.skillCategoryName === skillType);
    if (!skillTypeGroup) {
      skillTypeGroup = { skillCategoryName: skillType, skills: [] };
      acc.push(skillTypeGroup);
    }

    // Add the skill to the appropriate skill type category
    skillTypeGroup.skills.push(skill);

    return acc;
  }, []);
}

export function removeDuplicates(skills: SkillInterface[]): SkillInterface[] {
  const skillSet = new Set();
  const uniqueSkills: SkillInterface[] = [];

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
  skills: SkillInterface[],
  excludedSkillTypes: ("hard" | "general" | "soft")[],
): SkillInterface[] {
  return skills
    .filter((skill) => !excludedSkillTypes.includes(skill.skillType))
    .map((skill) => {
      const filteredSkill: SkillInterface = { ...skill };

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
  skills: SkillInterface[],
  excludedSkillTypes?: ("hard" | "general" | "soft")[],
): SkillsCategoryInterface[] {
  let organizedSkills: SkillsCategoryInterface[] = [];

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
      // Handle the default case to group all skills under a 'None' category
      organizedSkills = [
        {
          skillCategoryName: "None",
          skills: removeDuplicates(filteredSkills),
        },
      ];
      break;
  }

  // Remove duplicates for each skill category
  organizedSkills = organizedSkills.map((category) => ({
    ...category,
    skills: removeDuplicates(category.skills),
  }));

  return organizedSkills;
}
