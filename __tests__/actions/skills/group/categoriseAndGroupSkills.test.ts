/// <reference types="vitest/globals" />
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import type SkillInterface from "@/database/Skills/SkillInterface";
import type Database from "@/interfaces/Database";
import { describe, expect, test } from "vitest";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";

describe("categoriseAndGroupSkills", () => {
  const skillsDatabase: Database<SkillInterface> = {
    [SkillDatabaseKeys.JavaScript]: {
      name: "JavaScript",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.ReactJS]: {
      name: "React",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Python]: {
      name: "Python",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Teamwork]: {
      name: "Teamwork",
      category: SkillCategoriesEnum.SoftSkills,
      skillType: SkillTypesEnum.Soft,
    },
  };

  test("should categorise and group skills of a specific type", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Teamwork,
    ];
    const result = categoriseAndGroupSkills(
      skillKeys,
      skillsDatabase,
      SkillTypesEnum.Technology,
      "Technologies"
    );

    expect(result.title).toBe("Technologies");
    expect(result.skillCategories).toHaveLength(2);
    expect(result.skillCategories).toEqual(
      expect.arrayContaining([
        {
          skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
          skills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python],
        },
        {
          skillCategoryName: SkillCategoriesEnum.FrontEndWebDevelopment,
          skills: [SkillDatabaseKeys.ReactJS],
        },
      ])
    );
  });

  test("should return an empty array if no skills match the type", () => {
    const skillKeys = [SkillDatabaseKeys.Teamwork];
    const result = categoriseAndGroupSkills(
      skillKeys,
      skillsDatabase,
      SkillTypesEnum.Technology,
      "Technologies"
    );
    expect(result.skillCategories).toEqual([]);
  });

  test("should handle an empty skillKeys array", () => {
    const result = categoriseAndGroupSkills(
      [],
      skillsDatabase,
      SkillTypesEnum.Technology,
      "Technologies"
    );
    expect(result.skillCategories).toEqual([]);
  });

  test("should ignore skill keys that are not in the database", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      "non-existent-skill" as SkillDatabaseKeys,
    ];
    const result = categoriseAndGroupSkills(
      skillKeys,
      skillsDatabase,
      SkillTypesEnum.Technology,
      "Technologies"
    );
    expect(result.skillCategories).toHaveLength(1);
    expect(result.skillCategories[0].skills).toEqual([
      SkillDatabaseKeys.JavaScript,
    ]);
  });
});
