import MaterialInterface from "@/database/materials/MaterialInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import Database from "@/interfaces/Database";
import filterMaterialKeysByPredicate from "@/lib/material/filter/filterMaterialKeysByPredicate";

/**
 * Core filter used by every listing page when a user picks a skill from the drawer.
 * Works on arrays of keys so Fuse results, grouped lists, and archive toggles can compose without re-reading the DB.
 *
 * @param skillKey Skill slug chosen by the visitor.
 * @param materialKeys Ordered list of keys to test against.
 * @param materialDatabase Lookup map containing the metadata.
 * @returns Keys that reference materials containing the chosen skill.
 */
export default function filterMaterialBySkill<T extends MaterialInterface>(
  skillKey: SkillDatabaseKeys,
  materialKeys: string[],
  materialDatabase: Database<T>,
): string[] {
  return filterMaterialKeysByPredicate(
    materialKeys,
    materialDatabase,
    (material) => Boolean(material && material.skills.includes(skillKey)),
  );
}
