import { describe, expect, test, vi } from "vitest";
import { skillUsageMap } from "@/database/materials/material-database-map";
import SkillDatabaseKeys from "@/database/skills/skill-database-keys";
/// <reference types="vitest/globals" />
import { countMaterialsBySkill } from "@/lib/material/skill-usage-helpers";

vi.mock("@/database/materials/material-database-map", () => ({
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
    skillUsageMap.set(SkillDatabaseKeys.ReactJs, 10);
    skillUsageMap.set(SkillDatabaseKeys.Css, 3);
    expect(countMaterialsBySkill(SkillDatabaseKeys.ReactJs)).toBe(10);
    expect(countMaterialsBySkill(SkillDatabaseKeys.Css)).toBe(3);
    expect(countMaterialsBySkill(SkillDatabaseKeys.Django)).toBe(0);
  });
});
