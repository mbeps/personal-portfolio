import MaterialInterface from "@/database/Materials/MaterialInterface";
import Database from "@/interfaces/Database";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";

/**
 * Builds the structures consumed by `MaterialGroupSectionList`, letting each page reuse the same grouping markup.
 * Only keys are stored, so the consuming component can fetch material metadata lazily.
 *
 * @param materialsKeys Ordered keys the page decided to show.
 * @param materialsDatabase Database map used to read metadata.
 * @returns Array of group objects keyed by the material category.
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
