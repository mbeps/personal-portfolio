import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

/**
 * Groups the skill according to their category.
 *
 * @param skillKeys The keys of the skills to group
 * @param skillsDatabase The database of all skills to access the skill data
 * @returns The skills grouped by their category
 */
export default function groupByCategory(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>
): SkillsCategoryInterface[] {
  const categories: Database<SkillDatabaseKeys[]> = {};

  skillKeys.forEach((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    if (skill) {
      const category = skill.category;
      // Initialize the category array if it doesn't exist
      if (!categories[category]) {
        categories[category] = [];
      }
      // Add the skillSlug to the appropriate category
      categories[category].push(skillKey);
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
