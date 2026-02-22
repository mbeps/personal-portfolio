import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import useFuseSkillSearch from "@/hooks/use-fuse-search/useFuseSkillSearch";
import Database from "@/interfaces/Database";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";

interface HarnessProps {
  itemsMap: Database<SkillInterface>;
  searchTerm: string;
  searchKeys: string[];
  onResult: (keys: string[]) => void;
}

function HookHarness({
  itemsMap,
  searchTerm,
  searchKeys,
  onResult,
}: HarnessProps) {
  const keys = useFuseSkillSearch(itemsMap, searchTerm, searchKeys);
  onResult(keys);
  return <div>{keys.join(",")}</div>;
}

function runHook(
  itemsMap: Database<SkillInterface>,
  searchTerm: string,
  searchKeys: string[],
): string[] {
  let result: string[] = [];

  renderToStaticMarkup(
    <HookHarness
      itemsMap={itemsMap}
      searchTerm={searchTerm}
      searchKeys={searchKeys}
      onResult={(keys) => {
        result = keys;
      }}
    />,
  );

  return result;
}

function skill(
  name: string,
  category: SkillCategoriesEnum,
  skillType: SkillTypesEnum,
  relatedSkills?: SkillDatabaseKeys[],
): SkillInterface {
  return {
    name,
    category,
    skillType,
    relatedSkills,
  };
}

describe("useFuseSkillSearch", () => {
  test("returns keys in insertion order for empty search", () => {
    const itemsMap: Database<SkillInterface> = {
      second: skill(
        "Second",
        SkillCategoriesEnum.DevOps,
        SkillTypesEnum.Technology,
      ),
      first: skill(
        "First",
        SkillCategoriesEnum.Testing,
        SkillTypesEnum.Technology,
      ),
      third: skill(
        "Third",
        SkillCategoriesEnum.Mathematics,
        SkillTypesEnum.Technical,
      ),
    };

    const result = runHook(itemsMap, "", ["name", "category", "relatedSkills"]);

    expect(result).toEqual(["second", "first", "third"]);
  });

  test("returns Fuse-ranked keys for non-empty search", () => {
    const itemsMap: Database<SkillInterface> = {
      alpha: skill(
        "Alpha Search",
        SkillCategoriesEnum.DevOps,
        SkillTypesEnum.Technology,
      ),
      beta: skill(
        "Beta",
        SkillCategoriesEnum.DevOps,
        SkillTypesEnum.Technology,
      ),
      gamma: skill(
        "Gamma",
        SkillCategoriesEnum.DevOps,
        SkillTypesEnum.Technology,
      ),
    };

    const result = runHook(itemsMap, "alpha", ["name", "category"]);

    expect(result[0]).toBe("alpha");
    expect(result).toContain("alpha");
  });

  test("keeps relatedSkills searchable", () => {
    const itemsMap: Database<SkillInterface> = {
      noMatch: skill(
        "A",
        SkillCategoriesEnum.Testing,
        SkillTypesEnum.Technology,
        [SkillDatabaseKeys.Java],
      ),
      hit: skill("B", SkillCategoriesEnum.Testing, SkillTypesEnum.Technology, [
        SkillDatabaseKeys.TypeScript,
      ]),
    };

    const result = runHook(itemsMap, "typescript", ["relatedSkills"]);

    expect(result).toEqual(["hit"]);
  });

  test("does not collapse results when names are duplicated", () => {
    const itemsMap: Database<SkillInterface> = {
      firstKey: skill(
        "Duplicate Name",
        SkillCategoriesEnum.Testing,
        SkillTypesEnum.Technology,
      ),
      secondKey: skill(
        "Duplicate Name",
        SkillCategoriesEnum.DevOps,
        SkillTypesEnum.Technical,
      ),
    };

    const result = runHook(itemsMap, "duplicate", ["name"]);

    expect(result).toEqual(["firstKey", "secondKey"]);
  });
});
