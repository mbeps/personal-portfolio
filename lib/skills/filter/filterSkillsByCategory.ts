import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import Database from "@/interfaces/Database";

/**
 * Filters skills which belong to a specific category.
 * Any skill that belongs to the specific category will be included in the filtered list.
 *
 * @param skillKeys The keys of the skills to filter
 * @param skillsDatabase The database of all skills to access the skill data
 * @param specificCategory The category to filter
 * @returns The filtered skill keys which belong to the specific category
 */
export default function filterSkillsByCategory(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  specificCategory: SkillCategoriesEnum
): SkillDatabaseKeys[] {
  // Initialize an empty array for the filtered skill slugs
  const filteredSkillSlugs: SkillDatabaseKeys[] = [];

  // Iterate over the skill slugs array
  skillKeys.forEach((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    // Check if the skill's category matches the specificCategory
    if (skill.category === specificCategory) {
      // If it matches, add the slug to the filteredSkillSlugs array
      filteredSkillSlugs.push(skillKey);
    }
  });

  return filteredSkillSlugs;
}
