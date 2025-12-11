import groupMaterialsByCategory from "@/lib/material/group/groupMaterialsByCategory";
import MaterialInterface from "@/database/materials/MaterialInterface";
import useFuseMaterialSearch from "@/hooks/use-fuse-search/useFuseMaterialSearch";
import Database from "@/interfaces/Database";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import { useSearchParams } from "next/navigation";

/**
 * Configuration for a single filter category.
 * @template TKey The type of the keys in the database.
 */
type FilterCategoryConfig<TKey extends string> = {
  /** The name of the filter section. */
  sectionName: string;
  /** The URL parameter used for this filter. */
  urlParam: string;
  /** The available options for this filter. */
  options: FilterCategory["options"];
  /** The default value for the filter. */
  defaultValue?: string;
  /** A function to parse the value from the URL. */
  valueParser?: (value: string) => string;
  /** A function to determine if the filter should be applied. */
  shouldApply?: (value: string, defaultValue: string) => boolean;
  /** A function to apply the filter to the list of keys. */
  applyFilter?: (value: string, keys: TKey[]) => TKey[];
};

/**
 * Configuration for the archive filter.
 * @template TKey The type of the keys in the database.
 */
type ArchiveFilterConfig<TKey extends string> = {
  /** The name of the URL parameter for the archive filter. */
  paramName: string;
  /** Whether there are any archived materials in the database. */
  hasArchivedMaterials: boolean;
  /** A function to apply the archive filter to the list of keys. */
  applyFilter: (showArchived: boolean, keys: TKey[]) => TKey[];
  /** The default value for the archive filter. */
  defaultValue?: string;
  /** The value that indicates that archived materials should be shown. */
  enabledValue?: string;
  /** A function to parse the value from the URL. */
  valueParser?: (value: string) => string;
};

/**
 * Options for the `useMaterialFilterState` hook.
 * @template TKey The type of the keys in the database.
 * @template TMaterial The type of the material.
 */
type UseMaterialFilterStateOptions<
  TKey extends string,
  TMaterial extends MaterialInterface
> = {
  /** The database of materials. */
  databaseMap: Database<TMaterial>;
  /** The name of the search parameter in the URL. */
  searchParamName: string;
  /** The keys to use for searching. */
  searchKeys: string[];
  /** The configuration for the filter categories. */
  filterCategories: FilterCategoryConfig<TKey>[];
  /** The configuration for the archive filter. */
  archiveFilter?: ArchiveFilterConfig<TKey>;
};

/**
 * The state of the archive filter.
 */
type ArchiveFilterState = {
  /** The name of the URL parameter for the archive filter. */
  paramName: string;
  /** Whether archived materials are currently being shown. */
  showArchived: boolean;
  /** Whether there are any archived materials in the database. */
  hasArchivedMaterials: boolean;
};

/**
 * The state of a filter category.
 */
type FilterCategoryState = {
  /** The filter category configuration and state. */
  category: FilterCategory;
  /** The default value for the filter. */
  defaultValue: string;
};

/**
 * The result of the `useMaterialFilterState` hook.
 * @template TKey The type of the keys in the database.
 */
type UseMaterialFilterStateResult<TKey extends string> = {
  /** The current search term. */
  searchTerm: string;
  /** The keys of the materials after all filters have been applied. */
  filteredKeys: TKey[];
  /** The materials grouped by category after filtering. */
  groupedMaterials: MaterialGroupInterface[];
  /** The state of the filter categories. */
  filterCategories: FilterCategory[];
  /** The state of the archive filter. */
  archiveFilter?: ArchiveFilterState;
  /** Whether any filters are currently applied. */
  areFiltersApplied: boolean;
};

/**
 * Consolidates the filtering experience that powers every listing route (projects, roles, certificates, blogs).
 * The hook reconstructs state from the URL, feeds Fuse search, groups categories, and synchronizes the archive toggle so deep links and the drawer stay aligned.
 *
 * @template TKey The type of the keys in the database.
 * @template TMaterial The type of the material.
 * @param options Arguments that describe the page specific filters, searchable fields, and material map.
 * @returns Derived filter UI state plus the filtered key set that drives MaterialList.
 */
export default function useMaterialFilterState<
  TKey extends string,
  TMaterial extends MaterialInterface
>({
  databaseMap,
  searchParamName,
  searchKeys,
  filterCategories,
  archiveFilter,
}: UseMaterialFilterStateOptions<
  TKey,
  TMaterial
>): UseMaterialFilterStateResult<TKey> {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get(searchParamName) ?? "";

  let filteredKeys = useFuseMaterialSearch<TMaterial>(
    databaseMap,
    searchTerm,
    searchKeys
  ) as TKey[];

  const filterCategoryState: FilterCategoryState[] = filterCategories.map(
    (filterConfig) => {
      const defaultValueRaw = filterConfig.defaultValue ?? "all";
      const defaultValue = filterConfig.valueParser
        ? filterConfig.valueParser(defaultValueRaw)
        : defaultValueRaw;

      const selectedValueRaw =
        searchParams.get(filterConfig.urlParam) ?? defaultValueRaw;
      const selectedValue = filterConfig.valueParser
        ? filterConfig.valueParser(selectedValueRaw)
        : selectedValueRaw;

      const shouldApply =
        filterConfig.shouldApply?.(selectedValue, defaultValue) ??
        selectedValue !== defaultValue;

      if (shouldApply && filterConfig.applyFilter) {
        filteredKeys = filterConfig.applyFilter(selectedValue, filteredKeys);
      }

      return {
        category: {
          sectionName: filterConfig.sectionName,
          urlParam: filterConfig.urlParam,
          selectedValue,
          options: filterConfig.options,
        },
        defaultValue,
      };
    }
  );

  let archiveFilterState: ArchiveFilterState | undefined;
  let archiveFilterApplied = false;

  if (archiveFilter) {
    const truthyValue = archiveFilter.enabledValue ?? "true";
    const defaultValueRaw = archiveFilter.defaultValue ?? "false";
    const defaultValue = archiveFilter.valueParser
      ? archiveFilter.valueParser(defaultValueRaw)
      : defaultValueRaw;

    const selectedValueRaw =
      searchParams.get(archiveFilter.paramName) ?? defaultValueRaw;
    const selectedValue = archiveFilter.valueParser
      ? archiveFilter.valueParser(selectedValueRaw)
      : selectedValueRaw;

    const showArchived = selectedValue === truthyValue;
    const defaultShowArchived = defaultValue === truthyValue;

    archiveFilterApplied = showArchived !== defaultShowArchived;
    filteredKeys = archiveFilter.applyFilter(showArchived, filteredKeys);
    archiveFilterState = {
      paramName: archiveFilter.paramName,
      showArchived,
      hasArchivedMaterials: archiveFilter.hasArchivedMaterials,
    };
  }

  const groupedMaterials = groupMaterialsByCategory(filteredKeys, databaseMap);

  const areFiltersApplied =
    searchTerm.trim().length > 0 ||
    archiveFilterApplied ||
    filterCategoryState.some(
      ({ category, defaultValue }) => category.selectedValue !== defaultValue
    );

  return {
    searchTerm,
    filteredKeys,
    groupedMaterials,
    filterCategories: filterCategoryState.map(({ category }) => category),
    archiveFilter: archiveFilterState,
    areFiltersApplied,
  };
}
