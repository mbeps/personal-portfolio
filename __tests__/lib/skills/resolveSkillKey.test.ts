import { describe, expect, it } from "vitest";
import SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import resolveSkillKey from "@/lib/skills/resolve-skill-key";

describe("resolveSkillKey helper", () => {
  it("resolves exact slug", () => {
    expect(resolveSkillKey("spring-boot")).toBe(SkillDatabaseKeys.SpringBoot);
    expect(resolveSkillKey("python")).toBe(SkillDatabaseKeys.Python);
  });

  it("resolves display names with spaces and mixed case", () => {
    expect(resolveSkillKey("Spring Boot")).toBe(SkillDatabaseKeys.SpringBoot);
    expect(resolveSkillKey("Next.js")).toBe(SkillDatabaseKeys.NextJs);
    expect(resolveSkillKey("React")).toBe(SkillDatabaseKeys.ReactJs);
  });

  it("returns undefined for empty input or non-existent skill", () => {
    expect(resolveSkillKey("")).toBeUndefined();
    expect(resolveSkillKey("   ")).toBeUndefined();
    expect(resolveSkillKey(undefined)).toBeUndefined();
    expect(resolveSkillKey("completely-fake-skill-12345")).toBeUndefined();
  });
});
