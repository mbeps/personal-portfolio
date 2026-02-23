/// <reference types="vitest/globals" />
import { skillHasMaterial } from "@/lib/material/skillUsageHelpers";
import { skillUsageMap } from "@/database/materials/MaterialDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import { describe, expect, test, vi } from "vitest";

vi.mock("@/database/materials/MaterialDatabaseMap", () => ({
  skillUsageMap: new Map(),
}));

describe("skillHasMaterial", () => {
  test("should return true if the skill has 2 or more materials", () => {
    skillUsageMap.set(SkillDatabaseKeys.JavaScript, 5);
    expect(skillHasMaterial(SkillDatabaseKeys.JavaScript)).toBe(true);
  });

  test("should return false if the skill has less than 2 materials", () => {
    skillUsageMap.set(SkillDatabaseKeys.Python, 1);
    expect(skillHasMaterial(SkillDatabaseKeys.Python)).toBe(false);
  });

  test("should return false if the skill has exactly 1 material", () => {
    skillUsageMap.set(SkillDatabaseKeys.Css, 1);
    expect(skillHasMaterial(SkillDatabaseKeys.Css)).toBe(false);
  });

  test("should return true if the skill has exactly 2 materials", () => {
    skillUsageMap.set(SkillDatabaseKeys.ReactJs, 2);
    expect(skillHasMaterial(SkillDatabaseKeys.ReactJs)).toBe(true);
  });

  test("should return false if the skill has 0 materials", () => {
    skillUsageMap.set(SkillDatabaseKeys.Django, 0);
    expect(skillHasMaterial(SkillDatabaseKeys.Django)).toBe(false);
  });
});
