import MaterialGroupInterface from "./MaterialGroupInterface";

/**
 * Props contract for list components that render groups of materials, keeping the grouped data shape consistent across pages.
 */
export default interface MaterialGroupListInterface {
  /** Collection of grouped material keys ready for display. */
  groupedMaterial: MaterialGroupInterface[];
}
