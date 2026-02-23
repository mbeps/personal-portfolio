import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import { skillUsageMap } from "@/database/materials/MaterialDatabaseMap";

/**
 * Reads the aggregated skill usage counts so we can surface totals on skill pages without recalculating on the fly.
 *
 * @param skillKey Key from `SkillDatabaseKeys`.
 * @returns Usage number pulled straight from `skillUsageMap`, or `0` when the skill never appears.
 */
export function countMaterialsBySkill(skillKey: SkillDatabaseKeys): number {
  return skillUsageMap.get(skillKey) || 0;
}

/**
 * Answers whether a skill key appears anywhere in the aggregated portfolio so `SkillTag` can decide if it should become a link.
 * Powered by the prebuilt `skillUsageMap`, keeping the navbar language modal and skills table in sync.
 *
 * @param skillKey Skill slug pulled from `SkillDatabaseKeys`.
 * @returns `true` if the map contains a usage count greater than zero.
 */
export function isSkillAssociatedWithMaterial(
  skillKey: SkillDatabaseKeys,
): boolean {
  return (skillUsageMap.get(skillKey) || 0) > 0;
}

/**
 * Guard used by the "hide skills without material" toggle so we only highlight skills that show up multiple times in the portfolio.
 * Threshold stays at two usages to avoid surfacing technologies that were only touched once.
 *
 * @param skillKey Skill slug we are checking.
 * @returns `true` when the usage count meets or exceeds the visibility threshold.
 */
export function skillHasMaterial(skillKey: SkillDatabaseKeys): boolean {
  return (skillUsageMap.get(skillKey) || 0) >= 2;
}
