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
  skillType: SkillTypesEnum,
): SkillDatabaseKeys[] {
  return skillKeys.filter((skillSlug) =>
    Boolean(
      skillsDatabase[skillSlug] &&
      skillsDatabase[skillSlug].skillType === skillType,
    ),
  );
}
