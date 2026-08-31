import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import type SkillInterface from "@/database/skills/skill-interface";
import type SkillTypesEnum from "@/enums/skill/skill-types-enum";
import type Database from "@/interfaces/database";

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
