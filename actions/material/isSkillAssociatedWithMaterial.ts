import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import { skillUsageMap } from "@/database/Materials/MaterialDatabaseMap";

/**
 * Answers whether a skill key appears anywhere in the aggregated portfolio so `SkillTag` can decide if it should become a link.
 * Powered by the prebuilt `skillUsageMap`, keeping the navbar language modal and skills table in sync.
 *
 * @param skillKey Skill slug pulled from `SkillDatabaseKeys`.
 * @returns `true` if the map contains a usage count greater than zero.
 */
export default function isSkillAssociatedWithMaterial(
  skillKey: SkillDatabaseKeys
): boolean {
  return (skillUsageMap.get(skillKey) || 0) > 0;
}
