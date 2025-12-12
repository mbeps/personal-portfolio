import FilterOption from "./FilterOption";

/**
 * Describes a drawer section in the filter UI so the same configuration can drive MaterialList on every route.
 * Each category ties the label shown in the UI to the URL parameter that persists selection between pages.
 */
export default interface FilterCategory {
  /** Label shown above the group of options. */
  sectionName: string;
  /** URL parameter that stores the current selection for this group. */
  urlParam: string;
  /** Value currently selected, mirrored in the query string. */
  selectedValue: string;
  /** All selectable options for the section. */
  options: FilterOption[];
}
