import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByMaterialType<
  T extends MaterialInterface
>(
  materialsMap: { [key: string]: T },
  groupName: "Projects" | "Certificates" | "Blogs" //TODO: Use enums instead of string literals
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
