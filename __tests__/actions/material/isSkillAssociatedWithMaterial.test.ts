import { describe, expect, test, vi } from "vitest";
import { skillUsageMap } from "@/database/materials/material-database-map";
import SkillDatabaseKeys from "@/database/skills/skill-database-keys";
/// <reference types="vitest/globals" />
import { isSkillAssociatedWithMaterial } from "@/lib/material/skill-usage-helpers";

vi.mock("@/database/materials/material-database-map", () => ({
  skillUsageMap: new Map(),
}));

describe("isSkillAssociatedWithMaterial", () => {
  test("should return true for a skill that is used in materials", () => {
    skillUsageMap.set(SkillDatabaseKeys.JavaScript, 5);
    expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.JavaScript)).toBe(
      true,
    );
  });

  test("should return false for a skill that is not used in any material", () => {
    expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.Python)).toBe(false);
  });

  test("should return false if the skillUsageMap is empty", () => {
    skillUsageMap.clear();
    expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.JavaScript)).toBe(
      false,
    );
  });

  test("should handle different skills", () => {
    skillUsageMap.set(SkillDatabaseKeys.ReactJs, 10);
    skillUsageMap.set(SkillDatabaseKeys.Css, 3);
    expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.ReactJs)).toBe(true);
    expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.Css)).toBe(true);
    expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.Django)).toBe(false);
  });

  test("should return false for a skill with a count of 0", () => {
    skillUsageMap.set(SkillDatabaseKeys.JavaScript, 0);
    expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.JavaScript)).toBe(
      false,
    );
  });
});
