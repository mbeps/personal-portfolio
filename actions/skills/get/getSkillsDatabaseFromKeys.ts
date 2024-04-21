import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";

/**
 * Gets the skills database from the given skill keys.
 *
 * @param skillKeys The skill keys to get the skills database from
 * @param skillsDatabase The skills database to get the skills from
 * @returns The skills database from the given skill keys
 */
export default function getSkillsDatabaseFromKeys(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>
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
