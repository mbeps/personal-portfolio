import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";

/**
 * Filter out empty skill categories from a given list of grouped skill categories.
 *
 * @param groupedSkills The grouped skill categories to filter
 * @returns The filtered grouped skill categories without empty categories
 */
export default function filterNonEmptySkillCategories(
  groupedSkills: ListOfCategorisedSkillsByTypeInterface[]
): ListOfCategorisedSkillsByTypeInterface[] {
  return groupedSkills.filter(
    ({ skillCategories }) => skillCategories.length > 0
  );
}
