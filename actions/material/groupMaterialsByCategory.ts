import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByCategory<
  T extends MaterialInterface
>(materialsMap: { [key: string]: T }): MaterialGroupInterface[] {
  // Convert the hashmap into an array of entries ([key, value] pairs)
  const materialsEntries: [string, T][] = Object.entries(materialsMap);

  return materialsEntries.reduce<MaterialGroupInterface[]>(
    (groups, [key, material]) => {
      // Find the index of the group that matches the current material's category
      const groupIndex = groups.findIndex(
        (group) => group.groupName === material.category
      );

      // If the group doesn't exist, create a new group with the material added to its hashmap
      if (groupIndex === -1) {
        groups.push({
          groupName: material.category,
          materials: { [key]: material }, // Initialize with the current material as a hashmap
        });
      } else {
        // If the group exists, add the current material to the group's materials hashmap
        groups[groupIndex].materials[key] = material;
      }

      return groups;
    },
    []
  );
}
