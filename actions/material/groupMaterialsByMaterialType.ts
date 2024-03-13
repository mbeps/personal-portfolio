import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByMaterialType<
  T extends MaterialInterface
>(
  materialsMap: { [key: string]: T },
  groupName: "Projects" | "Certificates" | "Blogs" // Assuming enums are defined elsewhere
): MaterialGroupInterface[] {
  // No need to convert to an array, as we need to preserve the hashmap structure
  return [
    {
      groupName,
      materials: materialsMap, // Directly use the original hashmap
    },
  ];
}
