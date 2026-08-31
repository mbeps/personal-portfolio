import { describe, expect, it } from "vitest";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";

describe("buildSkillTableGroups", () => {
  it("should return two groups titled 'Technologies' and 'Technical Skills'", () => {
    const result = buildSkillTableGroups([]);
    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("Technologies");
    expect(result[1].title).toBe("Technical Skills");
    expect(result[0].skillCategories).toEqual([]);
    expect(result[1].skillCategories).toEqual([]);
  });

  it("should categorize technology skills into Technologies group", () => {
    const skillKeys = [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
    ];

    const result = buildSkillTableGroups(skillKeys);
    const techGroup = result.find((g) => g.title === "Technologies");
    const technicalGroup = result.find((g) => g.title === "Technical Skills");

    expect(techGroup).toBeDefined();
    expect(techGroup?.skillCategories.length).toBeGreaterThan(0);
    expect(technicalGroup?.skillCategories).toEqual([]);

    const allTechSkills =
      techGroup?.skillCategories.flatMap((cat) => cat.skills) || [];
    expect(allTechSkills).toContain(SkillDatabaseKeys.Python);
    expect(allTechSkills).toContain(SkillDatabaseKeys.JavaScript);
    expect(allTechSkills).toContain(SkillDatabaseKeys.TypeScript);
  });

  it("should categorize technical skills into Technical Skills group", () => {
    const skillKeys = [
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Testing,
      SkillDatabaseKeys.ReinforcementLearning,
    ];

    const result = buildSkillTableGroups(skillKeys);
    const techGroup = result.find((g) => g.title === "Technologies");
    const technicalGroup = result.find((g) => g.title === "Technical Skills");

    expect(techGroup?.skillCategories).toEqual([]);
    expect(technicalGroup).toBeDefined();
    expect(technicalGroup?.skillCategories.length).toBeGreaterThan(0);

    const allTechnicalSkills =
      technicalGroup?.skillCategories.flatMap((cat) => cat.skills) || [];
    expect(allTechnicalSkills).toContain(SkillDatabaseKeys.Mathematics);
    expect(allTechnicalSkills).toContain(SkillDatabaseKeys.Testing);
    expect(allTechnicalSkills).toContain(
      SkillDatabaseKeys.ReinforcementLearning,
    );
  });

  it("should split mixed skills into their respective groups", () => {
    const skillKeys = [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Testing,
    ];

    const result = buildSkillTableGroups(skillKeys);
    const techGroup = result[0];
    const technicalGroup = result[1];

    const techSkills = techGroup.skillCategories.flatMap((c) => c.skills);
    const technicalSkills = technicalGroup.skillCategories.flatMap(
      (c) => c.skills,
    );

    expect(techSkills).toContain(SkillDatabaseKeys.Python);
    expect(techSkills).toContain(SkillDatabaseKeys.ReactJs);
    expect(techSkills).not.toContain(SkillDatabaseKeys.Mathematics);
    expect(techSkills).not.toContain(SkillDatabaseKeys.Testing);

    expect(technicalSkills).toContain(SkillDatabaseKeys.Mathematics);
    expect(technicalSkills).toContain(SkillDatabaseKeys.Testing);
    expect(technicalSkills).not.toContain(SkillDatabaseKeys.Python);
    expect(technicalSkills).not.toContain(SkillDatabaseKeys.ReactJs);
  });

  it("should ignore invalid skill keys", () => {
    const skillKeys = [
      SkillDatabaseKeys.Python,
      "non-existent-key" as SkillDatabaseKeys,
    ];

    const result = buildSkillTableGroups(skillKeys);
    const techGroup = result[0];
    const techSkills = techGroup.skillCategories.flatMap((c) => c.skills);

    expect(techSkills).toContain(SkillDatabaseKeys.Python);
    expect(techSkills).not.toContain("non-existent-key");
  });
});
