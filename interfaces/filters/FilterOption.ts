/**
 * Interface representing a single filter option.
 *
 * The fields are:
 * - `entryName`: the name of the filter option in a readable format
 * - `slug`: the unique identifier of the filter option used in the URL
 *
 * This is used to represent a single filter option that can be selected by the user.
 * For example, a filter option can be 'JavaScript' with a slug 'javascript'.
 * When a user selects this option, the URL will be updated with the slug 'javascript'.
 */
export default interface FilterOption {
  //TODO: change names to paramName and paramValue
  entryName: string;
  slug: string;
}
