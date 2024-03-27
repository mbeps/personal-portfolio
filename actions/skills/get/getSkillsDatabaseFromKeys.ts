import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

/**
 * Gets the skills database from the given skill keys.
 *
 * @param skillKeys The skill keys to get the skills database from
 * @param skillsDatabase The skills database to get the skills from
 * @returns The skills database from the given skill keys
 */
export default function getSkillsDatabaseFromKeys(
  skillKeys: SkillKeysEnum[],
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
