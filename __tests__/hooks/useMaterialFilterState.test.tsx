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

const { mockUseQueryStates } = vi.hoisted(() => ({
  mockUseQueryStates: vi.fn(),
}));

vi.mock("nuqs", () => ({
  useQueryStates: mockUseQueryStates,
  parseAsString: { withDefault: (d: string) => d },
  parseAsBoolean: { withDefault: (d: boolean) => d },
}));

type TestMaterial = MaterialInterface;

interface HookResult {
  searchTerm: string;
  filteredKeys: string[];
  groupedMaterials: MaterialGroupInterface[];
  filterCategories: FilterCategory[];
  archiveFilter?: {
    showArchived: boolean;
    hasArchivedMaterials: boolean;
    onToggle: () => void;
  };
  areFiltersApplied: boolean;
  setSearchTerm: (value: string) => void;
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
    setSearchTerm: vi.fn(),
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
    mockUseQueryStates.mockReset();
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "", skill: "", archived: false },
      vi.fn(),
    ]);
  });

  test("applies category and skill filters sequentially and groups filtered materials", () => {
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "web", skill: "react", archived: false },
      vi.fn(),
    ]);

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
    expect(result.archiveFilter).toMatchObject({
      showArchived: false,
      hasArchivedMaterials: true,
    });
    expect(result.areFiltersApplied).toBe(true);
  });

  test("reads archive state from configured custom param contract", () => {
    mockUseQueryStates.mockReturnValue([
      { search: "", "include-archive": true },
      vi.fn(),
    ]);

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
          applyFilter: (showArchived, keys) =>
            filterMaterialByArchivedStatus(showArchived, keys, itemsMap),
        },
      });

      captured = result as HookResult;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<CustomArchiveHarness />);

    expect(captured?.archiveFilter).toMatchObject({
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
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "special" },
      vi.fn(),
    ]);

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

      captured = result as HookResult;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<CustomShouldApplyHarness />);

    expect(captured?.filteredKeys).toEqual(["alpha"]);
    expect(captured?.areFiltersApplied).toBe(true);
  });

  test("uses 'all' as default when defaultValue is not provided", () => {
    mockUseQueryStates.mockReturnValue([{ search: "", category: "" }, vi.fn()]);

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

      captured = result as HookResult;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<NoDefaultValueHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("all");
  });

  test("uses raw default value when no valueParser is provided", () => {
    mockUseQueryStates.mockReturnValue([{ search: "", category: "" }, vi.fn()]);

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

      captured = result as HookResult;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<NoValueParserHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("all");
  });

  test("uses raw selected value from URL when no valueParser is provided", () => {
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "web" },
      vi.fn(),
    ]);

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

      captured = result as HookResult;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<NoValueParserWithUrlParamHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("web");
    expect(captured?.filteredKeys).toEqual(["alpha"]);
  });

  test("parses default value with valueParser when provided", () => {
    mockUseQueryStates.mockReturnValue([{ search: "", category: "" }, vi.fn()]);

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

      captured = result as HookResult;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<ValueParserForDefaultHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("all"); // Should be lowercase
  });

  test("parses selected value from URL with valueParser when provided", () => {
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "WEB" },
      vi.fn(),
    ]);

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

      captured = result as HookResult;
      return <div>{result.filteredKeys.join(",")}</div>;
    }

    renderToStaticMarkup(<ValueParserForSelectedHarness />);

    expect(captured?.filterCategories[0].selectedValue).toBe("web"); // Should be lowercase
    expect(captured?.filteredKeys).toEqual(["alpha"]);
  });

  test("auto-enables archive when applying a non-default filter", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "all", skill: "all", archived: false },
      setParams,
    ]);

    const result = runHook({});
    result.filterCategories[0].onChange("web");

    expect(setParams).toHaveBeenCalledWith({
      category: "web",
      archived: true,
    });
  });

  test("toggles archive filter when off", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "all", skill: "all", archived: false },
      setParams,
    ]);

    const result = runHook({});
    result.archiveFilter?.onToggle();

    expect(setParams).toHaveBeenCalledWith({
      archived: true,
    });
  });

  test("toggles archive filter when on", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "all", skill: "all", archived: true },
      setParams,
    ]);

    const result = runHook({});
    result.archiveFilter?.onToggle();

    expect(setParams).toHaveBeenCalledWith({
      archived: null,
    });
  });

  test("auto-enables archive when setting a search term", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "all", skill: "all", archived: false },
      setParams,
    ]);

    const result = runHook({});
    result.setSearchTerm("test");

    expect(setParams).toHaveBeenCalledWith({
      search: "test",
      archived: true,
    });
  });

  test("does not auto-enable archive when setting an empty search term", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      { search: "some", category: "all", skill: "all", archived: false },
      setParams,
    ]);

    const result = runHook({});
    result.setSearchTerm("");

    expect(setParams).toHaveBeenCalledWith({
      search: null,
    });
  });

  test("does not auto-enable archive when applying a default filter", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "web", skill: "all", archived: false },
      setParams,
    ]);

    const result = runHook({});
    result.filterCategories[0].onChange("all"); // "all" is defaultValue

    expect(setParams).toHaveBeenCalledWith({
      category: null,
    });
  });

  test("handles missing archive filter in callbacks", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "all" },
      setParams,
    ]);

    let captured: any;
    function NoArchiveHarness() {
      const result = useMaterialFilterState({
        databaseMap: {},
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
            applyFilter: (v, k) => k,
          },
        ],
      });
      captured = result;
      return null;
    }

    renderToStaticMarkup(<NoArchiveHarness />);

    captured.setSearchTerm("test");
    expect(setParams).toHaveBeenCalledWith({ search: "test" });

    captured.filterCategories[0].onChange("web");
    expect(setParams).toHaveBeenCalledWith({ category: "web" });
  });

  test("handles missing optional config and URL params", () => {
    mockUseQueryStates.mockReturnValue([{}, vi.fn()]);

    let captured: any;
    function MinimalHarness() {
      const result = useMaterialFilterState({
        databaseMap: {},
        searchParamName: "search",
        searchKeys: ["name"],
        filterCategories: [
          {
            sectionName: "Category",
            urlParam: "category",
            options: [{ slug: "all", entryName: "All" }],
            // defaultValue and valueParser MISSING
            applyFilter: (v, k) => k,
          },
        ],
      });
      captured = result;
      return null;
    }

    renderToStaticMarkup(<MinimalHarness />);
    expect(captured.searchTerm).toBe("");
    expect(captured.filterCategories[0].selectedValue).toBe("all");
  });

  test("handles empty string in onChange when default is different", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "all", skill: "all", archived: false },
      setParams,
    ]);

    const result = runHook({});
    result.filterCategories[0].onChange("");

    expect(setParams).toHaveBeenCalledWith({
      category: null,
      archived: true,
    });
  });

  test("handles missing archive param in rawParams (line 211)", () => {
    mockUseQueryStates.mockReturnValue([
      { search: "", category: "all", skill: "all" }, // No 'archived' key here
      vi.fn(),
    ]);

    const result = runHook({});

    expect(result.archiveFilter?.showArchived).toBe(false);
  });
});
