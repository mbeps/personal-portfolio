import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export function filterMaterialBySkill<T extends MaterialInterface>(
  skillSlug: string,
  materialsMap: { [key: string]: T },
  skillType: SkillTypesEnum
): { [key: string]: T } {
  const filteredMaterialsMap = Object.entries(materialsMap).reduce(
    (acc, [key, material]) => {
      if (
        material.skills.some(
          (skill) => skill.slug === skillSlug && skill.skillType === skillType
        )
      ) {
        acc[key] = material;
      }
      return acc;
    },
    {} as { [key: string]: T }
  );

  return filteredMaterialsMap;
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
  skillCategory: string,
  materialsMap: { [key: string]: T }
): { [key: string]: T } {
  const filteredMaterialsMap = Object.entries(materialsMap).reduce(
    (acc, [key, material]) => {
      if (
        material.skills.some(
          (skill) =>
            stringToSlug(skill.category) === stringToSlug(skillCategory)
        )
      ) {
        acc[key] = material;
      }
      return acc;
    },
    {} as { [key: string]: T }
  );

  return filteredMaterialsMap;
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
