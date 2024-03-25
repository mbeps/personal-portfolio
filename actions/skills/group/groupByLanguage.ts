import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

export default function groupByLanguage(
  skillSlugs: SkillKeysEnum[],
  allSkills: Database<SkillInterface>
): SkillsCategoryInterface[] {
  const groupedSkills: { [skillCategoryName: string]: SkillKeysEnum[] } = {};
  const noLanguageSkills: SkillKeysEnum[] = []; // Temporarily hold skills not related to any language

  skillSlugs.forEach((skillSlug) => {
    const skill = allSkills[skillSlug];
    // Skip if the skill is not found in allSkills
    if (!skill) {
      console.warn(`Skill not found for slug: ${skillSlug}`);
      return;
    }

    let isRelatedToProgrammingLanguage = false;

    // Directly group skills that are categorized as programming languages
    if (skill.category === SkillCategoriesEnum.ProgrammingLanguages) {
      isRelatedToProgrammingLanguage = true;
      if (!groupedSkills[skill.name]) {
        groupedSkills[skill.name] = [];
      }
      groupedSkills[skill.name].push(skillSlug);
    } else if (skill.relatedSkills && skill.relatedSkills.length > 0) {
      // For skills not directly categorized as programming languages, check their related skills
      skill.relatedSkills.forEach((relatedSkillSlug) => {
        const relatedSkill = allSkills[relatedSkillSlug];
        // Only group if the related skill is found and is a programming language
        if (
          relatedSkill &&
          relatedSkill.category === SkillCategoriesEnum.ProgrammingLanguages
        ) {
          isRelatedToProgrammingLanguage = true;
          const languageName = relatedSkill.name;
          groupedSkills[languageName] = groupedSkills[languageName] || [];
          groupedSkills[languageName].push(skillSlug);
        }
      });
    }

    // Collect skills not related to any programming language
    if (!isRelatedToProgrammingLanguage) {
      noLanguageSkills.push(skillSlug);
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
