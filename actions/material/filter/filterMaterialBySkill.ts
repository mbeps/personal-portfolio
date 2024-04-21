import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import MaterialInterface from "@/database/Materials/MaterialInterface";

/**
 * Filters the materials that match a specific skill.
 * Only the materials that contain the skill will be included.
 *
 * @param skillKey The specific skill to filter for in the materials
 * @param materialKeys The keys of the materials to filter
 * @param materialDatabase All the materials in the database so that we can access the material details
 * @returns The keys of the materials that match the skill
 */
export default function filterMaterialBySkill<T extends MaterialInterface>(
  skillKey: SkillDatabaseKeys,
  materialKeys: string[],
  materialDatabase: Database<T>
): string[] {
  const filteredMaterialSlugs: string[] = [];

  materialKeys.forEach((key) => {
    const material: T = materialDatabase[key];
    if (material && material.skills.includes(skillKey)) {
      filteredMaterialSlugs.push(key);
    }
  });

  return filteredMaterialSlugs;
}
