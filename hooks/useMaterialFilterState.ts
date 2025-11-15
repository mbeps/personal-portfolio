import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import useFuseMaterialSearch from "@/hooks/useFuseSearch/useFuseMaterialSearch";
import Database from "@/interfaces/Database";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import { useSearchParams } from "next/navigation";

type FilterCategoryConfig<TKey extends string> = {
  sectionName: string;
  urlParam: string;
  options: FilterCategory["options"];
  defaultValue?: string;
  valueParser?: (value: string) => string;
  shouldApply?: (value: string, defaultValue: string) => boolean;
  applyFilter?: (value: string, keys: TKey[]) => TKey[];
};

type ArchiveFilterConfig<TKey extends string> = {
  paramName: string;
  hasArchivedMaterials: boolean;
  applyFilter: (showArchived: boolean, keys: TKey[]) => TKey[];
  defaultValue?: string;
  enabledValue?: string;
  valueParser?: (value: string) => string;
};

type UseMaterialFilterStateOptions<
  TKey extends string,
  TMaterial extends MaterialInterface
> = {
  databaseMap: Database<TMaterial>;
  searchParamName: string;
  searchKeys: string[];
  filterCategories: FilterCategoryConfig<TKey>[];
  archiveFilter?: ArchiveFilterConfig<TKey>;
};

type ArchiveFilterState = {
  paramName: string;
  showArchived: boolean;
  hasArchivedMaterials: boolean;
};

type FilterCategoryState = {
  category: FilterCategory;
  defaultValue: string;
};

type UseMaterialFilterStateResult<TKey extends string> = {
  searchTerm: string;
  filteredKeys: TKey[];
  groupedMaterials: MaterialGroupInterface[];
  filterCategories: FilterCategory[];
  archiveFilter?: ArchiveFilterState;
  areFiltersApplied: boolean;
};

/**
 * Shared hook used by the material listing pages to build the filter metadata
 * and apply all the filtering logic consistently.
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
