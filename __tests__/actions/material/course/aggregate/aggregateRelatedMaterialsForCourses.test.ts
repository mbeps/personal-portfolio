/// <reference types="vitest/globals" />
import aggregateRelatedMaterialsForCourses from "@/actions/material/course/aggregate/aggregateRelatedMaterialsForCourses";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import type CourseInterface from "@/database/courses/CourseInterface";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import type ModuleInterface from "@/database/modules/ModuleInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import type Database from "@/interfaces/Database";
import ModuleYearGroupsEnum from "@/enums/module/ModuleYearGroupsEnum";
import { describe, expect, test } from "vitest";

describe("aggregateRelatedMaterialsForCourses", () => {
  test("combines related materials from courses and their modules without duplicates", () => {
    const coursesDatabase: Database<CourseInterface> = {
      [CourseDatabaseKeys.RHUL_ComputerScience]: {
        name: "Computer Science",
        skills: [],
        category: "course",
        modules: [
          ModuleDatabaseKeys.RHUL_SoftwareEngineering,
          ModuleDatabaseKeys.RHUL_TeamProject,
        ],
        startYear: 2020,
        endYear: 2023,
        university: "Royal Holloway",
        logo: "/logos/rhul.png",
        relatedMaterials: ["blog-1"],
      },
    };

    const modulesDatabase: Database<ModuleInterface> = {
      [ModuleDatabaseKeys.RHUL_SoftwareEngineering]: {
        name: "Software Engineering",
        skills: [SkillDatabaseKeys.JavaScript],
        category: ModuleYearGroupsEnum.Year2,
        learningOutcomes: [],
        parentCourse: CourseDatabaseKeys.RHUL_ComputerScience,
        relatedMaterials: ["blog-1", "project-2"],
      },
      [ModuleDatabaseKeys.RHUL_TeamProject]: {
        name: "Team Project",
        skills: [SkillDatabaseKeys.ReactJS],
        category: ModuleYearGroupsEnum.Year2,
        learningOutcomes: [],
        parentCourse: CourseDatabaseKeys.RHUL_ComputerScience,
        relatedMaterials: ["project-2", "project-3"],
      },
    };

    const result = aggregateRelatedMaterialsForCourses(
      coursesDatabase,
      modulesDatabase
    );

    expect(
      result[CourseDatabaseKeys.RHUL_ComputerScience].relatedMaterials
    ).toEqual(["blog-1", "project-2", "project-3"]);
  });

  test("handles courses without existing related materials and missing module data", () => {
    const coursesDatabase: Database<CourseInterface> = {
      [CourseDatabaseKeys.KCL_ArtificialIntelligence]: {
        name: "Artificial Intelligence",
        skills: [SkillDatabaseKeys.MachineLearning],
        category: "course",
        modules: [
          ModuleDatabaseKeys.RHUL_OperatingSystems,
          ModuleDatabaseKeys.RHUL_SoftwareDesign,
        ],
        startYear: 2023,
        endYear: 2024,
        university: "KCL",
        logo: "/logos/kcl.png",
      },
    };

    const modulesDatabase: Database<ModuleInterface> = {
      [ModuleDatabaseKeys.RHUL_OperatingSystems]: {
        name: "Operating Systems",
        skills: [SkillDatabaseKeys.C],
        category: ModuleYearGroupsEnum.Year2,
        learningOutcomes: [],
        parentCourse: CourseDatabaseKeys.RHUL_ComputerScience,
      },
    };

    const result = aggregateRelatedMaterialsForCourses(
      coursesDatabase,
      modulesDatabase
    );

    expect(
      result[CourseDatabaseKeys.KCL_ArtificialIntelligence].relatedMaterials
    ).toEqual([]);
  });
});
