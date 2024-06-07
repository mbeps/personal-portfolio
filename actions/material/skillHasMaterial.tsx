import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import countMaterialsBySkill from "./countMaterialsBySkill";

/**
 * Checks whether or not a skill has materials.
 * A skill has materials if there are at least 2 materials that contain the skill.
 *
 * @param skillKey The specific skill to check if it has materials
 * @param materialDatabase All the materials in the database so that we can access the material details
 * @returns Whether or not the skill has materials
 */
export default function skillHasMaterial<T extends MaterialInterface>(
  skillKey: SkillDatabaseKeys,
  materialDatabase: Database<T>
): boolean {
  return countMaterialsBySkill(skillKey, materialDatabase) >= 2;
}
