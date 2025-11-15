import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import countMaterialsBySkill from "./countMaterialsBySkill";

/**
 * Determines if a skill is associated with a significant number of materials.
 * A skill is considered to have "material" presence if it's used in at least two items.
 * This helps in deciding whether to prominently feature a skill.
 *
 * @param skillKey The skill to check.
 * @returns `true` if the skill is used in two or more materials, otherwise `false`.
 */
export default function skillHasMaterial(skillKey: SkillDatabaseKeys): boolean {
  return countMaterialsBySkill(skillKey) >= 2;
}
