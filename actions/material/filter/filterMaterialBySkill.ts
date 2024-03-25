import SkillSlugEnum from "@/enums/SkillSlugEnum";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function filterMaterialBySkill<T extends MaterialInterface>(
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
