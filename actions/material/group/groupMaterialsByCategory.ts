import MaterialInterface from "@/database/Materials/MaterialInterface";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";

/**
 * Groups the materials by their category.
 * This creates a group with the category name and the keys of the materials that belong to that category.
 *
 * @param materialsKeys The keys of the materials to group
 * @param materialsDatabase The database of all materials to access the material details
 * @returns The materials grouped by their category
 */
export default function groupMaterialsByCategory<T extends MaterialInterface>(
  materialsKeys: string[],
  materialsDatabase: Database<T>
): MaterialGroupInterface[] {
  return materialsKeys.reduce<MaterialGroupInterface[]>((groups, slug) => {
    const material: T = materialsDatabase[slug];
    if (!material) {
      return groups; // Skip if the material isn't found in the map
    }
    // Find the index of the group that matches the current material's category
    const groupIndex = groups.findIndex(
      (group) => group.groupName === material.category
    );

    // If the group doesn't exist, create a new group with the material's slug added
    if (groupIndex === -1) {
      groups.push({
        groupName: material.category,
        materialsKeys: [slug], // Initialize with the current material's slug
      });
    } else {
      // If the group exists, add the current material's slug to the group's materials array
      groups[groupIndex].materialsKeys.push(slug);
    }

    return groups;
  }, []);
}
