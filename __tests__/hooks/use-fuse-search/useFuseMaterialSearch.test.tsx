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

  test("searches array fields other than skills", () => {
    // Extend the test material interface to include an array field
    type ExtendedMaterial = MaterialInterface & { tags?: string[] };

    const itemsMap: Database<ExtendedMaterial> = {
      alpha: {
        ...material("Alpha", "cat", [SkillDatabaseKeys.ReactJs]),
        tags: ["frontend", "react"],
      },
      beta: {
        ...material("Beta", "cat", [SkillDatabaseKeys.Python]),
        tags: ["backend", "api"],
      },
    };

    const result = runHook(itemsMap as Database<TestMaterial>, "frontend", [
      "tags",
    ]);

    expect(result).toEqual(["alpha"]);
  });

  test("searches non-array scalar fields", () => {
    const itemsMap: Database<TestMaterial> = {
      alpha: material("Project Alpha", "Web Development", [
        SkillDatabaseKeys.ReactJs,
      ]),
      beta: material("Project Beta", "Data Science", [
        SkillDatabaseKeys.Python,
      ]),
    };

    // Search by category (non-array field)
    const result = runHook(itemsMap, "data science", ["category"]);

    expect(result).toEqual(["beta"]);
  });

  test("handles undefined field values gracefully", () => {
    type ExtendedMaterial = MaterialInterface & { description?: string };

    const itemsMap: Database<ExtendedMaterial> = {
      alpha: {
        ...material("Alpha", "cat", [SkillDatabaseKeys.ReactJs]),
        description: "Has description",
      },
      beta: {
        ...material("Beta", "cat", [SkillDatabaseKeys.Python]),
        // description is undefined
      },
    };

    const result = runHook(itemsMap as Database<TestMaterial>, "description", [
      "description",
    ]);

    expect(result).toEqual(["alpha"]);
  });

  test("handles name field as non-array scalar", () => {
    // Test searching a non-array scalar field
    const itemsMap: Database<TestMaterial> = {
      alpha: material("Unique Alpha Name", "cat", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "cat", [SkillDatabaseKeys.Python]),
    };

    const result = runHook(itemsMap, "unique", ["name"]);

    expect(result).toEqual(["alpha"]);
  });

  test("processes non-skills keys through generic getFn returning scalar strings", () => {
    // Directly test that category (a non-array field) goes through the scalar path
    const itemsMap: Database<TestMaterial> = {
      first: material("Item 1", "UniqueA", [SkillDatabaseKeys.ReactJs]),
      second: material("Item 2", "DifferentB", [SkillDatabaseKeys.Python]),
    };

    // Search only by category to ensure line 44 FALSE branch (non-array) is hit
    const result = runHook(itemsMap, "DifferentB", ["category"]);

    expect(result).toEqual(["second"]);
  });

  test("handles null and undefined elements in array fields", () => {
    type ExtendedMaterial = MaterialInterface & {
      tags?: (string | null | undefined)[];
    };

    const itemsMap: Database<ExtendedMaterial> = {
      sparseArray: {
        ...material("Sparse Tags", "cat", [SkillDatabaseKeys.ReactJs]),
        tags: ["valid", null, "another", undefined, "value"],
      },
    };

    const result = runHook(itemsMap as Database<TestMaterial>, "valid", [
      "tags",
    ]);

    expect(result).toEqual(["sparseArray"]);
  });
});
