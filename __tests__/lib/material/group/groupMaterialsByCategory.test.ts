import { describe, expect, test } from "vitest";
import groupMaterialsByCategory from "@/lib/material/group/groupMaterialsByCategory";
import MaterialInterface from "@/database/materials/MaterialInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import Database from "@/interfaces/Database";

function material(
  name: string,
  category: string,
  skills: SkillDatabaseKeys[],
): MaterialInterface {
  return {
    name,
    category,
    skills,
  };
}

describe("groupMaterialsByCategory", () => {
  test("groups materials by category", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
      beta: material("Beta", "AI", [SkillDatabaseKeys.Python]),
      gamma: material("Gamma", "Web", [SkillDatabaseKeys.TypeScript]),
    };

    const result = groupMaterialsByCategory(
      ["alpha", "beta", "gamma"],
      materialsDatabase,
    );

    expect(result).toEqual([
      {
        groupName: "Web",
        materialsKeys: ["alpha", "gamma"],
      },
      {
        groupName: "AI",
        materialsKeys: ["beta"],
      },
    ]);
  });

  test("skips materials not found in database", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
      gamma: material("Gamma", "Web", [SkillDatabaseKeys.TypeScript]),
    };

    // "beta" key doesn't exist in database
    const result = groupMaterialsByCategory(
      ["alpha", "beta", "gamma"],
      materialsDatabase,
    );

    // Should only include alpha and gamma, beta should be skipped
    expect(result).toEqual([
      {
        groupName: "Web",
        materialsKeys: ["alpha", "gamma"],
      },
    ]);
  });

  test("returns empty array for empty input", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      alpha: material("Alpha", "Web", [SkillDatabaseKeys.ReactJs]),
    };

    const result = groupMaterialsByCategory([], materialsDatabase);

    expect(result).toEqual([]);
  });

  test("preserves key order within groups", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      first: material("First", "Web", [SkillDatabaseKeys.ReactJs]),
      second: material("Second", "Web", [SkillDatabaseKeys.TypeScript]),
      third: material("Third", "Web", [SkillDatabaseKeys.NextJs]),
    };

    const result = groupMaterialsByCategory(
      ["first", "second", "third"],
      materialsDatabase,
    );

    expect(result[0].materialsKeys).toEqual(["first", "second", "third"]);
  });
});
