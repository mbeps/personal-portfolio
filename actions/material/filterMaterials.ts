import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

/**
 *
 * @param skillSlug
 * @param materials
 * @param skillType
 * @returns
 * @deprecated
 */
export function filterMaterialBySkill<T extends MaterialInterface>(
  skillSlug: string,
  materials: T[],
  skillType: SkillTypesEnum
): T[] {
  return materials.filter((material) =>
    material.skills.some(
      (skill) => skill.slug === skillSlug && skill.skillType === skillType
    )
  );
}

export function filterMaterialBySkillHashMap<T extends MaterialInterface>(
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

/**
 *
 * @param category
 * @param materials
 * @returns
 * @deprecated
 */
export function filterMaterialByCategory<T extends MaterialInterface>(
  category: string,
  materials: T[]
): T[] {
  return materials.filter(
    (material) => stringToSlug(material.category) === stringToSlug(category)
  );
}

export function filterMaterialByCategoryHashMap<T extends MaterialInterface>(
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

/**
 *
 * @param skillCategory
 * @param materials
 * @returns
 * @deprecated
 */
export function filterMaterialBySkillCategory<T extends MaterialInterface>(
  skillCategory: string,
  materials: T[]
): T[] {
  return materials.filter((material) =>
    material.skills.some(
      (skill) => stringToSlug(skill.category) === stringToSlug(skillCategory)
    )
  );
}

export function filterMaterialBySkillCategoryHashMap<
  T extends MaterialInterface
>(
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

/**
 *
 * @param includeArchived
 * @param materials
 * @returns
 * @deprecated
 */
export default function filterMaterialByArchivedStatus<
  T extends MaterialInterface
>(includeArchived: boolean, materials: T[]): T[] {
  return materials.filter((material) =>
    includeArchived ? true : !material.archived
  );
}

export function filterMaterialByArchivedStatusHashMap<
  T extends MaterialInterface
>(
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
