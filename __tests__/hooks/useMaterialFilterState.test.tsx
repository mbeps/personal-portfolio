import MaterialInterface from "@/database/materials/MaterialInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import useMaterialFilterState from "@/hooks/useMaterialFilterState";
import Database from "@/interfaces/Database";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/lib/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/lib/material/filter/filterMaterialBySkill";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";

const { mockUseSearchParams } = vi.hoisted(() => ({
  mockUseSearchParams: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useSearchParams: mockUseSearchParams,
}));

type TestMaterial = MaterialInterface;

interface HookResult {
  searchTerm: string;
  filteredKeys: string[];
  groupedMaterials: MaterialGroupInterface[];
  filterCategories: FilterCategory[];
  archiveFilter?: {
    paramName: string;
    showArchived: boolean;
    hasArchivedMaterials: boolean;
  };
  areFiltersApplied: boolean;
}

interface HarnessProps {
  itemsMap: Database<TestMaterial>;
  onResult: (result: HookResult) => void;
}

function HookHarness({ itemsMap, onResult }: HarnessProps) {
  const result = useMaterialFilterState({
    databaseMap: itemsMap,
    searchParamName: "search",
    searchKeys: ["name", "category", "skills"],
    filterCategories: [
      {
        sectionName: "Category",
        urlParam: "category",
        options: [
          { slug: "all", entryName: "All" },
          { slug: "web", entryName: "Web" },
          { slug: "ai", entryName: "AI" },
        ],
        defaultValue: "all",
        applyFilter: (value, keys) =>
          filterMaterialByCategory(value, keys, itemsMap),
      },
      {
        sectionName: "Skill",
        urlParam: "skill",
        options: [
          { slug: "all", entryName: "All" },
          { slug: SkillDatabaseKeys.ReactJs, entryName: "React" },
          { slug: SkillDatabaseKeys.TypeScript, entryName: "TypeScript" },
        ],
        defaultValue: "all",
        applyFilter: (value, keys) =>
          filterMaterialBySkill(value as SkillDatabaseKeys, keys, itemsMap),
      },
    ],
    archiveFilter: {
      paramName: "archived",
      hasArchivedMaterials: true,
      applyFilter: (showArchived, keys) =>
        filterMaterialByArchivedStatus(showArchived, keys, itemsMap),
    },
  });

  onResult(result);
  return <div>{result.filteredKeys.join(",")}</div>;
}

function runHook(itemsMap: Database<TestMaterial>): HookResult {
  let result: HookResult = {
    searchTerm: "",
    filteredKeys: [],
    groupedMaterials: [],
    filterCategories: [],
    areFiltersApplied: false,
  };

  renderToStaticMarkup(
    <HookHarness
      itemsMap={itemsMap}
      onResult={(value) => {
        result = value;
      }}
    />,
  );

  return result;
}

function material(
  name: string,
  category: string,
  skills: SkillDatabaseKeys[],
  archived?: boolean,
): TestMaterial {
  return {
    name,
    category,
    skills,
    archived,
  };
}

