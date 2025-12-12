/// <reference types="vitest/globals" />
import checkForArchivedMaterials from "@/lib/material/checkForArchivedMaterials";
import type MaterialInterface from "@/database/materials/MaterialInterface";
import type Database from "@/interfaces/Database";
import { describe, expect, test } from "vitest";

describe("checkForArchivedMaterials", () => {
  test("should return true if there is at least one archived material", () => {
    const database: Database<MaterialInterface> = {
      material1: { name: "Material 1", archived: true } as MaterialInterface,
      material2: { name: "Material 2", archived: false } as MaterialInterface,
    };
    expect(checkForArchivedMaterials(database)).toBe(true);
  });

  test("should return false if there are no archived materials", () => {
    const database: Database<MaterialInterface> = {
      material1: { name: "Material 1", archived: false } as MaterialInterface,
      material2: { name: "Material 2", archived: false } as MaterialInterface,
    };
    expect(checkForArchivedMaterials(database)).toBe(false);
  });

  test("should return false for an empty database", () => {
    const database: Database<MaterialInterface> = {};
    expect(checkForArchivedMaterials(database)).toBe(false);
  });

  test("should handle materials with the archived property explicitly set to false", () => {
    const database: Database<MaterialInterface> = {
      material1: { name: "Material 1", archived: false } as MaterialInterface,
    };
    expect(checkForArchivedMaterials(database)).toBe(false);
  });

  test("should handle materials without an archived property", () => {
    const database: Database<MaterialInterface> = {
      material1: { name: "Material 1" } as MaterialInterface,
    };
    expect(checkForArchivedMaterials(database)).toBe(false);
  });

  test("should return true if all materials are archived", () => {
    const database: Database<MaterialInterface> = {
      material1: { name: "Material 1", archived: true } as MaterialInterface,
      material2: { name: "Material 2", archived: true } as MaterialInterface,
    };
    expect(checkForArchivedMaterials(database)).toBe(true);
  });
});
