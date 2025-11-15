import MaterialInterface from "@/database/Materials/MaterialInterface";
import Database from "@/interfaces/Database";

/**
 * Checks if a database of materials contains any archived items.
 * Iterates through the materials and returns true if at least one is marked as archived.
 *
 * @param database The database of materials to check.
 * @returns `true` if any material is archived, otherwise `false`.
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
