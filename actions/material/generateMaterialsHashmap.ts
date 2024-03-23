import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function generateMaterialsHashmap<T extends MaterialInterface>(
  keys: string[],
  allMaterials: Database<T>
): Database<T> {
  // Initialize an empty hashmap for the filtered materials
  const filteredMaterials: Database<T> = {};

  // Iterate over the array of keys
  keys.forEach((key) => {
    const material = allMaterials[key];
    // Check if the material exists for the key
    if (material) {
      // Add the material to the filtered hashmap
      filteredMaterials[key] = material;
    }
  });

  return filteredMaterials;
}
