import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByCategory<T extends MaterialInterface>(
  materialSlugs: string[],
  materialsMap: { [key: string]: T }
): MaterialGroupInterface[] {
  return materialSlugs.reduce<MaterialGroupInterface[]>((groups, slug) => {
    const material = materialsMap[slug];
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
