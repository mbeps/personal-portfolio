import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import MaterialInterface from "@/database/Materials/MaterialInterface";

/**
 * Counts the number of materials that are related to a specific skill.
 * Only the materials that contain the skill will be counted.
 *
 * @param skillKey The specific skill to filter for in the materials
 * @param materialDatabase All the materials in the database so that we can access the material details
 * @returns The number of materials that match the skill
 */
export default function countMaterialsBySkill<T extends MaterialInterface>(
  skillKey: SkillDatabaseKeys,
  materialDatabase: Database<T>
): number {
  let count: number = 0;

  for (const key in materialDatabase) {
    const material: T = materialDatabase[key];
    if (material && material.skills.includes(skillKey)) {
      count++;
    }
  }

  return count;
}
