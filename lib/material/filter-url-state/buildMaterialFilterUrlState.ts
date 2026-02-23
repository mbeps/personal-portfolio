import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import SearchFilter from "@/interfaces/filters/SearchFilter";

/**
 * Assembles the current `FilterOption[]` snapshot from active filter categories, search, and archive state.
 * This snapshot is the source of truth passed to `generateUrl` before any URL is pushed to the router.
 * Call this once per render in filter UI components to obtain the baseline options array.
 *
 * @param filterCategories - Active filter category definitions from the listing hook.
 * @param searchFilter - Optional search state; appends a search param entry when provided.
 * @param archiveFilter - Optional archive metadata; appends the archive param entry when provided.
 * @returns Flat `FilterOption[]` representing the current filter/search/archive state.
 * @author Maruf Bepary
 */
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

/**
 * Immutably replaces a single entry in a `FilterOption[]` array by matching `entryName`.
 * Used whenever a single filter category or search value changes without touching the rest of the state.
 * Entries whose `entryName` does not match are passed through unchanged.
 *
 * @param options - Existing options array to update.
 * @param entryName - The `entryName` of the option to replace.
 * @param slug - The new slug value to assign to the matched entry.
 * @returns A new array with the matching entry updated and all others preserved.
 * @author Maruf Bepary
 */
export function upsertFilterOption(
  options: FilterOption[],
  entryName: string,
  slug: string,
): FilterOption[] {
  return options.map((option) =>
    option.entryName === entryName ? { ...option, slug } : option,
  );
}

/**
 * Appends an `archive=true` entry to an options array so that changing a filter or search term always exposes archived items.
 * This ensures users never accidentally hide archived items when they refine their search.
 * If no `archiveFilter` is provided the options array is returned unchanged.
 *
 * @param options - Current options array to extend.
 * @param archiveFilter - Optional archive metadata; when absent the function is a no-op.
 * @returns A new options array with the archive param forced to `"true"`, or the original array if archive is not configured.
 * @author Maruf Bepary
 */
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

/**
 * Appends a toggled archive param entry to an options array, flipping the current visibility state.
 * Used exclusively by `ArchiveToggle` to build the URL for the toggle button's href.
 * The new entry is appended rather than upserted, so `generateUrl` will use the last value for the param.
 *
 * @param options - Baseline options array (typically from `buildCurrentFilterOptions`).
 * @param archiveParamName - The URL param name for the archive flag (from `archiveFilter.paramName`).
 * @param currentShowArchived - The current archive visibility boolean to flip.
 * @returns A new options array with the archive param set to the opposite of `currentShowArchived`.
 * @author Maruf Bepary
 */
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
