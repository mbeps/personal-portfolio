import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";

/**
 * Checks whether any grouped skill collection contains at least one skill entry.
 *
 * @param groupedSkills Grouped skills produced by `buildSkillTableGroups`.
 * @returns True when there is at least one skill to display.
 */
export default function hasAnySkills(
  groupedSkills: ListOfCategorisedSkillsByTypeInterface[] | undefined
): boolean {
  if (!Array.isArray(groupedSkills)) {
    return false;
  }

  return groupedSkills.some(({ skillCategories }) =>
    skillCategories.some(({ skills }) => skills.length > 0)
  );
}
