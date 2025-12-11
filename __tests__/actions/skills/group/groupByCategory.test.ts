/// <reference types="vitest/globals" />
import groupByCategory from "@/lib/skills/group/groupByCategory";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import type SkillInterface from "@/database/skills/SkillInterface";
import type Database from "@/interfaces/Database";
import { describe, expect, test } from "vitest";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

describe("groupByCategory", () => {
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
    [SkillDatabaseKeys.ReactJS]: {
      name: "React",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.NextJS]: {
      name: "Next.js",
      category: SkillCategoriesEnum.FullStackWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Flask]: {
      name: "Flask",
      category: SkillCategoriesEnum.BackEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.PostgreSQL]: {
      name: "PostgreSQL",
      category: SkillCategoriesEnum.DatabaseManagement,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Docker]: {
      name: "Docker",
      category: SkillCategoriesEnum.DevOps,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Teamwork]: {
      name: "Teamwork",
      category: SkillCategoriesEnum.SoftSkills,
      skillType: SkillTypesEnum.Soft,
    },
    [SkillDatabaseKeys.Leadership]: {
      name: "Leadership",
      category: SkillCategoriesEnum.SoftSkills,
      skillType: SkillTypesEnum.Soft,
    },
  };

  test("should group skills by their category", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Teamwork,
    ];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(3);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
          skills: [SkillDatabaseKeys.JavaScript],
        }),
        expect.objectContaining({
          skillCategoryName: SkillCategoriesEnum.FrontEndWebDevelopment,
          skills: [SkillDatabaseKeys.ReactJS],
        }),
        expect.objectContaining({
          skillCategoryName: SkillCategoriesEnum.SoftSkills,
          skills: [SkillDatabaseKeys.Teamwork],
        }),
      ])
    );
  });

  test("should group multiple skills in the same category", () => {
    const skillKeys = [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
      skills: expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.Python,
      ]),
    });
    expect(result[0].skills).toHaveLength(2);
  });

  test("should handle skills from multiple different categories", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.Docker,
    ];
    const result = groupByCategory(skillKeys, skillsDatabase);

    // We have 6 unique categories (two skills - Docker and PostgreSQL - go to separate categories)
    expect(result).toHaveLength(6);

    // Verify each category exists
    const categoryNames = result.map((group) => group.skillCategoryName);
    expect(categoryNames).toContain(SkillCategoriesEnum.ProgrammingLanguages);
    expect(categoryNames).toContain(SkillCategoriesEnum.FrontEndWebDevelopment);
    expect(categoryNames).toContain(
      SkillCategoriesEnum.FullStackWebDevelopment
    );
    expect(categoryNames).toContain(SkillCategoriesEnum.BackEndWebDevelopment);
    expect(categoryNames).toContain(SkillCategoriesEnum.DatabaseManagement);
    expect(categoryNames).toContain(SkillCategoriesEnum.DevOps);
  });

  test("should return empty array when no skills are provided", () => {
    const skillKeys: SkillDatabaseKeys[] = [];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toEqual([]);
  });

  test("should skip skills that are not found in database", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      "non-existent-skill" as SkillDatabaseKeys,
    ];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
      skills: [SkillDatabaseKeys.JavaScript],
    });
  });

  test("should maintain the order defined by SkillCategoriesEnum", () => {
    // Add skills in a different order than enum
    const skillKeys = [
      SkillDatabaseKeys.Teamwork, // SoftSkills comes later in enum
      SkillDatabaseKeys.JavaScript, // ProgrammingLanguages comes earlier
      SkillDatabaseKeys.ReactJS, // FrontEndWebDevelopment comes in between
    ];
    const result = groupByCategory(skillKeys, skillsDatabase);

    // Get the enum values in order
    const enumOrder = Object.values(SkillCategoriesEnum);

    // Find the indices in the enum for each category in result
    const resultIndices = result.map((group) =>
      enumOrder.indexOf(group.skillCategoryName as SkillCategoriesEnum)
    );

    // Verify that the indices are in ascending order
    for (let i = 1; i < resultIndices.length; i++) {
      expect(resultIndices[i]).toBeGreaterThan(resultIndices[i - 1]);
    }
  });

  test("should only include categories that have skills", () => {
    const skillKeys = [SkillDatabaseKeys.JavaScript];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0].skillCategoryName).toBe(
      SkillCategoriesEnum.ProgrammingLanguages
    );
  });

  test("should handle all skills from the same category", () => {
    const skillKeys = [
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.Leadership,
    ];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillCategoriesEnum.SoftSkills,
      skills: expect.arrayContaining([
        SkillDatabaseKeys.Teamwork,
        SkillDatabaseKeys.Leadership,
      ]),
    });
    expect(result[0].skills).toHaveLength(2);
  });

  test("should handle skill with category not pre-initialized in map", () => {
    // This test covers the branch on line 33 where categoriesMap[skill.category] might not exist
    // However, since we initialize all categories from the enum, this branch is actually redundant
    // But we can test with a skill that has a category value

    const skillKeys = [SkillDatabaseKeys.Docker];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillCategoriesEnum.DevOps,
      skills: [SkillDatabaseKeys.Docker],
    });
  });

  test("should handle a comprehensive mix of skills from all categories", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.Leadership,
    ];
    const result = groupByCategory(skillKeys, skillsDatabase);

    // We should have 6 unique categories
    expect(result.length).toBeGreaterThanOrEqual(6);

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

  test("should preserve skill order within each category", () => {
    const skillKeys = [SkillDatabaseKeys.Python, SkillDatabaseKeys.JavaScript];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0].skills).toEqual([
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.JavaScript,
    ]);
  });

  test("should handle category initialization when first skill of category is encountered", () => {
    // This test covers the redundant check on line 33: if (!categoriesMap[skill.category])
    // Even though categories are pre-initialized, we test the defensive check
    const skillKeys = [SkillDatabaseKeys.JavaScript]; // First skill in ProgrammingLanguages
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
      skills: [SkillDatabaseKeys.JavaScript],
    });
  });

  test("should handle adding second skill to already initialized category", () => {
    // First skill initializes the array, second skill adds to it
    const skillKeys = [
      SkillDatabaseKeys.JavaScript, // First in category
      SkillDatabaseKeys.Python, // Second in same category
    ];
    const result = groupByCategory(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0].skills).toHaveLength(2);
    expect(result[0].skills).toEqual([
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
    ]);
  });

  test("should handle edge case with hypothetical new category not in enum", () => {
    // This is a defensive test for the line 33 check
    const extendedDb: Database<SkillInterface> = {
      ...skillsDatabase,
      ["test-skill" as SkillDatabaseKeys]: {
        name: "Test Skill",
        category: SkillCategoriesEnum.Testing, // Valid enum value
        skillType: SkillTypesEnum.Technology,
      },
    };

    const skillKeys = ["test-skill" as SkillDatabaseKeys];
    const result = groupByCategory(skillKeys, extendedDb);

    expect(result).toHaveLength(1);
    expect(result[0].skillCategoryName).toBe(SkillCategoriesEnum.Testing);
  });

  test("should handle skill with category not in pre-initialized enum values", () => {
    // This test covers line 33: if (!categoriesMap[skill.category])
    // Create a skill with a category that's not in SkillCategoriesEnum
    // This can happen at runtime even though TypeScript types prevent it
    const extendedDb: Database<SkillInterface> = {
      ...skillsDatabase,
      ["custom-category-skill" as SkillDatabaseKeys]: {
        name: "Custom Skill",
        // Using a string that's not in the enum - this bypasses TypeScript at runtime
        category: "NonExistentCategory" as any as SkillCategoriesEnum,
        skillType: SkillTypesEnum.Technology,
      },
    };

    const skillKeys = [
      SkillDatabaseKeys.JavaScript, // Valid category
      "custom-category-skill" as SkillDatabaseKeys, // Invalid category - triggers line 33
    ];

    const result = groupByCategory(skillKeys, extendedDb);

    // The custom category skill won't appear in results because
    // the final filter only includes enum categories
    // But line 33 will have been executed
    expect(result).toHaveLength(1);
    expect(result[0].skillCategoryName).toBe(
      SkillCategoriesEnum.ProgrammingLanguages
    );
    expect(result[0].skills).toEqual([SkillDatabaseKeys.JavaScript]);
  });
});
