import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import countMaterialsBySkill from "./countMaterialsBySkill";

/**
 * Guard used by the “hide skills without material” toggle so we only highlight skills that show up multiple times in the portfolio.
 * Threshold stays at two usages to avoid surfacing technologies that were only touched once.
 *
 * @param skillKey Skill slug we are checking.
 * @returns `true` when the usage count meets or exceeds the visibility threshold.
 */
export default function skillHasMaterial(skillKey: SkillDatabaseKeys): boolean {
  return countMaterialsBySkill(skillKey) >= 2;
}
