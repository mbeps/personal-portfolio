import Skill from "@/types/skills";

// Function to group skills by language
const groupByLanguage = (skills: Skill[]): Record<string, Skill[]> => {
  // Filter skills to include only those categorized as "Programming Languages"
  const programmingLanguages = skills.filter(
    (skill) => skill.category === "Programming Languages",
  );

  // Reduce the filtered skills to group by language
  return programmingLanguages.reduce(
    (acc: Record<string, Skill[]>, languageSkill) => {
      // The language's name serves as the key, and its technical skills are the group elements
      if (languageSkill.name) {
        acc[languageSkill.name] = removeDuplicates([
          ...(languageSkill.technicalGeneralSkills || []),
          ...(languageSkill.technicalHardSkills || []),
          ...(languageSkill.technicalSoftSkills || []),
        ]);
      }
      return acc;
    },
    {},
  );
};

// Function to group skills by category
const groupByCategory = (skills: Skill[]): Record<string, Skill[]> => {
  return skills.reduce((acc: Record<string, Skill[]>, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});
};

// Function to group skills by skill type
const groupBySkillType = (skills: Skill[]): Record<string, Skill[]> => {
  return skills.reduce((acc: Record<string, Skill[]>, skill) => {
    const skillType = skill.skillType || "Other";
    if (!acc[skillType]) {
      acc[skillType] = [];
    }
    acc[skillType].push(skill);
    return acc;
  }, {});
};

const removeDuplicates = (skills: Skill[]): Skill[] => {
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
};

const recursiveFilter = (
  skills: Skill[],
  excludedSkillTypes: ("hard" | "general" | "soft")[],
): Skill[] => {
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
};

const groupSkills = (
  groupedBy: string,
  skills: Skill[],
  excludedSkillTypes?: ("hard" | "general" | "soft")[], // array of skill types to be excluded
): Record<string, Skill[]> => {
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
      // groupedBy === "none"
      organizedSkills["None"] = removeDuplicates(filteredSkills);
      break;
  }

  // Remove duplicates for each category
  for (const key in organizedSkills) {
    organizedSkills[key] = removeDuplicates(organizedSkills[key]);
  }

  return organizedSkills;
};

export default groupSkills;
