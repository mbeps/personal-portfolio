import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByCategory<
  T extends MaterialInterface
>(materialsMap: { [key: string]: T }): MaterialGroupInterface[] {
  const materialsArray: T[] = Object.values(materialsMap);

  return materialsArray.reduce<MaterialGroupInterface[]>((groups, material) => {
    const groupIndex = groups.findIndex(
      (group) => group.groupName === material.category
    );

    if (groupIndex === -1) {
      groups.push({
        groupName: material.category,
        materials: [material],
      });
    } else {
      groups[groupIndex].materials.push(material);
    }

    return groups;
  }, []);
}
