/**
 * Shape used to manage the archive toggle so list views know when to surface historical items.
 */
export default interface ArchiveFilter {
  /** URL parameter that stores the archive selection. */
  paramName: string;
  /** Whether archived items are currently visible. */
  showArchived: boolean;
  /** Indicates that the dataset actually contains archived content and the toggle should be rendered. */
  hasArchivedMaterials: boolean;
}
