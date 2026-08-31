/**
 * Shape used to manage the archive toggle so list views know when to surface historical items.
 */
export default interface ArchiveFilter {
  /** Whether archived items are currently visible. */
  showArchived: boolean;
  /** Indicates that the dataset actually contains archived content and the toggle should be rendered. */
  hasArchivedMaterials: boolean;
  /** Direct setter that flips the archive state via nuqs. Available when the hook uses nuqs. */
  onToggle: () => void;
}
