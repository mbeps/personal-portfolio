import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function filterMaterialBySkill<T extends MaterialInterface>(
  skillSlug: SkillKeysEnum,
  materialKeys: string[],
  materialsMap: Database<T>
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
