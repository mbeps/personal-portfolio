/// <reference types="vitest/globals" />
import skillHasMaterial from "@/lib/material/skillHasMaterial";
import countMaterialsBySkill from "@/lib/material/countMaterialsBySkill";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import { describe, expect, test, vi } from "vitest";

vi.mock("@/lib/material/countMaterialsBySkill", () => ({
  default: vi.fn(),
}));

describe("skillHasMaterial", () => {
  test("should return true if the skill has 2 or more materials", () => {
    (countMaterialsBySkill as vi.Mock).mockReturnValue(5);
    expect(skillHasMaterial(SkillDatabaseKeys.JavaScript)).toBe(true);
  });

  test("should return false if the skill has less than 2 materials", () => {
    (countMaterialsBySkill as vi.Mock).mockReturnValue(1);
    expect(skillHasMaterial(SkillDatabaseKeys.Python)).toBe(false);
  });

  test("should return false if the skill has exactly 1 material", () => {
    (countMaterialsBySkill as vi.Mock).mockReturnValue(1);
    expect(skillHasMaterial(SkillDatabaseKeys.Css)).toBe(false);
  });

  test("should return true if the skill has exactly 2 materials", () => {
    (countMaterialsBySkill as vi.Mock).mockReturnValue(2);
    expect(skillHasMaterial(SkillDatabaseKeys.React)).toBe(true);
  });

  test("should return false if the skill has 0 materials", () => {
    (countMaterialsBySkill as vi.Mock).mockReturnValue(0);
    expect(skillHasMaterial(SkillDatabaseKeys.Django)).toBe(false);
  });
});
