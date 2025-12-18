/// <reference types="vitest/globals" />
import groupSkills, { GroupByOptions } from "@/lib/skills/group/groupSkills";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import type SkillInterface from "@/database/skills/SkillInterface";
import type Database from "@/interfaces/Database";
import { describe, expect, test } from "vitest";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

describe("groupSkills", () => {
  const skillsDatabase: Database<SkillInterface> = {
    [SkillDatabaseKeys.JavaScript]: {
      name: "JavaScript",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [SkillDatabaseKeys.ReactJS],
    },
    [SkillDatabaseKeys.ReactJS]: {
      name: "React",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [SkillDatabaseKeys.JavaScript],
    },
    [SkillDatabaseKeys.Python]: {
      name: "Python",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Mathematics]: {
      name: "Mathematics",
      category: SkillCategoriesEnum.Mathematics,
      skillType: SkillTypesEnum.Technical,
    },
    [SkillDatabaseKeys.StateManagement]: {
      name: "State Management",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technical,
      relatedSkills: [SkillDatabaseKeys.JavaScript],
    },
  };

  test("should group skills by category", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Python,
    ];
    const result = groupSkills(
      GroupByOptions.Category,
      skillKeys,
      skillsDatabase
    );
    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
        }),
        expect.objectContaining({
          skillCategoryName: SkillCategoriesEnum.FrontEndWebDevelopment,
        }),
      ])
    );
  });

  test("should exclude skills by type", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Mathematics,
    ];
    const result = groupSkills(
      GroupByOptions.Category,
      skillKeys,
      skillsDatabase,
      [SkillTypesEnum.Technical]
    );
    expect(result).toHaveLength(2);
    // Check that no technical skills are included
    result.forEach((category) => {
      category.skills.forEach((skillKey) => {
        expect(skillsDatabase[skillKey].skillType).not.toBe(
          SkillTypesEnum.Technical
        );
      });
    });
  });

  test("should handle default grouping when groupedBy is not recognized", () => {
    const skillKeys = [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python];
    const result = groupSkills(
      "unrecognized" as GroupByOptions,
      skillKeys,
      skillsDatabase
    );
    expect(result).toHaveLength(1);
    expect(result[0].skillCategoryName).toBe("None");
    expect(result[0].skills).toEqual(skillKeys);
  });

  test("should handle recursive filtering of related skills", () => {
    // Create a technical skill with related technology skills
    const extendedSkillsDb: Database<SkillInterface> = {
      ...skillsDatabase,
      [SkillDatabaseKeys.StateManagement]: {
        name: "State Management",
        category: SkillCategoriesEnum.FrontEndWebDevelopment,
        skillType: SkillTypesEnum.Technical,
        relatedSkills: [SkillDatabaseKeys.JavaScript],
      },
    };

    const skillKeys = [
      SkillDatabaseKeys.StateManagement,
      SkillDatabaseKeys.JavaScript,
    ];
    const result = groupSkills(
      GroupByOptions.Category,
      skillKeys,
      extendedSkillsDb,
      [SkillTypesEnum.Technical]
    );

    const allSkills = result.flatMap((category) => category.skills);

    // State management (technical skill) should be excluded
    expect(allSkills).not.toContain(SkillDatabaseKeys.StateManagement);

    // JavaScript (technology) should be included even though it's related to a filtered skill
    // because JavaScript itself is not a technical skill
    expect(allSkills).toContain(SkillDatabaseKeys.JavaScript);
  });

  test("should group skills by language", () => {
    const skillKeys = [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python];
    const result = groupSkills(
      GroupByOptions.Language,
      skillKeys,
      skillsDatabase
    );
    expect(result.length).toBeGreaterThan(0);
    // Verify that groupByLanguage was called (we can't verify the exact structure without knowing groupByLanguage implementation)
    const allSkills = result.flatMap((category) => category.skills);
    expect(allSkills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.Python,
      ])
    );
  });

  test("should group skills by skill type", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Mathematics,
    ];
    const result = groupSkills(
      GroupByOptions.SkillType,
      skillKeys,
      skillsDatabase
    );
    expect(result.length).toBeGreaterThan(0);
    // Verify that groupBySkillType was called
    const allSkills = result.flatMap((category) => category.skills);
    expect(allSkills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.Mathematics,
      ])
    );
  });

  test("should include related skills when filtering", () => {
    const skillKeys = [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.ReactJS];
    const result = groupSkills(
      GroupByOptions.Category,
      skillKeys,
      skillsDatabase,
      [SkillTypesEnum.Technical]
    );

    const allSkills = result.flatMap((category) => category.skills);

    // Both JavaScript and ReactJS should be included as they're both Technology skills
    expect(allSkills).toContain(SkillDatabaseKeys.JavaScript);
    expect(allSkills).toContain(SkillDatabaseKeys.ReactJS);
    expect(allSkills).toHaveLength(2);
  });

  test("should handle case where no skills pass the filter", () => {
    // Test edge case where all skills are excluded
    const skillKeys = [SkillDatabaseKeys.Mathematics];
    const result = groupSkills(
      GroupByOptions.Category,
      skillKeys,
      skillsDatabase,
      [SkillTypesEnum.Technical]
    );

    const allSkills = result.flatMap((category) => category.skills);

    // No skills should be included
    expect(allSkills).toHaveLength(0);
  });

  test("should not process related skills when excludedSkillTypes is not provided", () => {
    // When excludedSkillTypes is undefined, recursiveFilter is not called
    // so the function should just return the skills as-is
    const skillKeys = [SkillDatabaseKeys.JavaScript];
    const result = groupSkills(
      GroupByOptions.Category,
      skillKeys,
      skillsDatabase
      // No excludedSkillTypes parameter
    );

    const allSkills = result.flatMap((category) => category.skills);

    // Only JavaScript should be in the result (no recursive processing of related skills)
    expect(allSkills).toEqual([SkillDatabaseKeys.JavaScript]);
  });

  test("should handle skills with empty relatedSkills array", () => {
    // Test a skill that has relatedSkills defined but as an empty array
    const extendedDb: Database<SkillInterface> = {
      ...skillsDatabase,
      [SkillDatabaseKeys.TypeScript]: {
        name: "TypeScript",
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
        relatedSkills: [], // Empty array
      },
    };

    const skillKeys = [SkillDatabaseKeys.TypeScript];
    const result = groupSkills(GroupByOptions.Category, skillKeys, extendedDb, [
      SkillTypesEnum.Technical,
    ]);

    const allSkills = result.flatMap((category) => category.skills);

    // TypeScript should be included (it's not a technical skill)
    expect(allSkills).toContain(SkillDatabaseKeys.TypeScript);
    expect(allSkills).toHaveLength(1);
  });
});
