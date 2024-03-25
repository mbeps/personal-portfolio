import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export enum MaterialType {
  Projects = "Projects",
  Certificates = "Certificates",
  Blogs = "Blogs",
}

export default function groupMaterialsByMaterialType<
  T extends MaterialInterface
>(
  materialKeys: string[],
  materialsMap: { [key: string]: T },
  groupName: MaterialType
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
