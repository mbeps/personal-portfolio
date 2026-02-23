import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import Database from "@/interfaces/Database";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";
import getSkillsDatabaseFromKeys from "../get/getSkillsDatabaseFromKeys";
import groupByCategory from "./groupByCategory";
import groupByLanguage from "./groupByLanguage";
import groupBySkillType from "./groupBySkillType";

/**
 * Recursively filters out skills that sit inside excluded types while preserving related skills, making sure each slug is only processed once to avoid loops.
 *
 * @param skillKeys Slugs to evaluate.
 * @param skillsDatabase Skill lookup map.
 * @param excludedSkillTypes Skill types that should be skipped entirely.
 * @param processedSkills Tracker used to prevent cycles when a skill links back to previously visited ones.
 * @returns Filtered skill keys that survive the exclusion rules.
 */
function recursiveFilter(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  excludedSkillTypes: SkillTypesEnum[] = [],
  processedSkills: Set<SkillDatabaseKeys> = new Set<SkillDatabaseKeys>(),
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
            processedSkills,
          );
          // Combine the current filtered skills with those from related skills
          filteredSkills = filteredSkills.concat(relatedFilteredSkills);
        }
      }
    }
  });

  return filteredSkills;
}

/**
 * Grouping dimensions accepted by `groupSkills` and consumed by `useSkillFilterState`.
 * Each member corresponds to a URL-safe slug value stored in the filter URL params.
 * Downstream components use this enum to request a specific visual organisation of the skills list.
 * @author Maruf Bepary
 */
export enum GroupByOptions {
  /** Group skills by their parent programming language, nesting technologies under each language. */
  Language = "language",
  /** Group skills by their editorial category (e.g. Frontend, Backend, DevOps). */
  Category = "category",
  /** Group skills by their `SkillTypesEnum` classification (e.g. Technology, Technical, Soft). */
  SkillType = "skill-type",
}

/**
 * Backbone helper for `SkillList`, Language/Technologies modals, and the detail page skill tables.
 * Handles grouping by language, category, or skill type while respecting exclusions (e.g., hide technical skills when showing technologies only).
 *
 * @param groupedBy Dimension to group by (language, category, or skill type).
 * @param skillKeys Skills to organize, usually pre-filtered by search.
 * @param skillsDatabase Full skills map to resolve metadata and related skills.
 * @param excludedSkillTypes Optional list of skill types to skip when building groups.
 * @returns Grouped categories ready for display in tables and modals.
 */
export default function groupSkills(
  groupedBy: GroupByOptions,
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  excludedSkillTypes?: SkillTypesEnum[],
): CategorisedSkillsInterface[] {
  let organizedSkills: CategorisedSkillsInterface[] = [];

  const skillsRelatedToKeys: { [key in SkillDatabaseKeys]?: SkillInterface } =
    getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

  // Adjust the recursiveFilter function to filter out skills based on excludedSkillTypes
  const filteredSkillSlugs: SkillDatabaseKeys[] = excludedSkillTypes
    ? recursiveFilter(skillKeys, skillsRelatedToKeys, excludedSkillTypes)
    : skillKeys;

  // Validate filteredSkillSlugs to ensure they exist in allSkills
  const validatedSkillSlugs: SkillDatabaseKeys[] = filteredSkillSlugs.filter(
    (slug) => skillsRelatedToKeys.hasOwnProperty(slug),
  );

  // Then use validatedSkillSlugs in your switch-case logic
  switch (groupedBy) {
    case "language":
      organizedSkills = groupByLanguage(
        validatedSkillSlugs,
        skillsRelatedToKeys,
      );
      break;
    case "category":
      organizedSkills = groupByCategory(
        validatedSkillSlugs,
        skillsRelatedToKeys,
      );
      break;
    case "skill-type":
      organizedSkills = groupBySkillType(
        validatedSkillSlugs,
        skillsRelatedToKeys,
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
