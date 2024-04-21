/**
 * Interface for the archive filter.
 * This includes:
 * - `paramName`: the name of the URL parameter which tracks the archive filter
 * - `showArchived`: a boolean indicating whether to show archived materials
 * - `hasArchivedMaterials`: a boolean indicating whether there are archived materials
 */
export default interface ArchiveFilter {
  paramName: string;
  showArchived: boolean;
  hasArchivedMaterials: boolean;
}
