import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function getMaterialSlugIdentifiers(
  materials: Database<MaterialInterface>
): string[] {
  // Initialize an empty array to hold the slug identifiers
  const slugIdentifiers: string[] = [];

  // Iterate over the materials database to extract the keys (slug identifiers)
  Object.keys(materials).forEach((key) => {
    slugIdentifiers.push(key);
  });

  return slugIdentifiers;
}
