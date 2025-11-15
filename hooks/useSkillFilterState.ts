import groupSkills, {
  GroupByOptions,
} from "@/actions/skills/group/groupSkills";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import useFuseSkillSearch from "@/hooks/useFuseSearch/useFuseSkillSearch";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const groupOptions: FilterOption[] = [
  { slug: GroupByOptions.Category, entryName: "Category" },
  { slug: GroupByOptions.SkillType, entryName: "Skill Type" },
  { slug: GroupByOptions.Language, entryName: "Language" },
  { slug: "none", entryName: "None" },
];

const booleanOptions = (showLabel: string, hideLabel: string): FilterOption[] => [
  { slug: "false", entryName: showLabel },
  { slug: "true", entryName: hideLabel },
];

const searchOptions: string[] = ["name", "category", "relatedSkills"];

interface SkillFilterState {
  searchTerm: string;
  searchParamName: string;
  filterCategories: FilterCategory[];
  groupedSkills: SkillsCategoryInterface[];
  areFiltersApplied: boolean;
  hideSkillsWithoutMaterial: boolean;
}

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

const noMaterialParamName = "no-material";
const groupParamName = "group";
const searchParamName = "search";

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
    skillTypeCategoryFilters.some((category) => category.selectedValue !== "false") ||
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
