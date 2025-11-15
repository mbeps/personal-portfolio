import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import { skillUsageMap } from "@/database/Materials/MaterialDatabaseMap";

/**
 * Counts the number of materials that are related to a specific skill.
 * Uses precomputed skillUsageMap for O(1) lookup instead of scanning all materials.
 *
 * @param skillKey The specific skill to count materials for
 * @returns The number of materials that match the skill
 */
export default function countMaterialsBySkill(
  skillKey: SkillDatabaseKeys
): number {
  return skillUsageMap.get(skillKey) || 0;
}
