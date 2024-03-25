import stringToSlug from "@/actions/stringToSlug";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterMaterialBySkillCategory<
  T extends MaterialInterface
>(
  materialKeys: string[],
  materialsMap: Database<T>,
  skillCategory: string,
  skillsMap: Database<SkillInterface>
): string[] {
  const filteredMaterialSlugs: string[] = [];
  const targetCategorySlug = stringToSlug(skillCategory);

  for (const materialKey of materialKeys) {
    const material = materialsMap[materialKey];
    for (const skillSlug of material.skills) {
      const skill = skillsMap[skillSlug];
      if (skill && stringToSlug(skill.category) === targetCategorySlug) {
        filteredMaterialSlugs.push(materialKey);
        break; // Assuming a material only needs one matching skill category to be included
      }
    }
  }

  return filteredMaterialSlugs;
}
