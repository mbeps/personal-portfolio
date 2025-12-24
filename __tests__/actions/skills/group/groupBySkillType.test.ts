/// <reference types="vitest/globals" />
import groupBySkillType from "@/lib/skills/group/groupBySkillType";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import type SkillInterface from "@/database/skills/SkillInterface";
import type Database from "@/interfaces/Database";
import { describe, expect, test } from "vitest";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

describe("groupBySkillType", () => {
  const skillsDatabase: Database<SkillInterface> = {
    [SkillDatabaseKeys.JavaScript]: {
      name: "JavaScript",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Python]: {
      name: "Python",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.ReactJs]: {
      name: "React",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.MachineLearning]: {
      name: "Machine Learning",
      category: SkillCategoriesEnum.ArtificialIntelligence,
      skillType: SkillTypesEnum.Technical,
    },
    [SkillDatabaseKeys.DataScience]: {
      name: "Data Science",
      category: SkillCategoriesEnum.ArtificialIntelligence,
      skillType: SkillTypesEnum.Technical,
    },
  };

  test("should group skills by their skill type", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.MachineLearning,
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          skillCategoryName: SkillTypesEnum.Technology,
          skills: [SkillDatabaseKeys.JavaScript],
        }),
        expect.objectContaining({
          skillCategoryName: SkillTypesEnum.Technical,
          skills: [SkillDatabaseKeys.MachineLearning],
        }),
      ])
    );
  });

  test("should group multiple skills of the same type together", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJs,
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillTypesEnum.Technology,
      skills: expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.Python,
        SkillDatabaseKeys.ReactJs,
      ]),
    });
    expect(result[0].skills).toHaveLength(3);
  });

  test("should handle skills from all skill types", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.MachineLearning,
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);

    const skillTypeNames = result.map((group) => group.skillCategoryName);
    expect(skillTypeNames).toContain(SkillTypesEnum.Technology);
    expect(skillTypeNames).toContain(SkillTypesEnum.Technical);
  });

  test("should return empty array when no skills are provided", () => {
    const skillKeys: SkillDatabaseKeys[] = [];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toEqual([]);
  });

  test("should skip skills that are not found in database", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      "non-existent-skill" as SkillDatabaseKeys,
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillTypesEnum.Technology,
      skills: [SkillDatabaseKeys.JavaScript],
    });
  });

  test("should preserve skill order within each type", () => {
    const skillKeys = [
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0].skills).toEqual([
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
    ]);
  });

  test("should handle mixed skill types", () => {
    const skillKeys = [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);

    const techSkillsGroup = result.find(
      (group) => group.skillCategoryName === SkillTypesEnum.Technology
    );
    expect(techSkillsGroup).toBeDefined();
    expect(techSkillsGroup?.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.Python,
      ])
    );

    const technicalSkillsGroup = result.find(
      (group) => group.skillCategoryName === SkillTypesEnum.Technical
    );
    expect(technicalSkillsGroup).toBeDefined();
    expect(technicalSkillsGroup?.skills).toEqual(
      expect.arrayContaining([SkillDatabaseKeys.MachineLearning])
    );
  });

  test("should handle all skills of one type", () => {
    const skillKeys = [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillTypesEnum.Technical,
      skills: expect.arrayContaining([
        SkillDatabaseKeys.MachineLearning,
        SkillDatabaseKeys.DataScience,
      ]),
    });
  });

  test("should handle comprehensive mix of all skill types", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);

    // Verify total number of skills is preserved
    const totalSkills = result.reduce(
      (sum, group) => sum + group.skills.length,
      0
    );
    expect(totalSkills).toBe(skillKeys.length);

    // Verify each skill appears exactly once
    const allSkillsInResult = result.flatMap((group) => group.skills);
    expect(allSkillsInResult.sort()).toEqual(skillKeys.sort());
  });

  test("should initialize new skill type when not already in map", () => {
    // This test covers the branch on lines 21-24 where skillTypes[skillType] might not exist
    // The first skill of a particular type will trigger this branch
    const skillKeys = [SkillDatabaseKeys.MachineLearning];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillTypesEnum.Technical,
      skills: [SkillDatabaseKeys.MachineLearning],
    });
  });

  test("should handle when multiple skill types need initialization", () => {
    // Testing the initialization branch for multiple types
    const skillKeys = [
      SkillDatabaseKeys.JavaScript, // First Technology skill
      SkillDatabaseKeys.MachineLearning, // First Technical skill
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);

    // Both types should be initialized and have their respective skills
    const typeNames = result.map((group) => group.skillCategoryName);
    expect(typeNames).toContain(SkillTypesEnum.Technology);
    expect(typeNames).toContain(SkillTypesEnum.Technical);
  });

  test("should add to existing skill type array when it already exists", () => {
    // First skill initializes, second skill adds to existing array
    const skillKeys = [
      SkillDatabaseKeys.JavaScript, // Initializes Technology
      SkillDatabaseKeys.Python, // Adds to Technology
    ];
    const result = groupBySkillType(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0].skills).toEqual([
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
    ]);
  });
});
