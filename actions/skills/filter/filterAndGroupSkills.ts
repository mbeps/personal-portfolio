import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";

export default function filterAndGroupSkills(
  skillSlugs: SkillKeysEnum[],
  allSkills: Database<SkillInterface>, // Assuming this is passed into the function
  skillType: SkillTypesEnum,
  title: string
): GroupedSkillsCategoriesInterface {
  // Initialize an empty array for grouped categories
  const skillCategories: SkillsCategoryInterface[] = [];

  skillSlugs.forEach((skillSlug) => {
    const skill = allSkills[skillSlug];
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
