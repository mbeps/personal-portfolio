import { describe, expect, test } from "vitest";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import SearchFilter from "@/interfaces/filters/SearchFilter";
import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import FilterOption from "@/interfaces/filters/FilterOption";
import {
  buildCurrentFilterOptions,
  upsertFilterOption,
  withForcedArchiveTrue,
  withToggledArchive,
} from "@/lib/material/filter-url-state/buildMaterialFilterUrlState";

describe("buildMaterialFilterUrlState", () => {
  const filterCategories: FilterCategory[] = [
    {
      sectionName: "Category",
      urlParam: "category",
      selectedValue: "all",
      options: [
        { entryName: "All", slug: "all" },
        { entryName: "Academic", slug: "academic" },
      ],
    },
    {
      sectionName: "Skill",
      urlParam: "skill",
      selectedValue: "react",
      options: [
        { entryName: "All", slug: "all" },
        { entryName: "React", slug: "react" },
      ],
    },
  ];

  const searchFilter: SearchFilter = {
    searchParamName: "search",
    searchTerm: "portfolio",
  };

  const archiveFilter: ArchiveFilter = {
    paramName: "archived",
    showArchived: false,
    hasArchivedMaterials: true,
  };

  test("buildCurrentFilterOptions includes category, search, and archive entries", () => {
    expect(
      buildCurrentFilterOptions(filterCategories, searchFilter, archiveFilter),
    ).toEqual([
      { entryName: "category", slug: "all" },
      { entryName: "skill", slug: "react" },
      { entryName: "search", slug: "portfolio" },
      { entryName: "archived", slug: "false" },
    ]);
  });

  test("withForcedArchiveTrue appends archive=true while preserving existing options", () => {
    const options: FilterOption[] = [
      { entryName: "category", slug: "all" },
      { entryName: "archived", slug: "false" },
    ];

    expect(withForcedArchiveTrue(options, archiveFilter)).toEqual([
      { entryName: "category", slug: "all" },
      { entryName: "archived", slug: "false" },
      { entryName: "archived", slug: "true" },
    ]);
  });

  test("withToggledArchive flips archive boolean value", () => {
    const options: FilterOption[] = [{ entryName: "search", slug: "api" }];

    expect(withToggledArchive(options, "archived", false)).toEqual([
      { entryName: "search", slug: "api" },
      { entryName: "archived", slug: "true" },
    ]);

    expect(withToggledArchive(options, "archived", true)).toEqual([
      { entryName: "search", slug: "api" },
      { entryName: "archived", slug: "false" },
    ]);
  });

  test("upsertFilterOption updates only the targeted entry", () => {
    const options: FilterOption[] = [
      { entryName: "search", slug: "old" },
      { entryName: "category", slug: "all" },
      { entryName: "archived", slug: "false" },
    ];

    expect(upsertFilterOption(options, "search", "new")).toEqual([
      { entryName: "search", slug: "new" },
      { entryName: "category", slug: "all" },
      { entryName: "archived", slug: "false" },
    ]);
  });

  test("withForcedArchiveTrue returns options unchanged when archiveFilter is undefined", () => {
    const options: FilterOption[] = [
      { entryName: "category", slug: "all" },
      { entryName: "search", slug: "query" },
    ];

    expect(withForcedArchiveTrue(options, undefined)).toEqual([
      { entryName: "category", slug: "all" },
      { entryName: "search", slug: "query" },
    ]);
  });

  test("buildCurrentFilterOptions omits search entry when searchFilter is undefined", () => {
    expect(
      buildCurrentFilterOptions(filterCategories, undefined, archiveFilter),
    ).toEqual([
      { entryName: "category", slug: "all" },
      { entryName: "skill", slug: "react" },
      { entryName: "archived", slug: "false" },
    ]);
  });

  test("buildCurrentFilterOptions omits archive entry when archiveFilter is undefined", () => {
    expect(
      buildCurrentFilterOptions(filterCategories, searchFilter, undefined),
    ).toEqual([
      { entryName: "category", slug: "all" },
      { entryName: "skill", slug: "react" },
      { entryName: "search", slug: "portfolio" },
    ]);
  });

  test("buildCurrentFilterOptions works with only filterCategories", () => {
    expect(buildCurrentFilterOptions(filterCategories)).toEqual([
      { entryName: "category", slug: "all" },
      { entryName: "skill", slug: "react" },
    ]);
  });
});
