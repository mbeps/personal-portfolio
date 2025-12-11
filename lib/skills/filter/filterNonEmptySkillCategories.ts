import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";

/**
 * Filter out empty skill categories from a given list of grouped skill categories.
 *
 * @param groupedSkills The grouped skill categories to filter
 * @returns The filtered grouped skill categories without empty categories
 */
export default function filterNonEmptySkillCategories(
  groupedSkills: GroupedSkillsCategoriesInterface[]
): GroupedSkillsCategoriesInterface[] {
  return groupedSkills.filter(
    ({ skillCategories }) => skillCategories.length > 0
  );
}
