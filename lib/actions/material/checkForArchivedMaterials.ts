import MaterialInterface from "@/database/materials/MaterialInterface";
import Database from "@/interfaces/Database";

/**
 * Determines whether the archive toggle should even be shown for a dataset.
 * Saves each listing from rendering an unnecessary toggle when everything is already active.
 *
 * @param database Material dictionary to inspect.
 * @returns `true` if at least one entry has `archived` set to `true`.
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
