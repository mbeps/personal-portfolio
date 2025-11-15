import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import { skillUsageMap } from "@/database/Materials/MaterialDatabaseMap";

/**
 * Checks if a skill is associated with any material in the database.
 * It uses a pre-computed map for performance.
 * This avoids iterating over all materials.
 *
 * @param skillKey The skill to check.
 * @returns `true` if the skill is used by at least one material, otherwise `false`.
 */
export default function isSkillAssociatedWithMaterial(
  skillKey: SkillDatabaseKeys
): boolean {
  return (skillUsageMap.get(skillKey) || 0) > 0;
}
