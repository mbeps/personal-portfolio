import groupSkills, { GroupByOptions } from "@/lib/skills/group/groupSkills";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";
import useFuseSkillSearch from "@/hooks/use-fuse-search/useFuseSkillSearch";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useMemo } from "react";

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
 * @param showLabel The label for the "show" option.
 * @param hideLabel The label for the "hide" option.
 * @returns An array of two filter options.
 */
const booleanOptions = (
  showLabel: string,
  hideLabel: string
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
  /** The URL parameter name for the search term. */
  searchParamName: string;
  /** An array of filter category configurations for the UI. */
  filterCategories: FilterCategory[];
  /** The filtered and grouped skills to be displayed. */
  groupedSkills: CategorisedSkillsInterface[];
  /** A boolean indicating if any filters are currently active. */
  areFiltersApplied: boolean;
  /** A boolean indicating if skills without associated materials should be hidden. */
  hideSkillsWithoutMaterial: boolean;
}

/**
 * Defines the filter configurations for different skill types.
 */
const skillTypeFilters = [
  {
    paramName: "hard",
    label: "Hard Skills",
    type: SkillTypesEnum.Technology,
  },
  {
    paramName: "general",
    label: "General Skills",
    type: SkillTypesEnum.Technical,
  },
  {
    paramName: "soft",
    label: "Soft Skills",
    type: SkillTypesEnum.Soft,
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
 * Coordinates grouping, skill-type toggles, and the “hide skills without material” switch so SkillList stays declarative.
 *
 * @param skills Full list of skill slugs from the static DB.
 * @returns Filter state consumed by `SkillList`.
 */
export default function useSkillFilterState(
  skills: SkillDatabaseKeys[]
): SkillFilterState {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const searchTerm: string = searchParams.get(searchParamName) ?? "";

  const selectedGroup =
    (searchParams.get(groupParamName) as GroupByOptions) ??
    GroupByOptions.Category;

  const filteredSkillIds: string[] = useFuseSkillSearch(
    skillDatabaseMap,
    searchTerm,
    searchOptions
  );

  const filteredSkills: SkillDatabaseKeys[] = useMemo(() => {
    return skills.filter((skillKey) => filteredSkillIds.includes(skillKey));
  }, [skills, filteredSkillIds]);

  const excludedSkillTypes: SkillTypesEnum[] = [];

  const skillTypeCategoryFilters: FilterCategory[] = skillTypeFilters.map(
    ({ paramName, label, type }) => {
      const isExcluded =
        (searchParams.get(paramName) ?? "false").toLowerCase() === "true";

      if (isExcluded) {
        excludedSkillTypes.push(type);
      }

      return {
        sectionName: label,
        urlParam: paramName,
        selectedValue: isExcluded ? "true" : "false",
        options: booleanOptions(`Show ${label}`, `Hide ${label}`),
      };
    }
  );

  const hideSkillsWithoutMaterial =
    (searchParams.get(noMaterialParamName) ?? "false") === "true";

  const groupedSkills = groupSkills(
    selectedGroup as GroupByOptions,
    filteredSkills,
    skillDatabaseMap,
    excludedSkillTypes.length ? excludedSkillTypes : undefined
  );

  const filterCategories: FilterCategory[] = [
    {
      sectionName: "Group By",
      urlParam: groupParamName,
      selectedValue: selectedGroup,
      options: groupOptions,
    },
    ...skillTypeCategoryFilters,
    {
      sectionName: "Skills Without Material",
      urlParam: noMaterialParamName,
      selectedValue: hideSkillsWithoutMaterial ? "true" : "false",
      options: booleanOptions(
        "Show skills without material",
        "Hide skills without material"
      ),
    },
  ];

  const areFiltersApplied =
    hideSkillsWithoutMaterial ||
    skillTypeCategoryFilters.some(
      (category) => category.selectedValue !== "false"
    ) ||
    selectedGroup !== GroupByOptions.Category ||
    searchTerm.trim().length > 0;

  return {
    searchTerm,
    searchParamName,
    filterCategories,
    groupedSkills,
    areFiltersApplied,
    hideSkillsWithoutMaterial,
  };
}
