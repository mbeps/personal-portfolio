import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import Database from "@/interfaces/Database";

/**
 * Propagates skill relationships so filters, search, and the homepage counts reflect the same taxonomy.
 * Called when bootstrapping the static databases, so every downstream consumer works with already enriched skill arrays.
 *
 * @param materialsDatabase Material records that will be mutated in place.
 * @param skillsDatabase Source of canonical skill metadata that defines the relationships.
 * @param ignoredCategories Categories that should never bleed into a material via propagation.
 * @param skillTypeToAdd Optional constraint that limits which related skill types get duplicated.
 * @param skillTypeToCheck Optional constraint that defines the trigger skill types from which propagation starts.
 * @returns The same database reference, now updated so derived relations exist before any UI reads them.
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
