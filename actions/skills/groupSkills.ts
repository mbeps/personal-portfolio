import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

function groupByLanguage(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface }
): SkillsCategoryInterface[] {
  const groupedSkills: { [skillCategoryName: string]: SkillSlugEnum[] } = {};

  // Helper function to add skill slug to the appropriate group
  const addSkillSlugToGroup = (groupName: string, skillSlug: SkillSlugEnum) => {
    if (!groupedSkills[groupName]) {
      groupedSkills[groupName] = [];
    }
    groupedSkills[groupName].push(skillSlug);
  };

  skillSlugs.forEach((skillSlug) => {
    const skill = allSkills[skillSlug];
    if (skill.category === SkillCategoriesEnum.ProgrammingLanguages) {
      // This skill is a programming language, add it directly to its own group
      addSkillSlugToGroup(skill.name, skillSlug);
    } else {
      // Check if the skill is associated with any programming language
      let associatedWithLanguage = false;
      if (skill.relatedSkills) {
        for (let relatedSkillSlug of skill.relatedSkills) {
          const relatedSkill = allSkills[relatedSkillSlug];
          if (
            relatedSkill &&
            relatedSkill.category === SkillCategoriesEnum.ProgrammingLanguages
          ) {
            // Skill is associated with a programming language
            addSkillSlugToGroup(relatedSkill.name, skillSlug);
            associatedWithLanguage = true;
            break; // Stop checking once an association is found
          }
        }
      }

      if (!associatedWithLanguage) {
        // If the skill isn't associated with any language, add it to the "No Language" group
        addSkillSlugToGroup("No Language", skillSlug);
      }
    }
  });

  // Convert the hashmap to the expected array format
  return Object.entries(groupedSkills).map(([skillCategoryName, skills]) => ({
    skillCategoryName,
    skills,
  }));
}

export function groupByCategory(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface }
): SkillsCategoryInterface[] {
  return skillSlugs.reduce((acc: SkillsCategoryInterface[], skillSlug) => {
    const skill = allSkills[skillSlug];
    const category = skill.category || "Other";

    // Find an existing category or create a new one
    let categoryGroup = acc.find((c) => c.skillCategoryName === category);
    if (!categoryGroup) {
      categoryGroup = { skillCategoryName: category, skills: [] };
      acc.push(categoryGroup);
    }

    // Add the skill slug to the appropriate category
    categoryGroup.skills.push(skillSlug);

    return acc;
  }, []);
}

// Function to group skills by skill type
export function groupBySkillType(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface }
): SkillsCategoryInterface[] {
  return skillSlugs.reduce((acc: SkillsCategoryInterface[], skillSlug) => {
    const skill = allSkills[skillSlug];
    const skillType = skill.skillType || "Other";

    // Find an existing skill type category or create a new one
    let skillTypeGroup = acc.find((c) => c.skillCategoryName === skillType);
    if (!skillTypeGroup) {
      skillTypeGroup = { skillCategoryName: skillType, skills: [] };
      acc.push(skillTypeGroup);
    }

    // Add the skill slug to the appropriate skill type category
    skillTypeGroup.skills.push(skillSlug);

    return acc;
  }, []);
}

function recursiveFilter(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface },
  excludedSkillTypes: SkillTypesEnum[] = []
): SkillSlugEnum[] {
  // Filter skill slugs based on whether their corresponding skill type is not in the excluded list
  // Ensure that a skill exists for each slug before checking its type
  const filteredSkillSlugs = skillSlugs.filter((skillSlug) => {
    const skill = allSkills[skillSlug];
    // Check if the skill exists and its type is not in the excluded list
    return skill && !excludedSkillTypes.includes(skill.skillType);
  });

  return filteredSkillSlugs;
}

export default function groupSkills(
  groupedBy: string,
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface },
  excludedSkillTypes?: SkillTypesEnum[] // Use SkillTypesEnum[] or undefined
): SkillsCategoryInterface[] {
  let organizedSkills: SkillsCategoryInterface[] = [];

  // Adjust the recursiveFilter function to filter out skills based on excludedSkillTypes
  const filteredSkillSlugs = excludedSkillTypes
    ? recursiveFilter(skillSlugs, allSkills, excludedSkillTypes)
    : skillSlugs;

  switch (groupedBy) {
    case "language":
      organizedSkills = groupByLanguage(filteredSkillSlugs, allSkills);
      break;
    case "category":
      organizedSkills = groupByCategory(filteredSkillSlugs, allSkills);
      break;
    case "skill-type":
      organizedSkills = groupBySkillType(filteredSkillSlugs, allSkills);
      break;
    default:
      // Construct a default grouping if none of the criteria match
      organizedSkills = [
        {
          skillCategoryName: "None",
          skills: filteredSkillSlugs,
        },
      ];
      break;
  }
  return organizedSkills;
}
