/**
 * Captures the state of a text search so hooks can read the query from the URL and rehydrate components after navigation.
 */
export default interface SearchFilter {
  /** Term typed by the visitor or pulled from the command palette. */
  searchTerm: string;
  /** URL parameter used to persist the term between pages. */
  searchParamName: string;
}
