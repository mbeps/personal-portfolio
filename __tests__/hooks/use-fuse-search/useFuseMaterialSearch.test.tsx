import MaterialInterface from "@/database/materials/MaterialInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import Database from "@/interfaces/Database";
import useFuseMaterialSearch from "@/hooks/use-fuse-search/useFuseMaterialSearch";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";

type TestMaterial = MaterialInterface;

interface HarnessProps {
  itemsMap: Database<TestMaterial>;
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
  const keys = useFuseMaterialSearch(itemsMap, searchTerm, searchKeys);
  onResult(keys);
  return <div>{keys.join(",")}</div>;
}

function runHook(
  itemsMap: Database<TestMaterial>,
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

function material(
  name: string,
  category: string,
  skills: SkillDatabaseKeys[],
): TestMaterial {
  return {
    name,
    category,
    skills,
  };
}

describe("useFuseMaterialSearch", () => {
  test("returns keys in insertion order for empty search", () => {
    const itemsMap: Database<TestMaterial> = {
      second: material("Second", "cat-b", [SkillDatabaseKeys.ReactJs]),
      first: material("First", "cat-a", [SkillDatabaseKeys.TypeScript]),
      third: material("Third", "cat-c", [SkillDatabaseKeys.NextJs]),
    };

    const result = runHook(itemsMap, "", ["name", "category", "skills"]);

    expect(result).toEqual(["second", "first", "third"]);
  });

  test("returns Fuse-ranked keys for non-empty search", () => {
    const itemsMap: Database<TestMaterial> = {
      alpha: material("Alpha Search", "cat", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "cat", [SkillDatabaseKeys.ReactJs]),
      gamma: material("Gamma", "cat", [SkillDatabaseKeys.ReactJs]),
    };

    const result = runHook(itemsMap, "alpha", ["name", "category", "skills"]);

    expect(result[0]).toBe("alpha");
    expect(result).toContain("alpha");
  });

  test("keeps nested skills searchable", () => {
    const itemsMap: Database<TestMaterial> = {
      noMatch: material("A", "cat", [SkillDatabaseKeys.Java]),
      hit: material("B", "cat", [SkillDatabaseKeys.TypeScript]),
    };

    const result = runHook(itemsMap, "typescript", ["skills"]);

    expect(result).toEqual(["hit"]);
  });

  test("does not collapse results when names are duplicated", () => {
    const itemsMap: Database<TestMaterial> = {
      firstKey: material("Duplicate Name", "cat", [SkillDatabaseKeys.ReactJs]),
      secondKey: material("Duplicate Name", "cat", [SkillDatabaseKeys.ReactJs]),
    };

    const result = runHook(itemsMap, "duplicate", ["name"]);

    expect(result).toEqual(["firstKey", "secondKey"]);
  });
});
