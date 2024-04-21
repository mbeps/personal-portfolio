import stringToSlug from "@/actions/stringToSlug";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillInterface from "@/database/Skills/SkillInterface";

/**
 * Filters the materials that match a specific skill category.
 * The skill category is within the skill object listed in the material.
 *
 * @param materialKeys Material keys to filter by skill category
 * @param materialsDatabase All the materials in the database so that we can access the material details
 * @param skillCategory The specific skill category to filter for in the materials
 * @param skillsDatabase All the skills in the database so that we can access the skill details
 * @returns The keys of the materials that match the skill category
 */
export default function filterMaterialBySkillCategory<
  T extends MaterialInterface
>(
  materialKeys: string[],
  materialsDatabase: Database<T>,
  skillCategory: string,
  skillsDatabase: Database<SkillInterface>
): string[] {
  const filteredMaterialSlugs: string[] = [];
  const targetCategorySlug = stringToSlug(skillCategory);

  for (const materialKey of materialKeys) {
    const material: T = materialsDatabase[materialKey];
    for (const skillSlug of material.skills) {
      const skill: SkillInterface = skillsDatabase[skillSlug];
      if (skill && stringToSlug(skill.category) === targetCategorySlug) {
        filteredMaterialSlugs.push(materialKey);
        break; // Assuming a material only needs one matching skill category to be included
      }
    }
  }

  return filteredMaterialSlugs;
}
