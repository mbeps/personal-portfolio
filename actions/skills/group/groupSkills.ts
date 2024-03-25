import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import filterSkillsBySlugs from "../filter/filterSkillsBySlugs";
import groupByCategory from "./groupByCategory";
import groupByLanguage from "./groupByLanguage";
import groupBySkillType from "./groupBySkillType";

function recursiveFilter(
  skillSlugs: SkillKeysEnum[],
  allSkills: Database<SkillInterface>,
  excludedSkillTypes: SkillTypesEnum[] = [],
  processedSkills: Set<SkillKeysEnum> = new Set<SkillKeysEnum>() // To keep track of processed skills
): SkillKeysEnum[] {
  // Filtered skills to return
  let filteredSkills: SkillKeysEnum[] = [];

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
  skillSlugs: SkillKeysEnum[],
  allSkills: Database<SkillInterface>,
  excludedSkillTypes?: SkillTypesEnum[] // Use SkillTypesEnum[] or undefined
): SkillsCategoryInterface[] {
  let organizedSkills: SkillsCategoryInterface[] = [];

  const skillsRelatedToKeys: { [key in SkillKeysEnum]?: SkillInterface } =
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
