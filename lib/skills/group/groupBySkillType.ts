import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import Database from "@/interfaces/Database";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";

/**
 * Groups the skill according to their skill type.
 *
 * @param skillKeys The keys of the skills to group
 * @param skillsDatabase The database of all skills to access the skill data
 * @returns The skills grouped by their skill type
 */
export default function groupBySkillType(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>
): CategorisedSkillsInterface[] {
  // Object to hold the grouping by skillType
  const skillTypes: Database<SkillDatabaseKeys[]> = {};

  skillKeys.forEach((slug) => {
    const skill: SkillInterface = skillsDatabase[slug];
    if (skill) {
      const skillType = skill.skillType;
      // Initialize the skillType array if it doesn't exist
      if (!skillTypes[skillType]) {
        skillTypes[skillType] = [];
      }
      // Add the skillSlug to the appropriate skillType
      skillTypes[skillType].push(slug);
    }
  });

  // Convert the skillTypes object to an array of SkillsCategoryInterface
  const result: CategorisedSkillsInterface[] = Object.keys(skillTypes).map(
    (key) => ({
      skillCategoryName: key,
      skills: skillTypes[key],
    })
  );

  return result;
}
