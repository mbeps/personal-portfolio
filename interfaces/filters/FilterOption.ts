/**
 * Interface representing a single filter option.
 * This interface contains the field:
 * - `entryName` which is the name of the filter option in a readable format.
 * - `slug` which is the unique identifier of the filter option used in the URL.
 */
export default interface FilterOption {
  entryName: string;
  slug: string;
}
