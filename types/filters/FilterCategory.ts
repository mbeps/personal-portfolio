import FilterOption from "./FilterOption";

export default interface FilterCategory {
  sectionName: string;
  urlParam: string;
  selectedValue: string;
  options: FilterOption[];
}
