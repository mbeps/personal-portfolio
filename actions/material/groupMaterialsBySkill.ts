import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsBySkill<
  T extends MaterialInterface
>(materialsMap: { [key: string]: T }): MaterialGroupInterface[] {
  // Create a temporary structure to hold skill name to material keys mapping
  const skillToKeys: Record<string, string[]> = {};

  Object.entries(materialsMap).forEach(([key, material]) => {
    material.skills.forEach((skill) => {
      if (!skillToKeys[skill.name]) {
        skillToKeys[skill.name] = [];
      }
      skillToKeys[skill.name].push(key);
    });
  });

  // Convert the temporary structure into the desired format
  return Object.keys(skillToKeys).map((groupName) => ({
    groupName,
    materials: skillToKeys[groupName].reduce((acc, key) => {
      acc[key] = materialsMap[key];
      return acc;
    }, {} as { [key: string]: T }),
  }));
}
