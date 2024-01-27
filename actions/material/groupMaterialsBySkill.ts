import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsBySkill<T extends MaterialInterface>(
  materials: T[],
): MaterialGroupInterface[] {
  const grouped = materials.reduce<Record<string, T[]>>((acc, material) => {
    material.skills.forEach((skill) => {
      if (!acc[skill.name]) {
        acc[skill.name] = [];
      }
      acc[skill.name].push(material);
    });
    return acc;
  }, {});

  return Object.keys(grouped).map((groupName) => ({
    groupName,
    materials: grouped[groupName],
  }));
}
