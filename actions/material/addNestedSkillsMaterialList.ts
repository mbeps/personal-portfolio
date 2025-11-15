import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import Database from "@/interfaces/Database";

/**
 * Augments a material list by adding nested or related skills.
 * Iterates through each material's existing skills.
 * If a skill has related skills, those are added to the material's skill set.
 * This is useful for automatically associating technologies.
 * For example, a project using a library also uses the underlying language.
 *
 * @param materialsDatabase The collection of materials to process.
 * @param skillsDatabase The master database of all skills.
 * @param ignoredCategories Skill categories to exclude from this process.
 * @param skillTypeToAdd The type of related skill to add (e.g., a framework).
 * @param skillTypeToCheck The type of the primary skill to check for relations (e.g., a language).
 * @returns The updated materials database with nested skills.
 */
export default function addNestedSkillsMaterialList<
  T extends MaterialInterface
>(
  materialsDatabase: Database<T>,
  skillsDatabase: Database<SkillInterface>,
  ignoredCategories: SkillCategoriesEnum[],
  skillTypeToAdd?: SkillTypesEnum,
  skillTypeToCheck?: SkillTypesEnum
): Database<T> {
  // Iterate over each material
  Object.keys(materialsDatabase).forEach((materialKey) => {
    const material: T = materialsDatabase[materialKey];

    // Use a Set to store skills to ensure uniqueness
    const skillsToAddSet: Set<SkillDatabaseKeys> = new Set(material.skills);

    // Iterate over each skill in the material's skills array
    material.skills.forEach((skillSlug) => {
      const skill = skillsDatabase[skillSlug];

      // Check if the skill's category is not in the ignored categories
      if (!ignoredCategories.includes(skill.category)) {
        // Check if the current skill matches the type to check (or if type to check is undefined)
        if (!skillTypeToCheck || skill.skillType === skillTypeToCheck) {
          // Add related skills if they match the type to add (or if type to add is undefined)
          skill.relatedSkills?.forEach((relatedSkillSlug) => {
            const relatedSkill = skillsDatabase[relatedSkillSlug];
            // Ensure the related skill is not in an ignored category
            if (!ignoredCategories.includes(relatedSkill.category)) {
              if (
                !skillTypeToAdd ||
                relatedSkill.skillType === skillTypeToAdd
              ) {
                skillsToAddSet.add(relatedSkillSlug);
              }
            }
          });
        }
      }
    });

    // Convert the Set back to an array and assign it to the material's skills
    material.skills = Array.from(skillsToAddSet);
  });

  return materialsDatabase;
}
