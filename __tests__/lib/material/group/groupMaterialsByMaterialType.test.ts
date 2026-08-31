import { describe, expect, it } from "vitest";
import type MaterialInterface from "@/database/materials/material-interface";
import MaterialTypeEnum from "@/enums/material/material-type-enum";
import type Database from "@/interfaces/database";
import groupMaterialsByMaterialType from "@/lib/material/group/group-materials-by-material-type";

const mockDatabase: Database<MaterialInterface> = {
  item1: { name: "Item 1", category: "Cat 1", skills: [] },
  item2: { name: "Item 2", category: "Cat 2", skills: [] },
  item3: { name: "Item 3", category: "Cat 1", skills: [] },
};

describe("groupMaterialsByMaterialType", () => {
  it("should return a single group with the specified groupName and valid keys", () => {
    const keys = ["item1", "item2", "item3"];
    const result = groupMaterialsByMaterialType(
      keys,
      mockDatabase,
      MaterialTypeEnum.Projects,
    );

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      groupName: MaterialTypeEnum.Projects,
      materialsKeys: ["item1", "item2", "item3"],
    });
  });

  it("should filter out keys that do not exist in the database", () => {
    const keys = ["item1", "nonExistentKey", "item3", "anotherInvalidKey"];
    const result = groupMaterialsByMaterialType(
      keys,
      mockDatabase,
      MaterialTypeEnum.Certificates,
    );

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      groupName: MaterialTypeEnum.Certificates,
      materialsKeys: ["item1", "item3"],
    });
  });

  it("should return empty materialsKeys when input keys array is empty", () => {
    const result = groupMaterialsByMaterialType(
      [],
      mockDatabase,
      MaterialTypeEnum.Blogs,
    );

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      groupName: MaterialTypeEnum.Blogs,
      materialsKeys: [],
    });
  });

  it("should return empty materialsKeys when no keys exist in the database", () => {
    const keys = ["invalid1", "invalid2"];
    const result = groupMaterialsByMaterialType(
      keys,
      mockDatabase,
      MaterialTypeEnum.Courses,
    );

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      groupName: MaterialTypeEnum.Courses,
      materialsKeys: [],
    });
  });

  it("should preserve key order of valid materials", () => {
    const keys = ["item3", "item1", "item2"];
    const result = groupMaterialsByMaterialType(
      keys,
      mockDatabase,
      MaterialTypeEnum.Projects,
    );

    expect(result[0].materialsKeys).toEqual(["item3", "item1", "item2"]);
  });
});
