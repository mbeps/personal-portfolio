import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import type SkillInterface from "@/database/skills/skill-interface";
import type Database from "@/interfaces/database";

/**
 * Extracts a lightweight skills map containing only the requested slugs so downstream grouping logic can work with a smaller dataset.
 *
 * @param skillKeys Slugs to extract.
 * @param skillsDatabase Full skills map.
 * @returns New map scoped to the provided keys.
 */
export default function getSkillsDatabaseFromKeys(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>,
): Database<SkillInterface> {
  const filteredSkills: Database<SkillInterface> = {};

  skillKeys.forEach((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    if (skill) {
      filteredSkills[skillKey] = skill;
    }
  });

  return filteredSkills;
}
