import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByMaterialType<
  T extends MaterialInterface,
>(
  materials: T[],
  groupName: "Projects" | "Certificates" | "Blogs",
): MaterialGroupInterface[] {
  return [
    {
      groupName: groupName,
      materials: materials,
    },
  ];
}
