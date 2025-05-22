import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";

/**
 * Groups the skill according to their category.
 * The order of categories follows the order defined in SkillCategoriesEnum.
 *
 * @param skillKeys The keys of the skills to group
 * @param skillsDatabase The database of all skills to access the skill data
 * @returns The skills grouped by their category, in the order defined by SkillCategoriesEnum
 */
export default function groupByCategory(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>
): SkillsCategoryInterface[] {
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
  const result: SkillsCategoryInterface[] = Object.values(SkillCategoriesEnum)
    .filter((category) => categoriesMap[category].length > 0) // Only include categories that have skills
    .map((category) => ({
      skillCategoryName: category,
      skills: categoriesMap[category],
    }));

  return result;
}
