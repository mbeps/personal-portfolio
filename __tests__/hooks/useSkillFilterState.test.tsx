import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import useSkillFilterState from "@/hooks/useSkillFilterState";
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

interface SkillFilterStateResult {
  searchTerm: string;
  filterCategories: {
    sectionName: string;
    urlParam: string;
    selectedValue: string;
    onChange: (value: string) => void;
  }[];
  groupedSkills: {
    skillCategoryName: string;
    skills: SkillDatabaseKeys[];
  }[];
  areFiltersApplied: boolean;
  hideSkillsWithoutMaterial: boolean;
  setSearchTerm: (value: string) => void;
}

interface HarnessProps {
  skills: SkillDatabaseKeys[];
  onResult: (result: SkillFilterStateResult) => void;
}

function HookHarness({ skills, onResult }: HarnessProps) {
  const result = useSkillFilterState(skills);
  onResult(result);
  return <div>{result.groupedSkills.length}</div>;
}

function runHook(skills: SkillDatabaseKeys[]): SkillFilterStateResult {
  let result: SkillFilterStateResult = {
    searchTerm: "",
    filterCategories: [],
    groupedSkills: [],
    areFiltersApplied: false,
    hideSkillsWithoutMaterial: false,
    setSearchTerm: vi.fn(),
  };

  renderToStaticMarkup(
    <HookHarness
      skills={skills}
      onResult={(value) => {
        result = value;
      }}
    />,
  );

  return result;
}

describe("useSkillFilterState", () => {
  beforeEach(() => {
    mockUseQueryStates.mockReset();
    mockUseQueryStates.mockReturnValue([
      {
        search: "",
        group: "",
        hard: false,
        general: false,
        "no-material": false,
      },
      vi.fn(),
    ]);
  });

  test("returns default filter state with category grouping fallback", () => {
    const skills = [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Python,
    ];

    const result = runHook(skills);

    expect(result.searchTerm).toBe("");
    expect(result.filterCategories[0]).toMatchObject({
      sectionName: "Group By",
      urlParam: "group",
      selectedValue: "category",
    });
    expect(result.hideSkillsWithoutMaterial).toBe(false);
    expect(result.areFiltersApplied).toBe(false);
  });

  test("applies exclusion toggles and no-material flag from URL params", () => {
    mockUseQueryStates.mockReturnValue([
      {
        search: "",
        group: "language",
        hard: true,
        general: false,
        "no-material": true,
      },
      vi.fn(),
    ]);

    const skills = [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.MachineLearning,
    ];

    const result = runHook(skills);

    const hardSkillsCategory = result.filterCategories.find(
      (category) => category.urlParam === "hard",
    );

    expect(hardSkillsCategory?.selectedValue).toBe("true");
    expect(result.hideSkillsWithoutMaterial).toBe(true);
    expect(result.areFiltersApplied).toBe(true);

    const groupedSkillKeys = result.groupedSkills.flatMap(
      (group) => group.skills,
    );
    expect(
      groupedSkillKeys.every(
        (skillKey) =>
          skillDatabaseMap[skillKey].skillType !== SkillTypesEnum.Technology,
      ),
    ).toBe(true);
  });

  test("marks state as filtered when search term is provided", () => {
    mockUseQueryStates.mockReturnValue([
      {
        search: "hugging",
        group: "",
        hard: false,
        general: false,
        "no-material": false,
      },
      vi.fn(),
    ]);

    const skills = [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.HuggingFace,
      SkillDatabaseKeys.Python,
    ];

    const result = runHook(skills);

    expect(result.searchTerm).toBe("hugging");
    expect(result.areFiltersApplied).toBe(true);
  });

  test("verifies callback functions update URL parameters correctly", () => {
    const setParams = vi.fn();
    mockUseQueryStates.mockReturnValue([
      {
        search: "",
        group: "category",
        hard: false,
        general: false,
        "no-material": false,
      },
      setParams,
    ]);

    const result = runHook([]);

    // 1. Set search term
    result.setSearchTerm("react");
    expect(setParams).toHaveBeenCalledWith({ search: "react" });

    // 2. Change grouping
    const groupCategory = result.filterCategories.find(
      (c) => c.urlParam === "group",
    );
    groupCategory?.onChange("language");
    expect(setParams).toHaveBeenCalledWith({ group: "language" });

    // 3. Toggle exclusion (hard skills)
    const hardCategory = result.filterCategories.find(
      (c) => c.urlParam === "hard",
    );
    hardCategory?.onChange("true");
    expect(setParams).toHaveBeenCalledWith({ hard: true });

    // 4. Toggle exclusion (general skills) - off case
    const generalCategory = result.filterCategories.find(
      (c) => c.urlParam === "general",
    );
    generalCategory?.onChange("false");
    expect(setParams).toHaveBeenCalledWith({ general: null });

    // 5. Toggle no-material filter
    const noMaterialCategory = result.filterCategories.find(
      (c) => c.urlParam === "no-material",
    );
    noMaterialCategory?.onChange("true");
    expect(setParams).toHaveBeenCalledWith({ "no-material": true });

    // 6. Test falsy values for coverage (branch coverage)
    groupCategory?.onChange("");
    expect(setParams).toHaveBeenCalledWith({ group: null });

    noMaterialCategory?.onChange("false");
    expect(setParams).toHaveBeenCalledWith({ "no-material": null });

    result.setSearchTerm("");
    expect(setParams).toHaveBeenCalledWith({ search: null });
  });

  test("handles missing URL parameters by falling back to defaults", () => {
    mockUseQueryStates.mockReturnValue([
      {}, // Empty params
      vi.fn(),
    ]);
    const result = runHook([]);
    expect(result.searchTerm).toBe("");
    expect(result.filterCategories[0].selectedValue).toBe("category");
  });

  test("applies technical skills exclusion when general param is true", () => {
    mockUseQueryStates.mockReturnValue([
      {
        search: "",
        group: "",
        hard: false,
        general: true,
        "no-material": false,
      },
      vi.fn(),
    ]);

    const result = runHook([SkillDatabaseKeys.TypeScript]);
    expect(result.areFiltersApplied).toBe(true);
  });
});
