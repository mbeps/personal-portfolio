/// <reference types="vitest/globals" />
import countMaterialsBySkill from "@/lib/material/countMaterialsBySkill";
import { skillUsageMap } from "@/database/materials/MaterialDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import { describe, expect, test, vi } from "vitest";

vi.mock("@/database/materials/MaterialDatabaseMap", () => ({
  skillUsageMap: new Map(),
}));

describe("countMaterialsBySkill", () => {
  test("should return the correct count for a skill that is used in materials", () => {
    skillUsageMap.set(SkillDatabaseKeys.JavaScript, 5);
    expect(countMaterialsBySkill(SkillDatabaseKeys.JavaScript)).toBe(5);
  });

  test("should return 0 for a skill that is not used in any material", () => {
    expect(countMaterialsBySkill(SkillDatabaseKeys.Python)).toBe(0);
  });

  test("should return 0 if the skillUsageMap is empty", () => {
    skillUsageMap.clear();
    expect(countMaterialsBySkill(SkillDatabaseKeys.JavaScript)).toBe(0);
  });

  test("should handle different skills and counts", () => {
    skillUsageMap.set(SkillDatabaseKeys.React, 10);
    skillUsageMap.set(SkillDatabaseKeys.Css, 3);
    expect(countMaterialsBySkill(SkillDatabaseKeys.React)).toBe(10);
    expect(countMaterialsBySkill(SkillDatabaseKeys.Css)).toBe(3);
    expect(countMaterialsBySkill(SkillDatabaseKeys.Django)).toBe(0);
  });
});
