import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import getSkillsDatabaseFromKeys from "../get/getSkillsDatabaseFromKeys";
import groupByCategory from "./groupByCategory";
import groupByLanguage from "./groupByLanguage";
import groupBySkillType from "./groupBySkillType";

/**
 * Recursively filters out skills from a list based on certain excluded types and includes related skills by recursively applying the same filtering criteria.
 * It ensures skills already processed are not repeated, to avoid infinite loops.
 *
 * @param skillKeys The keys of the skills to filter
 * @param skillsDatabase The database of all skills to access the skill data
 * @param excludedSkillTypes The skill types to exclude
 * @param processedSkills The set of processed skills to avoid infinite recursion
 * @returns Filtered skill keys which belong to the specified skill type
 */
function recursiveFilter(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  excludedSkillTypes: SkillTypesEnum[] = [],
  processedSkills: Set<SkillDatabaseKeys> = new Set<SkillDatabaseKeys>()
): SkillDatabaseKeys[] {
  // Filtered skills to return
  let filteredSkills: SkillDatabaseKeys[] = [];

  skillKeys.forEach((skillKey) => {
    // If the skill has already been processed, skip it to avoid infinite recursion
    if (processedSkills.has(skillKey)) return;

    const skill: SkillInterface = skillsDatabase[skillKey];
    if (skill) {
      // Mark this skill as processed
      processedSkills.add(skillKey);

      // If the skill's type is not in the excluded list, add it to the filtered list
      if (!excludedSkillTypes.includes(skill.skillType)) {
        filteredSkills.push(skillKey);

        // If the skill has related skills, recursively filter those as well
        if (skill.relatedSkills && skill.relatedSkills.length > 0) {
          const relatedFilteredSkills = recursiveFilter(
            skill.relatedSkills,
            skillsDatabase,
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

/**
 * Groups the skills based on the specified criteria such as language, category, or skill type.
 * If the criteria is not recognized, it groups the skills under a default category.
 * It also filters out skills based on the excluded skill types.
 *
 * @param groupedBy How to group the skills
 * @param skillKeys The keys of the skills to be grouped
 * @param skillsDatabase The database of all skills to access the skill data
 * @param excludedSkillTypes The skill types to exclude from the grouping
 * @returns The skills grouped by the specified criteria
 * @requires {@link groupByLanguage}
 * @requires {@link groupByCategory}
 * @requires {@link groupBySkillType}
 * @requires {@link recursiveFilter}
 */
export default function groupSkills(
  groupedBy: GroupByOptions,
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  excludedSkillTypes?: SkillTypesEnum[]
): SkillsCategoryInterface[] {
  let organizedSkills: SkillsCategoryInterface[] = [];

  const skillsRelatedToKeys: { [key in SkillDatabaseKeys]?: SkillInterface } =
    getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

  // Adjust the recursiveFilter function to filter out skills based on excludedSkillTypes
  const filteredSkillSlugs: SkillDatabaseKeys[] = excludedSkillTypes
    ? recursiveFilter(skillKeys, skillsRelatedToKeys, excludedSkillTypes)
    : skillKeys;

  // Validate filteredSkillSlugs to ensure they exist in allSkills
  const validatedSkillSlugs: SkillDatabaseKeys[] = filteredSkillSlugs.filter(
    (slug) => skillsRelatedToKeys.hasOwnProperty(slug)
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
