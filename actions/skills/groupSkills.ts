import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import filterSkillsBySlugs from "./filter/filterSkillsBySlugs";

function groupByLanguage(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface }
): SkillsCategoryInterface[] {
  const groupedSkills: { [skillCategoryName: string]: SkillSlugEnum[] } = {};
  const noLanguageSkills: SkillSlugEnum[] = []; // Temporarily hold skills not related to any language

  skillSlugs.forEach((skillSlug) => {
    const skill = allSkills[skillSlug];
    // Skip if the skill is not found in allSkills
    if (!skill) {
      console.warn(`Skill not found for slug: ${skillSlug}`);
      return;
    }

    let isRelatedToProgrammingLanguage = false;

    // Directly group skills that are categorized as programming languages
    if (skill.category === SkillCategoriesEnum.ProgrammingLanguages) {
      isRelatedToProgrammingLanguage = true;
      if (!groupedSkills[skill.name]) {
        groupedSkills[skill.name] = [];
      }
      groupedSkills[skill.name].push(skillSlug);
    } else if (skill.relatedSkills && skill.relatedSkills.length > 0) {
      // For skills not directly categorized as programming languages, check their related skills
      skill.relatedSkills.forEach((relatedSkillSlug) => {
        const relatedSkill = allSkills[relatedSkillSlug];
        // Only group if the related skill is found and is a programming language
        if (
          relatedSkill &&
          relatedSkill.category === SkillCategoriesEnum.ProgrammingLanguages
        ) {
          isRelatedToProgrammingLanguage = true;
          const languageName = relatedSkill.name;
          groupedSkills[languageName] = groupedSkills[languageName] || [];
          groupedSkills[languageName].push(skillSlug);
        }
      });
    }

    // Collect skills not related to any programming language
    if (!isRelatedToProgrammingLanguage) {
      noLanguageSkills.push(skillSlug);
    }
  });

  // Add 'No Languages' group at the end
  if (noLanguageSkills.length > 0) {
    groupedSkills["No Languages"] = noLanguageSkills;
  }

  // Convert the groupedSkills object into an array of SkillsCategoryInterface
  return Object.entries(groupedSkills).map(([skillCategoryName, skills]) => ({
    skillCategoryName,
    skills,
  }));
}

export function groupByCategory(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface }
): SkillsCategoryInterface[] {
  // Object to hold the grouping
  const categories: { [key: string]: SkillSlugEnum[] } = {};

  skillSlugs.forEach((slug) => {
    const skill = allSkills[slug];
    if (skill) {
      const category = skill.category;
      // Initialize the category array if it doesn't exist
      if (!categories[category]) {
        categories[category] = [];
      }
      // Add the skillSlug to the appropriate category
      categories[category].push(slug);
    }
  });

  // Convert the categories object to an array of SkillsCategoryInterface
  const result: SkillsCategoryInterface[] = Object.keys(categories).map(
    (key) => ({
      skillCategoryName: key,
      skills: categories[key],
    })
  );

  return result;
}

// Function to group skills by skill type
export function groupBySkillType(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface }
): SkillsCategoryInterface[] {
  // Object to hold the grouping by skillType
  const skillTypes: { [key: string]: SkillSlugEnum[] } = {};

  skillSlugs.forEach((slug) => {
    const skill = allSkills[slug];
    if (skill) {
      const skillType = skill.skillType;
      // Initialize the skillType array if it doesn't exist
      if (!skillTypes[skillType]) {
        skillTypes[skillType] = [];
      }
      // Add the skillSlug to the appropriate skillType
      skillTypes[skillType].push(slug);
    }
  });

  // Convert the skillTypes object to an array of SkillsCategoryInterface
  const result: SkillsCategoryInterface[] = Object.keys(skillTypes).map(
    (key) => ({
      skillCategoryName: key,
      skills: skillTypes[key],
    })
  );

  return result;
}

function recursiveFilter(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface },
  excludedSkillTypes: SkillTypesEnum[] = [],
  processedSkills: Set<SkillSlugEnum> = new Set<SkillSlugEnum>() // To keep track of processed skills
): SkillSlugEnum[] {
  // Filtered skills to return
  let filteredSkills: SkillSlugEnum[] = [];

  skillSlugs.forEach((slug) => {
    // If the skill has already been processed, skip it to avoid infinite recursion
    if (processedSkills.has(slug)) return;

    const skill = allSkills[slug];
    if (skill) {
      // Mark this skill as processed
      processedSkills.add(slug);

      // If the skill's type is not in the excluded list, add it to the filtered list
      if (!excludedSkillTypes.includes(skill.skillType)) {
        filteredSkills.push(slug);

        // If the skill has related skills, recursively filter those as well
        if (skill.relatedSkills && skill.relatedSkills.length > 0) {
          const relatedFilteredSkills = recursiveFilter(
            skill.relatedSkills,
            allSkills,
            excludedSkillTypes,
            processedSkills
          );
          // Combine the current filtered skills with those from related skills
          filteredSkills = filteredSkills.concat(relatedFilteredSkills);
        }
      }
    }
  });

  return filteredSkills;
}

export enum GroupByOptions {
  Language = "language",
  Category = "category",
  SkillType = "skill-type",
}

export default function groupSkills(
  groupedBy: GroupByOptions,
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface },
  excludedSkillTypes?: SkillTypesEnum[] // Use SkillTypesEnum[] or undefined
): SkillsCategoryInterface[] {
  let organizedSkills: SkillsCategoryInterface[] = [];

  const skillsRelatedToKeys: { [key in SkillSlugEnum]?: SkillInterface } =
    filterSkillsBySlugs(skillSlugs, allSkills);

  // Adjust the recursiveFilter function to filter out skills based on excludedSkillTypes
  const filteredSkillSlugs = excludedSkillTypes
    ? recursiveFilter(skillSlugs, skillsRelatedToKeys, excludedSkillTypes)
    : skillSlugs;

  // Validate filteredSkillSlugs to ensure they exist in allSkills
  const validatedSkillSlugs = filteredSkillSlugs.filter((slug) =>
    skillsRelatedToKeys.hasOwnProperty(slug)
  );

  // Then use validatedSkillSlugs in your switch-case logic
  switch (groupedBy) {
    case "language":
      organizedSkills = groupByLanguage(
        validatedSkillSlugs,
        skillsRelatedToKeys
      );
      break;
    case "category":
      organizedSkills = groupByCategory(
        validatedSkillSlugs,
        skillsRelatedToKeys
      );
      break;
    case "skill-type":
      organizedSkills = groupBySkillType(
        validatedSkillSlugs,
        skillsRelatedToKeys
      );
      break;
    default:
      organizedSkills = [
        {
          skillCategoryName: "None",
          skills: validatedSkillSlugs,
        },
      ];
      break;
  }

  return organizedSkills;
}
