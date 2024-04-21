import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

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
): SkillsCategoryInterface[] {
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
  const result: SkillsCategoryInterface[] = Object.keys(skillTypes).map(
    (key) => ({
      skillCategoryName: key,
      skills: skillTypes[key],
    })
  );

  return result;
}
