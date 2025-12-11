import stringToSlug from "@/actions/stringToSlug";
import MaterialInterface from "@/database/materials/MaterialInterface";
import SkillInterface from "@/database/skills/SkillInterface";
import Database from "@/interfaces/Database";

/**
 * Implements the “skill category” dropdown shared by Projects, Experience, and Certificates.
 * Works on already filtered key arrays so more granular filters can chain together without dropping order.
 *
 * @param materialKeys Keys currently visible prior to applying the category filter.
 * @param materialsDatabase Database map where metadata lives.
 * @param skillCategory UI label for the requested category.
 * @param skillsDatabase Skill dictionary used to resolve categories.
 * @returns Keys of materials that contain at least one skill within the category.
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
