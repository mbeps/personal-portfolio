import SkillSlugEnum from "@/enums/SkillSlugEnum";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import stringToSlug from "../stringToSlug";

export function filterMaterialBySkill<T extends MaterialInterface>(
  skillSlug: SkillSlugEnum,
  materialKeys: string[],
  materialsMap: { [key: string]: T }
): string[] {
  const filteredMaterialSlugs: string[] = [];

  materialKeys.forEach((key) => {
    const material = materialsMap[key];
    if (material && material.skills.includes(skillSlug)) {
      filteredMaterialSlugs.push(key);
    }
  });

  return filteredMaterialSlugs;
}

export function filterMaterialByCategory<T extends MaterialInterface>(
  category: string,
  materialKeys: string[],
  materialsMap: { [key: string]: T } // Keep materialsMap for accessing material details
): string[] {
  const filteredMaterialSlugs = materialKeys.reduce((acc: string[], key) => {
    const material = materialsMap[key];
    if (
      material &&
      stringToSlug(material.category) === stringToSlug(category)
    ) {
      acc.push(key);
    }
    return acc;
  }, []); // Initialize the accumulator as an empty array of strings

  return filteredMaterialSlugs;
}

export function filterMaterialBySkillCategory<T extends MaterialInterface>(
  materialKeys: string[],
  materialsMap: { [key: string]: T },
  skillCategory: string,
  skillsMap: { [key: string]: SkillInterface }
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

export function filterMaterialByArchivedStatus<T extends MaterialInterface>(
  includeArchived: boolean,
  materialKeys: string[],
  materialsMap: { [key: string]: T }
): string[] {
  return materialKeys.reduce<string[]>((acc, key) => {
    const material = materialsMap[key];
    const shouldBeIncluded = includeArchived ? true : !material.archived;
    if (shouldBeIncluded) {
      acc.push(key);
    }
    return acc;
  }, []);
}
