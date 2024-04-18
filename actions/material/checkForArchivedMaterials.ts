import MaterialInterface from "@/interfaces/material/MaterialInterface";

//TODO: Add documentation
export default function checkForArchivedMaterials(
  database: Database<MaterialInterface>
): boolean {
  // Loop through each material in the database
  for (const key in database) {
    if (database[key].archived) {
      // If an archived material is found, return true
      return true;
    }
  }
  // If no archived material is found after checking all, return false
  return false;
}
