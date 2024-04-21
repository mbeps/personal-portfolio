import MaterialInterface from "@/database/Materials/MaterialInterface";

/**
 * Checks if there are any archived materials in the database.
 *
 * @param database Database of materials to check for archived materials
 * @returns Whether there are any archived materials in the database
 */
export default function checkForArchivedMaterials(
  database: Database<MaterialInterface>
): boolean {
  for (const key in database) {
    if (database[key].archived) {
      return true;
    }
  }
  return false;
}
