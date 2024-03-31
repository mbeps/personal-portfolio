import FilterOption from "./FilterOption";

/**
 * Interface representing a category of filters.
 * This interface stores all the necessary metadata to display and manage a category of filters.
 *
 * The fields are:
 * - `sectionName`: the name of the section grouping the filter options
 * - `urlParam`: the URL parameter which keeps track of the selected filter option
 * - `selectedValue`: the currently selected filter option
 * - `options`: a list of all options that can be selected
 *
 * This is used to group filter options together for display in the filter section.
 * For example, there can be a filter called 'Programming Languages' which contains options such as 'JavaScript' with a URL parameter 'javascript'.
 * The URL parameter that is keeping track of the currently selected language could be 'selectedLanguage'.
 * The selected value would be 'javascript' if the user has selected JavaScript.
 *
 * @requires {@link FilterOption} to represent the list of options that can be selected.
 */
export default interface FilterCategory {
  sectionName: string;
  urlParam: string;
  selectedValue: string;
  options: FilterOption[];
}
