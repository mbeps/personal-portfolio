import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import Database from "@/interfaces/Database";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";

/**
 * Groups skills under the programming language they belong to so the language modal and SkillList can show stacks in one cluster.
 * Falls back to a “No Languages” bucket when a skill has no direct or related programming language, preserving visibility for standalone tools.
 *
 * @param skillKeys Slugs selected by search or filtering.
 * @param skillsDatabase Map of skills keyed by slug.
 * @returns Skill groups keyed by language name, with a trailing “No Languages” entry when needed.
 */
export default function groupByLanguage(
  skillKeys: SkillDatabaseKeys[],
  skillsDatabase: Database<SkillInterface>
): CategorisedSkillsInterface[] {
  const groupedSkills: { [skillCategoryName: string]: SkillDatabaseKeys[] } =
    {};
  const noLanguageSkills: SkillDatabaseKeys[] = []; // Temporarily hold skills not related to any language

  skillKeys.forEach((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    // Skip if the skill is not found in allSkills
    if (!skill) {
      console.warn(`Skill not found for slug: ${skillKey}`);
      return;
    }

    let isRelatedToProgrammingLanguage = false;

    // Directly group skills that are categorized as programming languages
    if (skill.category === SkillCategoriesEnum.ProgrammingLanguages) {
      isRelatedToProgrammingLanguage = true;
      if (!groupedSkills[skill.name]) {
        groupedSkills[skill.name] = [];
      }
      groupedSkills[skill.name].push(skillKey);
    } else if (skill.relatedSkills && skill.relatedSkills.length > 0) {
      // For skills not directly categorized as programming languages, check their related skills
      skill.relatedSkills.forEach((relatedSkillSlug) => {
        const relatedSkill = skillsDatabase[relatedSkillSlug];
        // Only group if the related skill is found and is a programming language
        if (
          relatedSkill &&
          relatedSkill.category === SkillCategoriesEnum.ProgrammingLanguages
        ) {
          isRelatedToProgrammingLanguage = true;
          const languageName: string = relatedSkill.name;
          groupedSkills[languageName] = groupedSkills[languageName] || [];
          groupedSkills[languageName].push(skillKey);
        }
      });
    }

    // Collect skills not related to any programming language
    if (!isRelatedToProgrammingLanguage) {
      noLanguageSkills.push(skillKey);
    }
  });

  // Add 'No Languages' group at the end
  if (noLanguageSkills.length > 0) {
    groupedSkills["No Languages"] = noLanguageSkills;
  }

  // Convert the groupedSkills object into an array of SkillsCategoryInterface
  return Object.entries(groupedSkills).map(([skillCategoryName, skills]) => ({
    skillCategoryName,
    skills,
  }));
}
