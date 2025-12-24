/// <reference types="vitest/globals" />
import addNestedSkillsMaterialList from "@/lib/material/addNestedSkillsMaterialList";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import type MaterialInterface from "@/database/materials/MaterialInterface";
import type SkillInterface from "@/database/skills/SkillInterface";
import type Database from "@/interfaces/Database";
import { describe, expect, test } from "vitest";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

describe("addNestedSkillsMaterialList", () => {
  const skillsDatabase: Database<SkillInterface> = {
    [SkillDatabaseKeys.JavaScript]: {
      name: "JavaScript",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [SkillDatabaseKeys.ReactJs],
    },
    [SkillDatabaseKeys.ReactJs]: {
      name: "React",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Python]: {
      name: "Python",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [SkillDatabaseKeys.Django],
    },
    [SkillDatabaseKeys.Django]: {
      name: "Django",
      category: SkillCategoriesEnum.BackEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Css]: {
      name: "CSS",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.MachineLearning]: {
      name: "Machine Learning",
      category: SkillCategoriesEnum.ArtificialIntelligence,
      skillType: SkillTypesEnum.Technical,
    },
  };

  test("should add related skills to a material", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        skills: [SkillDatabaseKeys.JavaScript],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      []
    );
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
      ])
    );
  });

  test("should not add skills from ignored categories", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        skills: [SkillDatabaseKeys.JavaScript],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      [SkillCategoriesEnum.FrontEndWebDevelopment]
    );
    expect(result.project1.skills).toEqual([SkillDatabaseKeys.JavaScript]);
  });

  test("should only add skills of a specific type if skillTypeToAdd is provided", () => {
    let materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        skills: [SkillDatabaseKeys.JavaScript],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      [],
      SkillTypesEnum.Technology
    );
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
      ])
    );

    materialsDatabase = {
      project1: {
        name: "Project 1",
        skills: [SkillDatabaseKeys.JavaScript],
        category: "project",
      },
    };

    const result2 = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      [],
      SkillTypesEnum.Technical
    );
    expect(result2.project1.skills).toEqual([SkillDatabaseKeys.JavaScript]);
  });

  test("should only check skills of a specific type if skillTypeToCheck is provided", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        skills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Css],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      [],
      undefined,
      SkillTypesEnum.Technology
    );
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
        SkillDatabaseKeys.Css,
      ])
    );
  });

  test("should not add duplicate skills", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        skills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.ReactJs],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      []
    );
    expect(result.project1.skills).toHaveLength(2);
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
      ])
    );
  });

  test("should handle materials with no skills", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      project1: { name: "Project 1", skills: [], category: "project" },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      []
    );
    expect(result.project1.skills).toEqual([]);
  });

  test("should handle skills with no related skills", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        skills: [SkillDatabaseKeys.ReactJs],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      []
    );
    expect(result.project1.skills).toEqual([SkillDatabaseKeys.ReactJs]);
  });

  test("should handle an empty materials database", () => {
    const materialsDatabase: Database<MaterialInterface> = {};
    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      []
    );
    expect(result).toEqual({});
  });
});
