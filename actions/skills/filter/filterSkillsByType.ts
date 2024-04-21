import SkillInterface from "@/database/Skills/SkillInterface";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";

/**
 * Filters skills which belong to a specific skill type.
 * For example, technologies, technical or soft skills.
 *
 * @param skillKeys The keys of the skills to filter
 * @param skillsDatabase The database of all skills to access the skill data
 * @param skillType The type of the skill to filter for
 * @returns Filtered skill keys which belong to the specified skill type
 */
export default function filterSkillsByType(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
  skillType: SkillTypesEnum
): SkillDatabaseKeys[] {
  // Initialize an empty array for the filtered skill slugs
  const filteredSkillSlugs: SkillDatabaseKeys[] = [];

  // Iterate over the skill slugs array
  skillKeys.forEach((skillSlug) => {
    const skill: SkillInterface = skillsDatabase[skillSlug];
    // Check if the skill's type matches the specified skillType
    if (skill && skill.skillType === skillType) {
      // If it matches, add the slug to the filteredSkillSlugs array
      filteredSkillSlugs.push(skillSlug);
    }
  });

  return filteredSkillSlugs;
}
