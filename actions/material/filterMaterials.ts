import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export function filterMaterialBySkill<T extends MaterialInterface>(
  skillSlug: SkillSlugEnum,
  materialsMap: { [key: string]: T }
): { [key: string]: T } {
  const filteredMaterials: { [key: string]: T } = {};

  for (const key in materialsMap) {
    const material = materialsMap[key];
    if (material.skills.includes(skillSlug)) {
      filteredMaterials[key] = material;
    }
  }

  return filteredMaterials;
}

export function filterMaterialByCategory<T extends MaterialInterface>(
  category: string,
  materialsMap: { [key: string]: T }
): { [key: string]: T } {
  const filteredMaterials = Object.entries(materialsMap).reduce(
    (acc, [key, material]) => {
      if (stringToSlug(material.category) === stringToSlug(category)) {
        acc[key] = material;
      }
      return acc;
    },
    {} as { [key: string]: T }
  );

  return filteredMaterials;
}

export function filterMaterialBySkillCategory<T extends MaterialInterface>(
  materialsMap: { [key: string]: T },
  skillCategory: string,
  skillsMap: { [key: string]: SkillInterface }
): { [key: string]: T } {
  const filteredMaterials: { [key: string]: T } = {};
  const targetCategorySlug = stringToSlug(skillCategory);

  for (const materialKey in materialsMap) {
    const material = materialsMap[materialKey];
    for (const skillSlug of material.skills) {
      const skill = skillsMap[skillSlug];
      if (skill && stringToSlug(skill.category) === targetCategorySlug) {
        filteredMaterials[materialKey] = material;
        break; // Assuming a material only needs one matching skill category to be included
      }
    }
  }

  return filteredMaterials;
}

export function filterMaterialByArchivedStatus<T extends MaterialInterface>(
  includeArchived: boolean,
  materialsMap: { [key: string]: T }
): { [key: string]: T } {
  const filteredMaterialsMap = Object.entries(materialsMap).reduce(
    (acc, [key, material]) => {
      const shouldBeIncluded = includeArchived ? true : !material.archived;
      if (shouldBeIncluded) {
        acc[key] = material;
      }
      return acc;
    },
    {} as { [key: string]: T }
  );

  return filteredMaterialsMap;
}
