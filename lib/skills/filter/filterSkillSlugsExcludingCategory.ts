import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import Database from "@/interfaces/Database";

/**
 * Removes skills belonging to a given category, handy when a page wants to show stacks without repeating their parent language.
 *
 * @param skillKeys Slugs to check.
 * @param skillsDatabase Skill lookup map.
 * @param excludedCategory Category that should be removed.
 * @returns Skill keys that are not part of the excluded category.
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
