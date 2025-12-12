import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";

/**
 * Drops category buckets that ended up empty so tables avoid rendering blank sections after filtering.
 *
 * @param groupedSkills Grouped categories generated for display.
 * @returns Grouped categories containing only non-empty buckets.
 */
export default function filterNonEmptySkillCategories(
  groupedSkills: ListOfCategorisedSkillsByTypeInterface[]
): ListOfCategorisedSkillsByTypeInterface[] {
  return groupedSkills.filter(
    ({ skillCategories }) => skillCategories.length > 0
  );
}
