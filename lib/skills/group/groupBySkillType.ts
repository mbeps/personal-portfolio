import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import Database from "@/interfaces/Database";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";

/**
 * Groups skills by their type (technology or technical) to support the grouped tables shown on skills and material detail pages.
 *
 * @param skillKeys Slugs to organise.
 * @param skillsDatabase Skill lookup map.
 * @returns Skill groups keyed by skill type.
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
