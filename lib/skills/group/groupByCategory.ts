import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import Database from "@/interfaces/Database";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";

/**
 * Groups skills by category using the enum order so tables stay consistent with the taxonomy shown on the skills landing page.
 * Keeps empty categories out of the result to avoid blank rows in the modal and skill detail tables.
 *
 * @param skillKeys Keys to group, typically already filtered by search.
 * @param skillsDatabase Map of skills keyed by slug.
 * @returns Categories with associated skill slugs in enum order.
 */
export default function groupByCategory(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>
): CategorisedSkillsInterface[] {
  // First, create a map to store skills by category
  const categoriesMap: Record<SkillCategoriesEnum, SkillDatabaseKeys[]> =
    {} as Record<SkillCategoriesEnum, SkillDatabaseKeys[]>;

  // Initialize arrays for each category that exists in the enum
  Object.values(SkillCategoriesEnum).forEach((category) => {
    categoriesMap[category] = [];
  });

  // Group skills into their respective categories
  skillKeys.forEach((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    if (skill) {
      // Initialize the category array if it doesn't exist (shouldn't be necessary due to initialization above)
      if (!categoriesMap[skill.category]) {
        categoriesMap[skill.category] = [];
      }
      // Add the skill to its category
      categoriesMap[skill.category].push(skillKey);
    }
  });

  // Convert the map to an array of SkillsCategoryInterface, maintaining enum order
  const result: CategorisedSkillsInterface[] = Object.values(
    SkillCategoriesEnum
  )
    .filter((category) => categoriesMap[category].length > 0) // Only include categories that have skills
    .map((category) => ({
      skillCategoryName: category,
      skills: categoriesMap[category],
    }));

  return result;
}
