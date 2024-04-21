import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import MaterialInterface from "@/database/Materials/MaterialInterface";

/**
 * Checks whether a skill is associated with any material.
 *
 * @param skillKey The key of the skill to check for
 * @param materialsDatabase  The database of all materials to check for the skill
 * @returns Whether the skill is associated with any material
 */
export default function isSkillAssociatedWithMaterial(
  skillKey: SkillDatabaseKeys,
  materialsDatabase: Database<MaterialInterface>
): boolean {
  // Loop through the materialsMap
  for (const materialKey in materialsDatabase) {
    // Check if the current material's skills array includes the skillToCheck
    if (materialsDatabase[materialKey].skills.includes(skillKey)) {
      // If found, return true
      return true;
    }
  }
  // If the loop completes without finding the skill, return false
  return false;
}