describe("useMaterialFilterState", () => {
  beforeEach(() => {
    mockUseSearchParams.mockReset();
    mockUseSearchParams.mockReturnValue(new URLSearchParams(""));
  });

  test("applies category and skill filters sequentially and groups filtered materials", () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams("category=web&skill=react&archived=false"),
    );

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "Web", [SkillDatabaseKeys.TypeScript], true),
      gamma: material("Gamma", "AI", [SkillDatabaseKeys.Python]),
    };

    const result = runHook(itemsMap);

    expect(result.filteredKeys).toEqual(["alpha"]);
    expect(result.groupedMaterials).toEqual([
      {
        groupName: "Web",
        materialsKeys: ["alpha"],
      },
    ]);
    expect(
      result.filterCategories.map((category) => category.selectedValue),
    ).toEqual(["web", SkillDatabaseKeys.ReactJs]);
    expect(result.archiveFilter).toEqual({
      paramName: "archived",
      showArchived: false,
      hasArchivedMaterials: true,
    });
    expect(result.areFiltersApplied).toBe(true);
  });

  test("reads archive state from configured custom param contract", () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams("include-archive=YES"),
    );

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "Web", [SkillDatabaseKeys.TypeScript], true),
    };

    let captured: HookResult | undefined;

    function CustomArchiveHarness() {
      const result = useMaterialFilterState({
        databaseMap: itemsMap,
        searchParamName: "search",
        searchKeys: ["name", "category", "skills"],
        filterCategories: [],
        archiveFilter: {
          paramName: "include-archive",
          hasArchivedMaterials: true,
          defaultValue: "NO",
          enabledValue: "yes",
          valueParser: (value) => value.toLowerCase(),
          applyFilter: (showArchived, keys) =>
            filterMaterialByArchivedStatus(showArchived, keys, itemsMap),
        },
      });

      captured = result;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<CustomArchiveHarness />);

    expect(captured?.archiveFilter).toEqual({
      paramName: "include-archive",
      showArchived: true,
      hasArchivedMaterials: true,
    });
    expect(captured?.filteredKeys).toEqual(["alpha", "beta"]);
    expect(captured?.areFiltersApplied).toBe(true);
  });

  test("reports no active filters when URL matches defaults", () => {
    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "AI", [SkillDatabaseKeys.Python]),
    };

    const result = runHook(itemsMap);

    expect(result.searchTerm).toBe("");
    expect(result.areFiltersApplied).toBe(false);
    expect(result.filteredKeys).toEqual(["alpha", "beta"]);
  });

  test("applies custom shouldApply predicate when provided", () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams("category=special"),
    );

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Special", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "Web", [SkillDatabaseKeys.TypeScript]),
    };

    let captured: HookResult | undefined;

    function CustomShouldApplyHarness() {
      const result = useMaterialFilterState({
        databaseMap: itemsMap,
        searchParamName: "search",
        searchKeys: ["name"],
        filterCategories: [
          {
            sectionName: "Category",
            urlParam: "category",
            options: [
              { slug: "all", entryName: "All" },
              { slug: "special", entryName: "Special" },
            ],
            defaultValue: "all",
            // Custom logic: only filter when value is exactly "special"
            shouldApply: (value, defaultValue) => value === "special",
            applyFilter: (value, keys) =>
              filterMaterialByCategory(value, keys, itemsMap),
          },
        ],
      });

      captured = result;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<CustomShouldApplyHarness />);

    expect(captured?.filteredKeys).toEqual(["alpha"]);
    expect(captured?.areFiltersApplied).toBe(true);
  });

  test("applies default archive value when valueParser exists but defaultValue is not provided", () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams(""));

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "Web", [SkillDatabaseKeys.TypeScript], true),
    };

    let captured: HookResult | undefined;

    function ArchiveWithParserNoDefaultHarness() {
      const result = useMaterialFilterState({
        databaseMap: itemsMap,
        searchParamName: "search",
        searchKeys: ["name"],
        filterCategories: [],
        archiveFilter: {
          paramName: "archived",
          hasArchivedMaterials: true,
          // No defaultValue provided, should fall back to "false"
          valueParser: (value) => value.toLowerCase(),
          applyFilter: (showArchived, keys) =>
            filterMaterialByArchivedStatus(showArchived, keys, itemsMap),
        },
      });

      captured = result;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<ArchiveWithParserNoDefaultHarness />);

    expect(captured?.archiveFilter?.showArchived).toBe(false);
    expect(captured?.filteredKeys).toEqual(["alpha"]);
  });

  test("uses 'all' as default when defaultValue is not provided", () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams(""));

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
    };

    let captured: HookResult | undefined;

    function NoDefaultValueHarness() {
      const result = useMaterialFilterState({
        databaseMap: itemsMap,
        searchParamName: "search",
        searchKeys: ["name"],
        filterCategories: [
          {
            sectionName: "Category",
            urlParam: "category",
            options: [
              { slug: "all", entryName: "All" },
              { slug: "web", entryName: "Web" },
            ],
            // defaultValue is NOT provided - should fall back to "all"
            applyFilter: (value, keys) =>
              filterMaterialByCategory(value, keys, itemsMap),
          },
        ],
      });

      captured = result;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<NoDefaultValueHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("all");
  });

  test("uses raw default value when no valueParser is provided", () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams(""));

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
    };

    let captured: HookResult | undefined;

    function NoValueParserHarness() {
      const result = useMaterialFilterState({
        databaseMap: itemsMap,
        searchParamName: "search",
        searchKeys: ["name"],
        filterCategories: [
          {
            sectionName: "Category",
            urlParam: "category",
            options: [
              { slug: "all", entryName: "All" },
              { slug: "web", entryName: "Web" },
            ],
            defaultValue: "all",
            // No valueParser provided
            applyFilter: (value, keys) =>
              filterMaterialByCategory(value, keys, itemsMap),
          },
        ],
      });

      captured = result;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<NoValueParserHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("all");
  });

  test("uses raw selected value from URL when no valueParser is provided", () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams("category=web"));

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "AI", [SkillDatabaseKeys.Python]),
    };

    let captured: HookResult | undefined;

    function NoValueParserWithUrlParamHarness() {
      const result = useMaterialFilterState({
        databaseMap: itemsMap,
        searchParamName: "search",
        searchKeys: ["name"],
        filterCategories: [
          {
            sectionName: "Category",
            urlParam: "category",
            options: [
              { slug: "all", entryName: "All" },
              { slug: "web", entryName: "Web" },
            ],
            defaultValue: "all",
            // No valueParser provided
            applyFilter: (value, keys) =>
              filterMaterialByCategory(value, keys, itemsMap),
          },
        ],
      });

      captured = result;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<NoValueParserWithUrlParamHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("web");
    expect(captured?.filteredKeys).toEqual(["alpha"]);
  });

  test("parses default value with valueParser when provided", () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams(""));

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
    };

    let captured: HookResult | undefined;

    function ValueParserForDefaultHarness() {
      const result = useMaterialFilterState({
        databaseMap: itemsMap,
        searchParamName: "search",
        searchKeys: ["name"],
        filterCategories: [
          {
            sectionName: "Category",
            urlParam: "category",
            options: [
              { slug: "all", entryName: "All" },
              { slug: "web", entryName: "Web" },
            ],
            defaultValue: "ALL", // Uppercase default
            valueParser: (value) => value.toLowerCase(), // Parser converts to lowercase
            applyFilter: (value, keys) =>
              filterMaterialByCategory(value, keys, itemsMap),
          },
        ],
      });

      captured = result;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<ValueParserForDefaultHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("all"); // Should be lowercase
  });

  test("parses selected value from URL with valueParser when provided", () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams("category=WEB"));

    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "AI", [SkillDatabaseKeys.Python]),
    };

    let captured: HookResult | undefined;

    function ValueParserForSelectedHarness() {
      const result = useMaterialFilterState({
        databaseMap: itemsMap,
        searchParamName: "search",
        searchKeys: ["name"],
        filterCategories: [
          {
            sectionName: "Category",
            urlParam: "category",
            options: [
              { slug: "all", entryName: "All" },
              { slug: "web", entryName: "Web" },
            ],
            defaultValue: "all",
            valueParser: (value) => value.toLowerCase(), // Parser converts to lowercase
            applyFilter: (value, keys) =>
              filterMaterialByCategory(value, keys, itemsMap),
          },
        ],
      });

      captured = result;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<ValueParserForSelectedHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("web"); // Should be lowercase
    expect(captured?.filteredKeys).toEqual(["alpha"]);
  });
});
