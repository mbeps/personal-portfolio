import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillInterface from "@/database/Skills/SkillInterface";

/**
 * Counts the number of materials attributed to a skill or its related skills.
 * For example, a skill can have multiple projects, certificates, etc attributed to it.
 *
 * @param skillKey The key of the skill to count the materials attributed to
 * @param skillsDatabase The database of all skills to access the related skills
 * @param materialsDatabase The database of all materials to count the materials attributed to the skill
 * @returns The number of materials attributed to the skill
 */
export default function countMaterialsAttributedToSkill(
  skillKey: SkillDatabaseKeys,
  skillsDatabase: Database<SkillInterface>,
  materialsDatabase: Database<MaterialInterface>
): number {
  // checks if the skill or its related skills are present in the material
  function isSkillOrRelatedSkillPresent(
    materialSkillKeys: SkillDatabaseKeys[]
  ): boolean {
    if (materialSkillKeys.includes(skillKey)) {
      return true;
    }
    // Check related skills for each skill in the material
    for (let skillKey of materialSkillKeys) {
      const skill: SkillInterface = skillsDatabase[skillKey];
      if (
        skill &&
        skill.relatedSkills &&
        skill.relatedSkills.includes(skillKey)
      ) {
        return true;
      }
    }
    return false;
  }

  // Count the number of materials that include the skill or its related skills
  const count: number = Object.values(materialsDatabase).reduce(
    (acc, material) => {
      if (isSkillOrRelatedSkillPresent(material.skills)) {
        acc += 1;
      }
      return acc;
    },
    0
  );

  return count;
}
