import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import useSkillFilterState from "@/hooks/useSkillFilterState";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";

const { mockUseSearchParams } = vi.hoisted(() => ({
  mockUseSearchParams: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useSearchParams: mockUseSearchParams,
}));

interface SkillFilterStateResult {
  searchTerm: string;
  searchParamName: string;
  filterCategories: {
    sectionName: string;
    urlParam: string;
    selectedValue: string;
  }[];
  groupedSkills: {
    skillCategoryName: string;
    skills: SkillDatabaseKeys[];
  }[];
  areFiltersApplied: boolean;
  hideSkillsWithoutMaterial: boolean;
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
    searchParamName: "search",
    filterCategories: [],
    groupedSkills: [],
    areFiltersApplied: false,
    hideSkillsWithoutMaterial: false,
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
    mockUseSearchParams.mockReset();
    mockUseSearchParams.mockReturnValue(new URLSearchParams(""));
  });

  test("returns default filter state with category grouping fallback", () => {
    const skills = [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Python,
    ];

    const result = runHook(skills);

    expect(result.searchTerm).toBe("");
    expect(result.searchParamName).toBe("search");
    expect(result.filterCategories[0]).toMatchObject({
      sectionName: "Group By",
      urlParam: "group",
      selectedValue: "category",
    });
    expect(result.hideSkillsWithoutMaterial).toBe(false);
    expect(result.areFiltersApplied).toBe(false);
  });

  test("applies exclusion toggles and no-material flag from URL params", () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams(
        "hard=true&general=false&no-material=true&group=language",
      ),
    );

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
    mockUseSearchParams.mockReturnValue(new URLSearchParams("search=hugging"));

    const skills = [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.HuggingFace,
      SkillDatabaseKeys.Python,
    ];

    const result = runHook(skills);

    expect(result.searchTerm).toBe("hugging");
    expect(result.areFiltersApplied).toBe(true);
  });
});
