/// <reference types="vitest/globals" />
import aggregateSkillsForCourses from "@/lib/actions/material/course/aggregate/aggregateSkillsForCourses";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import type CourseInterface from "@/database/courses/CourseInterface";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import type ModuleInterface from "@/database/modules/ModuleInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import type Database from "@/interfaces/Database";
import ModuleYearGroupsEnum from "@/enums/module/ModuleYearGroupsEnum";
import { describe, expect, test } from "vitest";

describe("aggregateSkillsForCourses", () => {
  test("merges skills from modules and removes duplicates", () => {
    const coursesDatabase: Database<CourseInterface> = {
      [CourseDatabaseKeys.RHUL_ComputerScience]: {
        name: "Computer Science",
        skills: [SkillDatabaseKeys.Python],
        category: "course",
        modules: [
          ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming1,
          ModuleDatabaseKeys.KCL_DataMining,
        ],
        startYear: 2020,
        endYear: 2023,
        university: "Royal Holloway",
        logo: "/logos/rhul.png",
      },
    };

    const modulesDatabase: Database<ModuleInterface> = {
      [ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming1]: {
        name: "OOP 1",
        skills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.Python],
        category: ModuleYearGroupsEnum.Year1,
        learningOutcomes: [],
        parentCourse: CourseDatabaseKeys.RHUL_ComputerScience,
      },
      [ModuleDatabaseKeys.KCL_DataMining]: {
        name: "Data Mining",
        skills: [SkillDatabaseKeys.Pandas],
        category: ModuleYearGroupsEnum.Year2,
        learningOutcomes: [],
        parentCourse: CourseDatabaseKeys.KCL_ArtificialIntelligence,
      },
    };

    const result = aggregateSkillsForCourses(coursesDatabase, modulesDatabase);
    const aggregatedCourse =
      result[CourseDatabaseKeys.RHUL_ComputerScience];

    expect(aggregatedCourse.skills).toEqual([
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Pandas,
    ]);
    expect(aggregatedCourse).not.toBe(
      coursesDatabase[CourseDatabaseKeys.RHUL_ComputerScience]
    );
  });

  test("handles missing module definitions without altering the course skills", () => {
    const coursesDatabase: Database<CourseInterface> = {
      [CourseDatabaseKeys.KCL_ArtificialIntelligence]: {
        name: "Artificial Intelligence",
        skills: [SkillDatabaseKeys.MachineLearning],
        category: "course",
        modules: [ModuleDatabaseKeys.RHUL_MachineFundamentals],
        startYear: 2023,
        endYear: 2024,
        university: "KCL",
        logo: "/logos/kcl.png",
      },
    };

    const modulesDatabase: Database<ModuleInterface> = {};

    const result = aggregateSkillsForCourses(coursesDatabase, modulesDatabase);

    expect(
      result[CourseDatabaseKeys.KCL_ArtificialIntelligence].skills
    ).toEqual([SkillDatabaseKeys.MachineLearning]);
  });
});
