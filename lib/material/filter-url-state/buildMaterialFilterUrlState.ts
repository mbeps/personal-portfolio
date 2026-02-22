import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import SearchFilter from "@/interfaces/filters/SearchFilter";

export function buildCurrentFilterOptions(
  filterCategories: FilterCategory[],
  searchFilter?: SearchFilter,
  archiveFilter?: ArchiveFilter,
): FilterOption[] {
  const options: FilterOption[] = filterCategories.map(
    (category): FilterOption => ({
      entryName: category.urlParam,
      slug: category.selectedValue,
    }),
  );

  if (searchFilter) {
    options.push({
      entryName: searchFilter.searchParamName,
      slug: searchFilter.searchTerm,
    });
  }

  if (archiveFilter) {
    options.push({
      entryName: archiveFilter.paramName,
      slug: archiveFilter.showArchived.toString(),
    });
  }

  return options;
}

export function upsertFilterOption(
  options: FilterOption[],
  entryName: string,
  slug: string,
): FilterOption[] {
  return options.map((option) =>
    option.entryName === entryName ? { ...option, slug } : option,
  );
}

export function withForcedArchiveTrue(
  options: FilterOption[],
  archiveFilter?: ArchiveFilter,
): FilterOption[] {
  if (!archiveFilter) {
    return options;
  }

  return [
    ...options,
    {
      entryName: archiveFilter.paramName,
      slug: true.toString(),
    },
  ];
}

export function withToggledArchive(
  options: FilterOption[],
  archiveParamName: string,
  currentShowArchived: boolean,
): FilterOption[] {
  return [
    ...options,
    {
      entryName: archiveParamName,
      slug: (!currentShowArchived).toString(),
    },
  ];
}
