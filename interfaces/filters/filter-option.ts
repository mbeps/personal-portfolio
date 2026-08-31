/**
 * Represents a selectable filter option whose slug is pushed into the URL so drawers, links, and the command palette share state.
 */
export default interface FilterOption {
  /** Readable name shown in the filter drawer. */
  entryName: string;
  /** Slug synced with the URL param and used to resolve assets or database keys. */
  slug: string;
}
