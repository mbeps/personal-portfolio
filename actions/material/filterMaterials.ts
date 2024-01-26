import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../stringToSlug";

export function filterMaterialBySkill<T extends MaterialInterface>(
  skillSlug: string,
  materials: T[],
  skillType: "hard" | "general" | "soft",
): T[] {
  return materials.filter((material) =>
    material.skills.some(
      (skill) => skill.slug === skillSlug && skill.skillType === skillType,
    ),
  );
}

export function filterMaterialByCategory<T extends MaterialInterface>(
  category: string,
  materials: T[],
): T[] {
  return materials.filter(
    (material) => stringToSlug(material.category) === stringToSlug(category),
  );
}

export function filterMaterialBySkillCategory<T extends MaterialInterface>(
  skillCategory: string,
  materials: T[],
): T[] {
  return materials.filter((material) =>
    material.skills.some(
      (skill) => stringToSlug(skill.category) === stringToSlug(skillCategory),
    ),
  );
}

export default function filterMaterialByArchivedStatus<
  T extends MaterialInterface,
>(includeArchived: boolean, materials: T[]): T[] {
  return materials.filter((material) =>
    includeArchived ? true : !material.archived,
  );
}
