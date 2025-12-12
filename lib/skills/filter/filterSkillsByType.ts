import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import Database from "@/interfaces/Database";

/**
 * Filters skill slugs by type so grouped tables only receive the skills relevant to a specific bucket.
 * Used before grouping by category to keep titles like “Technologies” aligned with the enum values.
 *
 * @param skillKeys Skill slugs to evaluate.
 * @param skillsDatabase Map of skills keyed by slug.
 * @param skillType Type to keep in the result.
 * @returns Skill keys that match the requested type.
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
