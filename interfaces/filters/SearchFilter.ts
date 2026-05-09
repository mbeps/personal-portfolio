/**
 * Captures the state of a text search so hooks can read the query from the URL and rehydrate components after navigation.
 */
export default interface SearchFilter {
  /** Term typed by the visitor or pulled from the command palette. */
  searchTerm: string;
  /** Direct setter that updates the search term via nuqs. */
  onChange: (value: string) => void;
}
