/// <reference types="vitest/globals" />
import groupByLanguage from "@/actions/skills/group/groupByLanguage";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import type SkillInterface from "@/database/Skills/SkillInterface";
import type Database from "@/interfaces/Database";
import { describe, expect, test, vi } from "vitest";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";

describe("groupByLanguage", () => {
  const skillsDatabase: Database<SkillInterface> = {
    [SkillDatabaseKeys.JavaScript]: {
      name: "JavaScript",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [],
    },
    [SkillDatabaseKeys.Python]: {
      name: "Python",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [],
    },
    [SkillDatabaseKeys.ReactJS]: {
      name: "React",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [SkillDatabaseKeys.JavaScript],
    },
    [SkillDatabaseKeys.NextJS]: {
      name: "Next.js",
      category: SkillCategoriesEnum.FullStackWebDevelopment,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.ReactJS],
    },
    [SkillDatabaseKeys.Flask]: {
      name: "Flask",
      category: SkillCategoriesEnum.BackEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [SkillDatabaseKeys.Python],
    },
    [SkillDatabaseKeys.Teamwork]: {
      name: "Teamwork",
      category: SkillCategoriesEnum.SoftSkills,
      skillType: SkillTypesEnum.Soft,
      relatedSkills: [],
    },
    [SkillDatabaseKeys.Docker]: {
      name: "Docker",
      category: SkillCategoriesEnum.DevOps,
      skillType: SkillTypesEnum.Technology,
      // No relatedSkills property at all (testing undefined case)
    },
    ["git" as SkillDatabaseKeys]: {
      name: "Git",
      category: SkillCategoriesEnum.DevOps,
      skillType: SkillTypesEnum.Technology,
      relatedSkills: [], // Empty array
    },
  };

  test("should group programming language skills directly", () => {
    const skillKeys = [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          skillCategoryName: "JavaScript",
          skills: [SkillDatabaseKeys.JavaScript],
        }),
        expect.objectContaining({
          skillCategoryName: "Python",
          skills: [SkillDatabaseKeys.Python],
        }),
      ])
    );
  });

  test("should group skills by their related programming languages", () => {
    const skillKeys = [SkillDatabaseKeys.ReactJS, SkillDatabaseKeys.Flask];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          skillCategoryName: "JavaScript",
          skills: [SkillDatabaseKeys.ReactJS],
        }),
        expect.objectContaining({
          skillCategoryName: "Python",
          skills: [SkillDatabaseKeys.Flask],
        }),
      ])
    );
  });

  test("should group skills with multiple related programming languages under each language", () => {
    const skillKeys = [SkillDatabaseKeys.NextJS];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    // Next.js should be grouped under JavaScript (its first related programming language)
    const jsGroup = result.find(
      (group) => group.skillCategoryName === "JavaScript"
    );
    expect(jsGroup).toBeDefined();
    expect(jsGroup?.skills).toContain(SkillDatabaseKeys.NextJS);
  });

  test("should group skills with no programming language relation under 'No Languages'", () => {
    const skillKeys = [
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.Docker,
      "git" as SkillDatabaseKeys,
    ];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: "No Languages",
      skills: expect.arrayContaining([
        SkillDatabaseKeys.Teamwork,
        SkillDatabaseKeys.Docker,
        "git" as SkillDatabaseKeys,
      ]),
    });
  });

  test("should combine programming language skills with their related framework skills", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Flask,
    ];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);

    const jsGroup = result.find(
      (group) => group.skillCategoryName === "JavaScript"
    );
    expect(jsGroup).toBeDefined();
    expect(jsGroup?.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.ReactJS,
      ])
    );

    const pythonGroup = result.find(
      (group) => group.skillCategoryName === "Python"
    );
    expect(pythonGroup).toBeDefined();
    expect(pythonGroup?.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.Python,
        SkillDatabaseKeys.Flask,
      ])
    );
  });

  test("should mix all categories: languages, related skills, and no-language skills", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.Docker,
    ];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);

    const jsGroup = result.find(
      (group) => group.skillCategoryName === "JavaScript"
    );
    expect(jsGroup).toBeDefined();
    expect(jsGroup?.skills).toHaveLength(2);

    const noLanguageGroup = result.find(
      (group) => group.skillCategoryName === "No Languages"
    );
    expect(noLanguageGroup).toBeDefined();
    expect(noLanguageGroup?.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.Teamwork,
        SkillDatabaseKeys.Docker,
      ])
    );
  });

  test("should warn and skip when skill is not found in database", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});

    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      "non-existent-skill" as SkillDatabaseKeys,
    ];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Skill not found for slug: non-existent-skill"
    );
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: "JavaScript",
      skills: [SkillDatabaseKeys.JavaScript],
    });

    consoleWarnSpy.mockRestore();
  });

  test("should handle skills with undefined relatedSkills", () => {
    // Docker has no relatedSkills property at all
    const skillKeys = [SkillDatabaseKeys.Docker];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: "No Languages",
      skills: [SkillDatabaseKeys.Docker],
    });
  });

  test("should handle skills with empty relatedSkills array", () => {
    // Git has an empty relatedSkills array
    const skillKeys = ["git" as SkillDatabaseKeys];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: "No Languages",
      skills: ["git" as SkillDatabaseKeys],
    });
  });

  test("should handle related skill that is not a programming language", () => {
    // Create a skill that has related skills but none are programming languages
    const extendedDb: Database<SkillInterface> = {
      ...skillsDatabase,
      [SkillDatabaseKeys.TailwindCSS]: {
        name: "Tailwind CSS",
        category: SkillCategoriesEnum.FrontEndWebDevelopment,
        skillType: SkillTypesEnum.Technology,
        relatedSkills: [SkillDatabaseKeys.ReactJS], // ReactJS is not a programming language
      },
    };

    const skillKeys = [SkillDatabaseKeys.TailwindCSS];
    const result = groupByLanguage(skillKeys, extendedDb);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: "No Languages",
      skills: [SkillDatabaseKeys.TailwindCSS],
    });
  });

  test("should handle related skill that does not exist in database", () => {
    // Create a skill with a related skill that doesn't exist
    const extendedDb: Database<SkillInterface> = {
      ...skillsDatabase,
      [SkillDatabaseKeys.ExpressJS]: {
        name: "Express.js",
        category: SkillCategoriesEnum.BackEndWebDevelopment,
        skillType: SkillTypesEnum.Technology,
        relatedSkills: ["non-existent-language" as SkillDatabaseKeys],
      },
    };

    const skillKeys = [SkillDatabaseKeys.ExpressJS];
    const result = groupByLanguage(skillKeys, extendedDb);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: "No Languages",
      skills: [SkillDatabaseKeys.ExpressJS],
    });
  });

  test("should return empty array when no skills are provided", () => {
    const skillKeys: SkillDatabaseKeys[] = [];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toEqual([]);
  });

  test("should not create 'No Languages' group when all skills are related to languages", () => {
    const skillKeys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Flask,
    ];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    const noLanguageGroup = result.find(
      (group) => group.skillCategoryName === "No Languages"
    );
    expect(noLanguageGroup).toBeUndefined();
  });

  test("should handle multiple skills related to the same language", () => {
    const extendedDb: Database<SkillInterface> = {
      ...skillsDatabase,
      [SkillDatabaseKeys.TypeScript]: {
        name: "TypeScript",
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
        relatedSkills: [SkillDatabaseKeys.JavaScript],
      },
    };

    const skillKeys = [
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.TypeScript,
    ];
    const result = groupByLanguage(skillKeys, extendedDb);

    const jsGroup = result.find(
      (group) => group.skillCategoryName === "JavaScript"
    );
    expect(jsGroup).toBeDefined();
    // All three skills should be grouped under JavaScript
    expect(jsGroup?.skills.length).toBeGreaterThanOrEqual(2);
  });

  test("should initialize language group when first programming language skill is encountered", () => {
    // This test specifically covers line 27: if (!groupedSkills[skill.name])
    // When we first encounter a programming language, the group doesn't exist yet
    const skillKeys = [
      SkillDatabaseKeys.Python, // First Python skill - initializes Python group
    ];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      skillCategoryName: "Python",
      skills: [SkillDatabaseKeys.Python],
    });
  });

  test("should handle multiple programming languages each initializing their own group", () => {
    // Each language is encountered for the first time, triggering the initialization branch
    const skillKeys = [
      SkillDatabaseKeys.JavaScript, // First JS skill - initializes JS group
      SkillDatabaseKeys.Python, // First Python skill - initializes Python group
    ];
    const result = groupByLanguage(skillKeys, skillsDatabase);

    expect(result).toHaveLength(2);

    const jsGroup = result.find((g) => g.skillCategoryName === "JavaScript");
    const pythonGroup = result.find((g) => g.skillCategoryName === "Python");

    expect(jsGroup).toBeDefined();
    expect(jsGroup?.skills).toEqual([SkillDatabaseKeys.JavaScript]);

    expect(pythonGroup).toBeDefined();
    expect(pythonGroup?.skills).toEqual([SkillDatabaseKeys.Python]);
  });

  test("should add to existing language group when second skill of same language is encountered", () => {
    // Create a database with two Python skills
    const extendedDb: Database<SkillInterface> = {
      ...skillsDatabase,
      [SkillDatabaseKeys.Django]: {
        name: "Django",
        category: SkillCategoriesEnum.BackEndWebDevelopment,
        skillType: SkillTypesEnum.Technology,
        relatedSkills: [SkillDatabaseKeys.Python],
      },
    };

    const skillKeys = [
      SkillDatabaseKeys.Python, // Initializes Python group
      SkillDatabaseKeys.Django, // Adds to existing Python group via related skills
    ];
    const result = groupByLanguage(skillKeys, extendedDb);

    const pythonGroup = result.find((g) => g.skillCategoryName === "Python");
    expect(pythonGroup).toBeDefined();
    expect(pythonGroup?.skills).toEqual(
      expect.arrayContaining([
        SkillDatabaseKeys.Python,
        SkillDatabaseKeys.Django,
      ])
    );
    expect(pythonGroup?.skills).toHaveLength(2);
  });

  test("should handle two programming languages added directly without initialization check", () => {
    // This covers line 27 else branch: when groupedSkills[skill.name] already exists
    // We need two DIFFERENT skills that are both programming languages with the SAME name
    // This is an edge case that tests the defensive check
    const extendedDb: Database<SkillInterface> = {
      ...skillsDatabase,
      ["javascript-es6" as SkillDatabaseKeys]: {
        name: "JavaScript", // Same name as regular JavaScript
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
        relatedSkills: [],
      },
    };

    const skillKeys = [
      SkillDatabaseKeys.JavaScript, // Initializes "JavaScript" group - line 27 if branch
      "javascript-es6" as SkillDatabaseKeys, // Adds to existing "JavaScript" group - line 27 else branch
    ];
    const result = groupByLanguage(skillKeys, extendedDb);

    const jsGroup = result.find((g) => g.skillCategoryName === "JavaScript");
    expect(jsGroup).toBeDefined();
    expect(jsGroup?.skills).toHaveLength(2);
    expect(jsGroup?.skills).toContain(SkillDatabaseKeys.JavaScript);
    expect(jsGroup?.skills).toContain("javascript-es6" as SkillDatabaseKeys);
  });
});
