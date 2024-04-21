/**
 * Interface for search filter options.
 * This includes the:
 * - `searchTerm`: the search term entered by the user
 * - `searchParamName`: the name of the URL parameter which tracks the search filter
 */
export default interface SearchFilter {
  searchTerm: string;
  searchParamName: string;
}
