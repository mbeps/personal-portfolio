import FilterOption from "./FilterOption";

/**
 * Interface representing a category of filters.
 * This interface stores all the necessary metadata to display and manage a category of filters.
 * The fields are:
 * - `sectionName` which is the name of the section grouping the filter options.
 * - `urlParam` which is the url parameter which keeps track of the selected filter option.
 * - `selectedValue` which is the currently selected filter option.
 * - `options` which is a list of all options that can be selected.
 *
 * @requires {@link FilterOption} to represent the list of options that can be selected.
 */
export default interface FilterCategory {
  sectionName: string; // name of the section groping the filter options
  urlParam: string; // url parameter which keeps track of the selected filter option
  selectedValue: string; // currently selected filter option
  options: FilterOption[]; // list of all options that can be selected
}
