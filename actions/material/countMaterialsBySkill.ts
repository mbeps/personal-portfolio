import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import { skillUsageMap } from "@/database/Materials/MaterialDatabaseMap";

/**
 * Counts the number of materials associated with a specific skill.
 * This function relies on a pre-computed map for efficient lookups.
 * Design decision: Using a map avoids iterating through all materials for each count.
 *
 * @param skillKey The key of the skill to count materials for.
 * @returns The number of materials related to the skill. Returns 0 if not found.
 */
export default function countMaterialsBySkill(
  skillKey: SkillDatabaseKeys
): number {
  return skillUsageMap.get(skillKey) || 0;
}
