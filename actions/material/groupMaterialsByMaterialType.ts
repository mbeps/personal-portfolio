import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByMaterialType<
  T extends MaterialInterface
>(
  materialKeys: string[],
  materialsMap: { [key: string]: T },
  groupName: "Projects" | "Certificates" | "Blogs" // TODO: Use enums
): MaterialGroupInterface[] {
  // Filter materialKeys to ensure they exist in the materialsMap
  const validMaterialsKeys = materialKeys.filter((key) => key in materialsMap);

  // Return an array with a single MaterialGroupInterface object
  return [
    {
      groupName,
      materialsKeys: validMaterialsKeys,
    },
  ];
}
