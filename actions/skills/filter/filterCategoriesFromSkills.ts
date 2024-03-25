import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

/**
 * Filter out skills that belong to the specified categories.
 * @param skills - The skills hashmap to filter.
 * @param ignoredCategories - The categories to ignore.
 * @returns The filtered skills hashmap.
 */
export default function filterCategoriesFromSkills(
  skills: Database<SkillInterface>,
  ignoredCategories: SkillCategoriesEnum[]
): SkillKeysEnum[] {
  // Use Object.keys() to get an array of all skill slugs (keys)
  // Then filter this array based on whether the skill's category is not in ignoredCategories
  return Object.keys(skills).filter((skillSlug) => {
    const skill = skills[skillSlug];
    // Include the skillSlug in the result if its category is not ignored
    return !ignoredCategories.includes(skill.category);
  }) as SkillKeysEnum[];
}
