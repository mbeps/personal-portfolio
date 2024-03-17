import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

function groupByLanguage(skills: {
  [key: string]: SkillInterface;
}): SkillsCategoryInterface[] {
  const groupedSkills: {
    [skillCategoryName: string]: { [key: string]: SkillInterface };
  } = {};

  // Helper function to add skill to the appropriate group
  const addSkillToGroup = (
    groupName: string,
    skillKey: string,
    skill: SkillInterface
  ) => {
    if (!groupedSkills[groupName]) {
      groupedSkills[groupName] = {};
    }
    groupedSkills[groupName][skillKey] = skill;
  };

  Object.entries(skills).forEach(([skillKey, skill]) => {
    if (skill.category === SkillCategoriesEnum.ProgrammingLanguages) {
      // This skill is a programming language, add it directly to its own group
      addSkillToGroup(skill.name, skillKey, skill);
    } else {
      // Check if the skill is associated with any programming language
      let associatedWithLanguage = false;
      if (skill.relatedSkills) {
        for (let relatedSkillSlug of skill.relatedSkills) {
          const relatedSkill = skills[relatedSkillSlug];
          if (
            relatedSkill &&
            relatedSkill.category === SkillCategoriesEnum.ProgrammingLanguages
          ) {
            // Skill is associated with a programming language
            addSkillToGroup(relatedSkill.name, skillKey, skill);
            associatedWithLanguage = true;
            break; // Stop checking once an association is found
          }
        }
      }

      if (!associatedWithLanguage) {
        // If the skill isn't associated with any language, add it to the "No Language" group
        addSkillToGroup("No Language", skillKey, skill);
      }
    }
  });

  // Convert the hashmap to the expected array format
  return Object.entries(groupedSkills).map(([skillCategoryName, skills]) => ({
    skillCategoryName,
    skills,
  }));
}

export function groupByCategory(skills: {
  [key: string]: SkillInterface;
}): SkillsCategoryInterface[] {
  // Accumulator structure adjustment: skills within each category are now a hashmap
  return Object.entries(skills).reduce(
    (acc: SkillsCategoryInterface[], [skillKey, skill]) => {
      const category = skill.category || "Other";

      // Find an existing category or create a new one
      let categoryGroup = acc.find((c) => c.skillCategoryName === category);
      if (!categoryGroup) {
        categoryGroup = { skillCategoryName: category, skills: {} };
        acc.push(categoryGroup);
      }

      categoryGroup.skills[skillKey] = skill;

      return acc;
    },
    []
  );
}

// Function to group skills by skill type
export function groupBySkillType(skills: {
  [key: string]: SkillInterface;
}): SkillsCategoryInterface[] {
  return Object.entries(skills).reduce(
    (acc: SkillsCategoryInterface[], [skillKey, skill]) => {
      const skillType = skill.skillType || "Other";

      // Find an existing skill type category or create a new one
      let skillTypeGroup = acc.find((c) => c.skillCategoryName === skillType);
      if (!skillTypeGroup) {
        skillTypeGroup = { skillCategoryName: skillType, skills: {} };
        acc.push(skillTypeGroup);
      }

      skillTypeGroup.skills[skillKey] = skill;

      return acc;
    },
    []
  );
}

function recursiveFilter(
  skills: { [key: string]: SkillInterface },
  excludedSkillTypes: SkillTypesEnum[] = []
): { [key: string]: SkillInterface } {
  // Explicitly type the accumulator in the reduce function
  const filteredSkills = Object.entries(skills).reduce<{
    [key: string]: SkillInterface;
  }>((acc, [key, skill]) => {
    // Check if the current skill's type is not in the excluded list
    if (!excludedSkillTypes.includes(skill.skillType)) {
      // If not excluded, add to the accumulator
      acc[key] = skill; // Directly use skill object, no need to spread it
    }
    return acc;
  }, {});

  return filteredSkills;
}

export default function groupSkills(
  groupedBy: string,
  skills: { [key: string]: SkillInterface },
  excludedSkillTypes?: SkillTypesEnum[] // Use SkillTypesEnum[] or undefined
): SkillsCategoryInterface[] {
  let organizedSkills: SkillsCategoryInterface[] = [];

  // Adjust the refactored recursiveFilter function to accept hashmaps
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
          skills: filteredSkills, // No need for removeDuplicates since hashmap keys are unique
        },
      ];
      break;
  }
  return organizedSkills;
}
