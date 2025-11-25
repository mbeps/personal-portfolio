import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import { skillUsageMap } from "@/database/Materials/MaterialDatabaseMap";

/**
 * Reads the aggregated skill usage counts so we can surface totals on skill pages without recalculating on the fly.
 *
 * @param skillKey Key from `SkillDatabaseKeys`.
 * @returns Usage number pulled straight from `skillUsageMap`, or `0` when the skill never appears.
 */
export default function countMaterialsBySkill(
  skillKey: SkillDatabaseKeys
): number {
  return skillUsageMap.get(skillKey) || 0;
}
