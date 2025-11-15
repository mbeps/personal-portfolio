import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import { skillUsageMap } from "@/database/Materials/MaterialDatabaseMap";

/**
 * Checks whether a skill is associated with any material.
 * Uses precomputed skillUsageMap for O(1) lookup instead of scanning all materials.
 *
 * @param skillKey The key of the skill to check for
 * @returns Whether the skill is associated with any material
 */
export default function isSkillAssociatedWithMaterial(
  skillKey: SkillDatabaseKeys
): boolean {
  return (skillUsageMap.get(skillKey) || 0) > 0;
}
