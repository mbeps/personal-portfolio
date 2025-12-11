/// <reference types="vitest/globals" />
import getSkillsDatabaseFromKeys from "@/lib/actions/skills/get/getSkillsDatabaseFromKeys";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import type SkillInterface from "@/database/skills/SkillInterface";
import type Database from "@/interfaces/Database";
import { describe, expect, test } from "vitest";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

describe("getSkillsDatabaseFromKeys", () => {
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
  };

  test("should return skills that exist in the database", () => {
    const skillKeys = [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python];
    const result = getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

    expect(result).toEqual({
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
    });
  });

  test("should skip skills that don't exist in the database", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      "non-existent-skill" as SkillDatabaseKeys,
      SkillDatabaseKeys.Python,
    ];
    const result = getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

    // Should only include existing skills
    expect(result).toEqual({
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
    });
    expect(result["non-existent-skill" as SkillDatabaseKeys]).toBeUndefined();
  });

  test("should return empty object when no skills exist", () => {
    const skillKeys = [
      "non-existent-1" as SkillDatabaseKeys,
      "non-existent-2" as SkillDatabaseKeys,
    ];
    const result = getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

    expect(result).toEqual({});
  });

  test("should return empty object when no skill keys provided", () => {
    const skillKeys: SkillDatabaseKeys[] = [];
    const result = getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

    expect(result).toEqual({});
  });

  test("should handle all skills from the database", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJS,
    ];
    const result = getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

    expect(Object.keys(result)).toHaveLength(3);
    expect(result).toEqual(skillsDatabase);
  });

  test("should handle mix of existing and non-existing skills", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      "fake-skill-1" as SkillDatabaseKeys,
      SkillDatabaseKeys.ReactJS,
      "fake-skill-2" as SkillDatabaseKeys,
    ];
    const result = getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

    expect(Object.keys(result)).toHaveLength(2);
    expect(result[SkillDatabaseKeys.JavaScript]).toBeDefined();
    expect(result[SkillDatabaseKeys.ReactJS]).toBeDefined();
    expect(result["fake-skill-1" as SkillDatabaseKeys]).toBeUndefined();
    expect(result["fake-skill-2" as SkillDatabaseKeys]).toBeUndefined();
  });

  test("should handle skills with undefined values in database", () => {
    const dbWithUndefined: Database<SkillInterface> = {
      [SkillDatabaseKeys.JavaScript]: {
        name: "JavaScript",
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
      },
      [SkillDatabaseKeys.Python]: undefined as any,
    };

    const skillKeys = [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python];
    const result = getSkillsDatabaseFromKeys(skillKeys, dbWithUndefined);

    // Should only include skills that have truthy values
    expect(result).toEqual({
      [SkillDatabaseKeys.JavaScript]: {
        name: "JavaScript",
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
      },
    });
    expect(result[SkillDatabaseKeys.Python]).toBeUndefined();
  });

  test("should handle skills with null values in database", () => {
    const dbWithNull: Database<SkillInterface> = {
      [SkillDatabaseKeys.JavaScript]: {
        name: "JavaScript",
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
      },
      [SkillDatabaseKeys.Python]: null as any,
    };

    const skillKeys = [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python];
    const result = getSkillsDatabaseFromKeys(skillKeys, dbWithNull);

    // Should only include skills that have truthy values
    expect(result).toEqual({
      [SkillDatabaseKeys.JavaScript]: {
        name: "JavaScript",
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
      },
    });
    expect(result[SkillDatabaseKeys.Python]).toBeUndefined();
  });

  test("should preserve skill data integrity", () => {
    const skillKeys = [SkillDatabaseKeys.ReactJS];
    const result = getSkillsDatabaseFromKeys(skillKeys, skillsDatabase);

    // The returned skill should be the exact same reference
    expect(result[SkillDatabaseKeys.ReactJS]).toBe(
      skillsDatabase[SkillDatabaseKeys.ReactJS]
    );
  });
});
