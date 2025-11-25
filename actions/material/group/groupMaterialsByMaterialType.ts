import MaterialInterface from "@/database/Materials/MaterialInterface";
import MaterialTypeEnum from "@/enums/Material/MaterialTypeEnum";
import Database from "@/interfaces/Database";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";

/**
 * Wraps a list of slugs into one logical group so tabs like “Projects”, “Roles”, or “Blogs” can render via the shared MaterialList.
 * Used heavily when building curated sections where grouping by type is already implied.
 *
 * @param materialsKeys Slugs to include.
 * @param materialsDatabase Database map; only used to filter out stale keys.
 * @param groupName Label for the UI tab, normally a value from `MaterialTypeEnum`.
 * @returns Single-element array that satisfies the `MaterialGroupInterface` contract.
 */
export default function groupMaterialsByMaterialType<
  T extends MaterialInterface
>(
  materialsKeys: string[],
  materialsDatabase: Database<T>,
  groupName: MaterialTypeEnum
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
