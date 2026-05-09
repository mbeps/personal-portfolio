import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";
import { useMemo } from "react";
import groupSkills, { GroupByOptions } from "@/lib/skills/group/groupSkills";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";
import useFuseSkillSearch from "@/hooks/use-fuse-search/useFuseSkillSearch";

/**
 * Options for grouping skills in the filter UI.
 */
const groupOptions: FilterOption[] = [
  { slug: GroupByOptions.Category, entryName: "Category" },
  { slug: GroupByOptions.SkillType, entryName: "Skill Type" },
  { slug: GroupByOptions.Language, entryName: "Language" },
  { slug: "none", entryName: "None" },
];

/**
 * Generates binary filter options (e.g., show/hide).
 */
const booleanOptions = (
  showLabel: string,
  hideLabel: string,
): FilterOption[] => [
  { slug: "false", entryName: showLabel },
  { slug: "true", entryName: hideLabel },
];

/**
 * The properties of a skill to be included in the fuzzy search.
 */
const searchOptions: string[] = ["name", "category", "relatedSkills"];

/**
 * The state object returned by the `useSkillFilterState` hook.
 */
interface SkillFilterState {
  /** The current search term from the URL. */
  searchTerm: string;
  /** An array of filter category configurations for the UI. */
  filterCategories: FilterCategory[];
  /** The filtered and grouped skills to be displayed. */
  groupedSkills: CategorisedSkillsInterface[];
  /** A boolean indicating if any filters are currently active. */
  areFiltersApplied: boolean;
  /** A boolean indicating if skills without associated materials should be hidden. */
  hideSkillsWithoutMaterial: boolean;
  /** Direct setter for the search term. */
  setSearchTerm: (value: string) => void;
}

/**
 * Defines the filter configurations for different skill types.
 */
const skillTypeFilters = [
  {
    paramName: "hard" as const,
    label: "Hard Skills",
    type: SkillTypesEnum.Technology,
  },
  {
    paramName: "general" as const,
    label: "General Skills",
    type: SkillTypesEnum.Technical,
  },
];

/** URL parameter for hiding skills without materials. */
const noMaterialParamName = "no-material";
/** URL parameter for the grouping option. */
const groupParamName = "group";
/** URL parameter for the search term. */
const searchParamName = "search";

/**
 * Filter + search controller for the `/skills` page, mirroring `useMaterialFilterState` but optimized for the skill taxonomy.
 * Coordinates grouping, skill-type toggles, and the "hide skills without material" switch so SkillList stays declarative.
 * Uses nuqs for URL state management so filter state is read/written directly without manual URL construction.
 *
 * @param skills Full list of skill slugs from the static DB.
 * @returns Filter state consumed by `SkillList`.
 */
export default function useSkillFilterState(
  skills: SkillDatabaseKeys[],
): SkillFilterState {
  const [params, _setParams] = useQueryStates(
    {
      [searchParamName]: parseAsString.withDefault(""),
      [groupParamName]: parseAsString.withDefault(""),
      hard: parseAsBoolean.withDefault(false),
      general: parseAsBoolean.withDefault(false),
      [noMaterialParamName]: parseAsBoolean.withDefault(false),
    } as any,
    { history: "push", shallow: true, clearOnDefault: true },
  );
  const setParams = _setParams as (
    values: Partial<Record<string, string | boolean | null>>,
  ) => Promise<URLSearchParams>;

  const rawParams = params as Record<string, string | boolean>;
  const searchTerm = (rawParams[searchParamName] as string) ?? "";
  const selectedGroup = ((rawParams[groupParamName] as string) ||
    GroupByOptions.Category) as GroupByOptions;
  const hardExcluded = (rawParams["hard"] as boolean) ?? false;
  const generalExcluded = (rawParams["general"] as boolean) ?? false;
  const hideSkillsWithoutMaterial =
    (rawParams[noMaterialParamName] as boolean) ?? false;

  const filteredSkillIds: string[] = useFuseSkillSearch(
    skillDatabaseMap,
    searchTerm,
    searchOptions,
  );

  const filteredSkillIdSet = useMemo(
    () => new Set(filteredSkillIds),
    [filteredSkillIds],
  );

  const filteredSkills: SkillDatabaseKeys[] = useMemo(() => {
    return skills.filter((skillKey) => filteredSkillIdSet.has(skillKey));
  }, [skills, filteredSkillIdSet]);

  const excludedSkillTypes: SkillTypesEnum[] = [];
  if (hardExcluded) excludedSkillTypes.push(SkillTypesEnum.Technology);
  if (generalExcluded) excludedSkillTypes.push(SkillTypesEnum.Technical);

  const groupedSkills = groupSkills(
    selectedGroup,
    filteredSkills,
    skillDatabaseMap,
    excludedSkillTypes.length ? excludedSkillTypes : undefined,
  );

  const skillTypeCategoryFilters: FilterCategory[] = skillTypeFilters.map(
    ({ paramName, label }) => {
      const isExcluded = paramName === "hard" ? hardExcluded : generalExcluded;
      return {
        sectionName: label,
        urlParam: paramName,
        selectedValue: isExcluded ? "true" : "false",
        options: booleanOptions(`Show ${label}`, `Hide ${label}`),
        onChange: (value: string) =>
          setParams({ [paramName]: value === "true" || null }),
      };
    },
  );

  const filterCategories: FilterCategory[] = [
    {
      sectionName: "Group By",
      urlParam: groupParamName,
      selectedValue: selectedGroup,
      options: groupOptions,
      onChange: (value: string) =>
        setParams({ [groupParamName]: value || null }),
    },
    ...skillTypeCategoryFilters,
    {
      sectionName: "Skills Without Material",
      urlParam: noMaterialParamName,
      selectedValue: hideSkillsWithoutMaterial ? "true" : "false",
      options: booleanOptions(
        "Show skills without material",
        "Hide skills without material",
      ),
      onChange: (value: string) =>
        setParams({ [noMaterialParamName]: value === "true" || null }),
    },
  ];

  const areFiltersApplied =
    hideSkillsWithoutMaterial ||
    hardExcluded ||
    generalExcluded ||
    selectedGroup !== GroupByOptions.Category ||
    searchTerm.trim().length > 0;

  return {
    searchTerm,
    filterCategories,
    groupedSkills,
    areFiltersApplied,
    hideSkillsWithoutMaterial,
    setSearchTerm: (value: string) =>
      setParams({ [searchParamName]: value || null }),
  };
}
