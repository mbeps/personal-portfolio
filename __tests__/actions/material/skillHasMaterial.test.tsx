/// <reference types="vitest/globals" />
import skillHasMaterial from "@/actions/material/skillHasMaterial";
import countMaterialsBySkill from "@/actions/material/countMaterialsBySkill";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import { describe, expect, test, vi } from "vitest";

vi.mock("@/actions/material/countMaterialsBySkill");

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
    expect(skillHasMaterial(SkillDatabaseKeys.CSS)).toBe(false);
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
