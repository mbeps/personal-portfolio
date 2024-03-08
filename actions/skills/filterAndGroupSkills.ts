import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import SkillInterface, {
  SkillTypesEnum,
} from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

export default function filterAndGroupSkills(
  skills: SkillInterface[],
  skillType: SkillTypesEnum,
  title: string
): GroupedSkillsCategoriesInterface {
  // Filter skills based on skillType
  const filteredSkills = skills.filter(
    (skill) => skill.skillType === skillType
  );

  // Group the filtered skills directly into an array of SkillsCategoryInterface
  const skillCategories: SkillsCategoryInterface[] = filteredSkills.reduce(
    (acc, skill) => {
      const category = skill.category;
      const existingCategory = acc.find(
        (c) => c.skillCategoryName === category
      );

      if (existingCategory) {
        existingCategory.skills.push(skill);
      } else {
        acc.push({ skillCategoryName: category, skills: [skill] });
      }

      return acc;
    },
    [] as SkillsCategoryInterface[]
  );

  return { title, skillCategories };
}
