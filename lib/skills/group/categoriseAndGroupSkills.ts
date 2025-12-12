import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import Database from "@/interfaces/Database";
import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";

/**
 * Categorise and group skills based on the skill type.
 * It filters the skills, for example technologies, technical skills and soft skills.
 * Then it categorises the filtered skills based on the category and groups them.
 * Finally, it groups the categories and returns the grouped categories.
 *
 * @param skillKeys The keys of the skills to filter and group
 * @param skillsDatabase  The database of all skills to access the skill data
 * @param skillType The type of skill to filter
 * @param title The title of the grouped categories
 * @returns The grouped categories of the filtered skills
 */
export default function categoriseAndGroupSkills(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  skillType: SkillTypesEnum,
  title: string
): ListOfCategorisedSkillsByTypeInterface {
  // Initialize an empty array for grouped categories
  const skillCategories: CategorisedSkillsInterface[] = [];

  skillKeys.forEach((skillSlug) => {
    const skill: SkillInterface = skillsDatabase[skillSlug];
    // Filter skills based on skillType
    if (skill && skill.skillType === skillType) {
      // Find or create category group
      let categoryGroup = skillCategories.find(
        (category) => category.skillCategoryName === skill.category
      );
      if (!categoryGroup) {
        categoryGroup = { skillCategoryName: skill.category, skills: [] };
        skillCategories.push(categoryGroup);
      }

      // Add skill slug to the appropriate category group
      categoryGroup.skills.push(skillSlug);
    }
  });

  return { title, skillCategories };
}
