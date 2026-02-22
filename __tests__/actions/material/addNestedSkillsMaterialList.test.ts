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
      [],
    );
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
      ]),
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
      [SkillCategoriesEnum.FrontEndWebDevelopment],
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
      SkillTypesEnum.Technology,
    );
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
      ]),
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
      SkillTypesEnum.Technical,
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
      SkillTypesEnum.Technology,
    );
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
        SkillDatabaseKeys.Css,
      ]),
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
      [],
    );
    expect(result.project1.skills).toHaveLength(2);
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
      ]),
    );
  });

  test("should handle materials with no skills", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      project1: { name: "Project 1", skills: [], category: "project" },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      [],
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
      [],
    );
    expect(result.project1.skills).toEqual([SkillDatabaseKeys.ReactJs]);
  });

  test("should handle an empty materials database", () => {
    const materialsDatabase: Database<MaterialInterface> = {};
    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      [],
    );
    expect(result).toEqual({});
  });

  test("should add only related skills matching skillTypeToAdd constraint", () => {
    // Create a skill database where a parent skill has multiple related skills of different types
    const extendedSkillsDatabase: Database<SkillInterface> = {
      ...skillsDatabase,
      [SkillDatabaseKeys.JavaScript]: {
        name: "JavaScript",
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
        // Multiple related skills with different types
        relatedSkills: [
          SkillDatabaseKeys.ReactJs, // Technology
          SkillDatabaseKeys.MachineLearning, // Technical
        ],
      },
    };

    const materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        skills: [SkillDatabaseKeys.JavaScript],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      extendedSkillsDatabase,
      [],
      SkillTypesEnum.Technology, // Should only add Technology type
    );

    // Should include JS (original) + React (Technology), but NOT MachineLearning (Technical)
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
      ]),
    );
    expect(result.project1.skills).not.toContain(
      SkillDatabaseKeys.MachineLearning,
    );
    expect(result.project1.skills).toHaveLength(2);
  });

  test("skips adding related skills when skill does not match skillTypeToCheck", () => {
    const extendedSkillsDatabase: Database<SkillInterface> = {
      ...skillsDatabase,
      [SkillDatabaseKeys.MachineLearning]: {
        name: "Machine Learning",
        category: SkillCategoriesEnum.ArtificialIntelligence,
        skillType: SkillTypesEnum.Technical, // Different type
        // Has related skills that should NOT be added
        relatedSkills: [SkillDatabaseKeys.Python],
      },
    };

    const materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        // Mix of Technology and Technical skills
        skills: [
          SkillDatabaseKeys.JavaScript, // Technology (matches)
          SkillDatabaseKeys.MachineLearning, // Technical (does NOT match)
        ],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      extendedSkillsDatabase,
      [],
      undefined, // No constraint on type to add
      SkillTypesEnum.Technology, // Only check Technology skills
    );

    // Should include:
    // - JavaScript (original, matches Technology)
    // - ReactJs (related to JavaScript)
    // - MachineLearning (original, but doesn't match so no related skills added)
    // Should NOT include Python (related to MachineLearning which doesn't match)
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
        SkillDatabaseKeys.MachineLearning,
      ]),
    );
    expect(result.project1.skills).not.toContain(SkillDatabaseKeys.Python);
    expect(result.project1.skills).toHaveLength(3);
  });

  test("skips skills whose category is in the ignored list", () => {
    const materialsDatabase: Database<MaterialInterface> = {
      project1: {
        name: "Project 1",
        // Material has a skill whose category will be ignored
        skills: [
          SkillDatabaseKeys.JavaScript, // ProgrammingLanguages category
          SkillDatabaseKeys.ReactJs, // FrontEndWebDevelopment category
        ],
        category: "project",
      },
    };

    const result = addNestedSkillsMaterialList(
      materialsDatabase,
      skillsDatabase,
      [SkillCategoriesEnum.ProgrammingLanguages], // Ignore ProgrammingLanguages
    );

    // JavaScript category is ignored, so its related skills won't be added
    // ReactJs category is NOT ignored, but it has no related skills
    // Both original skills remain
    expect(result.project1.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJs,
      ]),
    );
    expect(result.project1.skills).toHaveLength(2);
  });
});
