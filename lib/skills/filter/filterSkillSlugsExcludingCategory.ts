import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import Database from "@/interfaces/Database";

/**
 * Filters out skills which belong to a specific category.
 * Any skill that belongs to the specific category will be excluded from the filtered list.
 *
 * @param skillKeys The keys of the skills to filter
 * @param skillsDatabase  The database of all skills to access the skill data
 * @param excludedCategory The category to exclude
 * @returns The filtered skill keys which do not belong to the excluded category
 */
export function filterSkillSlugsExcludingCategory(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>, // Assuming this is passed into the function
  excludedCategory: SkillCategoriesEnum
): SkillDatabaseKeys[] {
  // Initialize an empty array for the skill slugs that do not match the excluded category
  const nonMatchingSkillSlugs: SkillDatabaseKeys[] = [];

  // Iterate over the skill slugs array
  skillKeys.forEach((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    // Check if the skill's category does not match the excludedCategory
    if (skill.category !== excludedCategory) {
      // If it does not match, add the slug to the nonMatchingSkillSlugs array
      nonMatchingSkillSlugs.push(skillKey);
    }
  });

  return nonMatchingSkillSlugs;
}
