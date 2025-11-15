import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import Database from "@/interfaces/Database";

/**
 * Adds sub-skills to the materials database based on the related skills which are already present.
 * For each material, it will iterate over the skills and add any related skills that match the specified skill type.
 * This is useful for adding nested skills to materials, such as adding frameworks to a programming language.
 *
 * @param materialsDatabase The database of all materials to add nested skills to
 * @param skillsDatabase  The database of all skills to check for related skills
 * @param ignoredCategories The categories of skills to ignore when adding nested skills
 * @param skillTypeToAdd Skill types to check from the related skills for nested skills
 * @param skillTypeToCheck Skill types that can be added to the material
 * @returns The materials database with nested skills added
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
