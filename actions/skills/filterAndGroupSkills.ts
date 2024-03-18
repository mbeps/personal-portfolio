import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export default function filterAndGroupSkills(
  skills: Database<SkillInterface>,
  skillType: SkillTypesEnum,
  title: string
): GroupedSkillsCategoriesInterface {
  // Initialize an empty array for grouped categories
  const skillCategories: SkillsCategoryInterface[] = [];

  Object.entries(skills).forEach(([skillKey, skill]) => {
    // Filter skills based on skillType
    if (skill.skillType === skillType) {
      // Find or create category group
      let categoryGroup = skillCategories.find(
        (category) => category.skillCategoryName === skill.category
      );
      if (!categoryGroup) {
        categoryGroup = { skillCategoryName: skill.category, skills: {} };
        skillCategories.push(categoryGroup);
      }

      // Add skill to the appropriate category group's hashmap
      categoryGroup.skills[skillKey] = skill;
    }
  });

  return { title, skillCategories };
}
