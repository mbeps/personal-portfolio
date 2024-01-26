import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function groupMaterialsByCategory<T extends MaterialInterface>(
  materials: T[],
): Record<string, T[]> {
  return materials.reduce<Record<string, T[]>>((grouped, material) => {
    (grouped[material.category] = grouped[material.category] || []).push(
      material,
    );
    return grouped;
  }, {});
}
