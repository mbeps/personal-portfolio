import { afterEach, describe, expect, it, vi } from "vitest";
import { skillUsageMap } from "@/database/materials/MaterialDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import {
  countMaterialsBySkill,
  isSkillAssociatedWithMaterial,
  skillHasMaterial,
} from "@/lib/material/skillUsageHelpers";

describe("skillUsageHelpers", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("countMaterialsBySkill", () => {
    it("should return the usage count for a registered skill", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(4);
      expect(countMaterialsBySkill(SkillDatabaseKeys.Python)).toBe(4);
    });

    it("should return 0 when the skill is not in the map", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(undefined);
      expect(countMaterialsBySkill(SkillDatabaseKeys.JavaScript)).toBe(0);
    });

    it("should return 0 when the skill usage is 0", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(0);
      expect(countMaterialsBySkill(SkillDatabaseKeys.TypeScript)).toBe(0);
    });
  });

  describe("isSkillAssociatedWithMaterial", () => {
    it("should return true when the skill has 1 or more usages", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(1);
      expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.Python)).toBe(
        true,
      );

      vi.spyOn(skillUsageMap, "get").mockReturnValue(5);
      expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.ReactJs)).toBe(
        true,
      );
    });

    it("should return false when the skill has 0 usages", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(0);
      expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.Python)).toBe(
        false,
      );
    });

    it("should return false when the skill is missing from the map", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(undefined);
      expect(isSkillAssociatedWithMaterial(SkillDatabaseKeys.Docker)).toBe(
        false,
      );
    });
  });

  describe("skillHasMaterial", () => {
    it("should return true when the skill has 2 or more usages", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(2);
      expect(skillHasMaterial(SkillDatabaseKeys.Python)).toBe(true);

      vi.spyOn(skillUsageMap, "get").mockReturnValue(10);
      expect(skillHasMaterial(SkillDatabaseKeys.TypeScript)).toBe(true);
    });

    it("should return false when the skill has only 1 usage", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(1);
      expect(skillHasMaterial(SkillDatabaseKeys.Python)).toBe(false);
    });

    it("should return false when the skill has 0 usages or is missing", () => {
      vi.spyOn(skillUsageMap, "get").mockReturnValue(0);
      expect(skillHasMaterial(SkillDatabaseKeys.Python)).toBe(false);

      vi.spyOn(skillUsageMap, "get").mockReturnValue(undefined);
      expect(skillHasMaterial(SkillDatabaseKeys.Docker)).toBe(false);
    });
  });
});
