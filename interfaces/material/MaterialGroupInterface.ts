/**
 * Represents a group of material keys used by `MaterialGroupSectionList` so lists can be rendered by category or type without duplicating markup.
 * Keys align with folders under `public` that mirror route paths, keeping thumbnails and markdown discoverable from the group context.
 */
export default interface MaterialGroupInterface {
  /** Name of the grouping shown as a section title. */
  groupName: string;
  /** Keys that belong to this group, resolved lazily by the consuming component. */
  materialsKeys: string[];
}
