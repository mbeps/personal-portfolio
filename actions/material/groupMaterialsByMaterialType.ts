import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByMaterialType<
  T extends MaterialInterface
>(
  materials: T[],
  groupName: "Projects" | "Certificates" | "Blogs"
): MaterialGroupInterface[] {
  return [
    {
      groupName: groupName,
      materials: materials,
    },
  ];
}

export function groupMaterialsByMaterialTypeHashMap<
  T extends MaterialInterface
>(
  materialsMap: { [key: string]: T },
  groupName: "Projects" | "Certificates" | "Blogs"
): MaterialGroupInterface[] {
  // Convert hashmap to array of MaterialInterface objects
  const materialsArray: T[] = Object.values(materialsMap);

  return [
    {
      groupName: groupName,
      materials: materialsArray,
    },
  ];
}
