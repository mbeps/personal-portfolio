import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";

export default function filterNonEmptySkillCategories(
  groupedSkills: GroupedSkillsCategoriesInterface[],
): GroupedSkillsCategoriesInterface[] {
  return groupedSkills.filter(
    ({ skillCategories }) => skillCategories.length > 0,
  );
}
