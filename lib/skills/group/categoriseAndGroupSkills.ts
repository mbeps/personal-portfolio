import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import Database from "@/interfaces/Database";
import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";

/**
 * Filters skills by type and then groups them by category, producing the nested structure consumed by `SkillTableSection`.
 * Helps every detail page reuse the same grouping logic while keeping titles like “Technologies” or “Technical Skills” aligned with the enum taxonomy.
 *
 * @param skillKeys Slugs to filter and group.
 * @param skillsDatabase Skill lookup map containing categories and type metadata.
 * @param skillType Type to keep when building the groups.
 * @param title Display title for the resulting group list.
 * @returns Group with title plus the category buckets underneath it.
 */
export default function categoriseAndGroupSkills(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  skillType: SkillTypesEnum,
  title: string,
): ListOfCategorisedSkillsByTypeInterface {
  // Initialize an empty array for grouped categories
  const skillCategories: CategorisedSkillsInterface[] = [];

  skillKeys.forEach((skillSlug) => {
    const skill: SkillInterface = skillsDatabase[skillSlug];
    // Filter skills based on skillType
    if (skill && skill.skillType === skillType) {
      // Find or create category group
      let categoryGroup = skillCategories.find(
        (category) => category.skillCategoryName === skill.category,
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
