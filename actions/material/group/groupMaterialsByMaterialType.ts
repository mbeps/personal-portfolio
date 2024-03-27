import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export enum MaterialType {
  Projects = "Projects",
  Certificates = "Certificates",
  Blogs = "Blogs",
}

/**
 * Groups the materials based on the material type as defined in {@link MaterialType}.
 * A name for the group is provided.
 *
 * @param materialsKeys The keys of the materials to group
 * @param materialsDatabase The database of all materials to access the material details
 * @param groupName The name of the group to create
 * @returns The materials grouped by their category
 */
export default function groupMaterialsByMaterialType<
  T extends MaterialInterface
>(
  materialsKeys: string[],
  materialsDatabase: Database<T>,
  groupName: MaterialType
): MaterialGroupInterface[] {
  // Filter materialKeys to ensure they exist in the materialsMap
  const validMaterialsKeys: string[] = materialsKeys.filter(
    (key) => key in materialsDatabase
  );

  // Return an array with a single MaterialGroupInterface object
  return [
    {
      groupName,
      materialsKeys: validMaterialsKeys,
    },
  ];
}
