import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import countMaterialsBySkill from "./countMaterialsBySkill";

/**
 * Checks whether or not a skill has materials.
 * A skill has materials if there are at least 2 materials that contain the skill.
 *
 * @param skillKey The specific skill to check if it has materials
 * @returns Whether or not the skill has materials
 */
export default function skillHasMaterial(skillKey: SkillDatabaseKeys): boolean {
  return countMaterialsBySkill(skillKey) >= 2;
}
