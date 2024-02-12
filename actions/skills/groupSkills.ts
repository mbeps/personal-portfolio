import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

export function groupByLanguage(
  skills: SkillInterface[]
): SkillsCategoryInterface[] {
  const groupedSkills: { [key: string]: SkillInterface[] } = {};
  const noLanguageGroup = "No Language";

  skills.forEach((skill) => {
    // If the skill is a programming language, add it to its own category
    if (skill.category === "Programming Languages") {
      const languageName = skill.name;

      if (!groupedSkills[languageName]) {
        groupedSkills[languageName] = [];
      }

      groupedSkills[languageName].push(skill);
    }

    // Check if the skill is associated with any programming language
    skill.relatedSkills?.forEach((relatedSkill) => {
      if (relatedSkill.category === "Programming Languages") {
        const languageName = relatedSkill.name;

        if (!groupedSkills[languageName]) {
          groupedSkills[languageName] = [];
        }

        groupedSkills[languageName].push(skill);
      }
    });

    // If no associated programming language is found, group it under 'No Language'
    if (
      !(
        skill.category === "Programming Languages" ||
        (skill.relatedSkills &&
          skill.relatedSkills.some(
            (relatedSkill) => relatedSkill.category === "Programming Languages"
          ))
      )
    ) {
      if (!groupedSkills[noLanguageGroup]) {
        groupedSkills[noLanguageGroup] = [];
      }
      groupedSkills[noLanguageGroup].push(skill);
    }
  });

  // Separately handle the 'No Language' group
  const noLanguageSkills = groupedSkills[noLanguageGroup];
  delete groupedSkills[noLanguageGroup];

  // Convert groupedSkills object into SkillsCategoryInterface array and sort by category name
  const sortedGroupedSkills = Object.keys(groupedSkills)
    .sort()
    .map((skillCategoryName) => ({
      skillCategoryName,
      skills: groupedSkills[skillCategoryName],
    }));

  // Add the 'No Language' category at the end
  if (noLanguageSkills) {
    sortedGroupedSkills.push({
      skillCategoryName: noLanguageGroup,
      skills: noLanguageSkills,
    });
  }

  return sortedGroupedSkills;
}

// Function to group skills by category
export function groupByCategory(
  skills: SkillInterface[]
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
  skills: SkillInterface[]
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
  excludedSkillTypes: SkillTypes[] = [] // Default to an empty array if no types are to be excluded
): SkillInterface[] {
  return skills
    .filter((skill) => !excludedSkillTypes.includes(skill.skillType))
    .map((skill) => {
      const filteredSkill: SkillInterface = { ...skill };

      if (filteredSkill.relatedSkills) {
        filteredSkill.relatedSkills = recursiveFilter(
          filteredSkill.relatedSkills,
          excludedSkillTypes
        );
      }

      return filteredSkill;
    });
}

export default function groupSkills(
  groupedBy: string,
  skills: SkillInterface[],
  excludedSkillTypes?: SkillTypes[] // Use SkillTypes[] or undefined
): SkillsCategoryInterface[] {
  let organizedSkills: SkillsCategoryInterface[] = [];

  // Use the refactored recursiveFilter with SkillTypes enum
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
      organizedSkills = [
        {
          skillCategoryName: "None",
          skills: removeDuplicates(filteredSkills), // Assuming removeDuplicates is defined elsewhere
        },
      ];
      break;
  }

  organizedSkills = organizedSkills.map((category) => ({
    ...category,
    skills: removeDuplicates(category.skills), // Assuming removeDuplicates is defined elsewhere
  }));

  return organizedSkills;
}
