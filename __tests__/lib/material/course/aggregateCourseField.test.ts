import { describe, expect, it } from "vitest";
import type CourseInterface from "@/database/courses/CourseInterface";
import type ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import type ModuleInterface from "@/database/modules/ModuleInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import ModuleYearGroupsEnum from "@/enums/module/ModuleYearGroupsEnum";
import type Database from "@/interfaces/Database";
import aggregateCourseField from "@/lib/material/course/aggregate/aggregateCourseField";

const mockModulesDatabase: Database<ModuleInterface> = {
  mod1: {
    name: "Module 1",
    category: ModuleYearGroupsEnum.Year1,
    parentCourse: "course1" as any,
    learningOutcomes: [],
    skills: [SkillDatabaseKeys.Python, SkillDatabaseKeys.JavaScript],
  },
  mod2: {
    name: "Module 2",
    category: ModuleYearGroupsEnum.Year1,
    parentCourse: "course1" as any,
    learningOutcomes: [],
    skills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.TypeScript],
  },
  mod3: {
    name: "Module 3",
    category: ModuleYearGroupsEnum.Year2,
    parentCourse: "course2" as any,
    learningOutcomes: [],
    skills: [],
  },
};

const mockCoursesDatabase: Database<CourseInterface> = {
  course1: {
    name: "Course 1",
    category: "Undergraduate",
    skills: [SkillDatabaseKeys.ReactJs],
    startYear: 2020,
    endYear: 2023,
    university: "University A",
    logo: "/logos/a.png",
    modules: ["mod1" as ModuleDatabaseKeys, "mod2" as ModuleDatabaseKeys],
  },
  course2: {
    name: "Course 2",
    category: "Postgraduate",
    skills: [],
    startYear: 2023,
    endYear: 2024,
    university: "University B",
    logo: "/logos/b.png",
    modules: [
      "mod3" as ModuleDatabaseKeys,
      "non-existent-mod" as ModuleDatabaseKeys,
    ],
  },
  courseEmpty: {
    name: "Empty Course",
    category: "Short Course",
    skills: [SkillDatabaseKeys.Docker],
    startYear: 2024,
    endYear: 2024,
    university: "University C",
    logo: "/logos/c.png",
    modules: [],
  },
};

describe("aggregateCourseField", () => {
  it("should aggregate and deduplicate values from modules into the course", () => {
    const result = aggregateCourseField<SkillDatabaseKeys>(
      mockCoursesDatabase,
      mockModulesDatabase,
      (course) => course.skills,
      (module) => module.skills,
      (course, values) => ({ ...course, skills: values }),
    );

    expect(result.course1.skills).toEqual([
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
    ]);
  });

  it("should gracefully ignore module keys that do not exist in modulesDatabase", () => {
    const result = aggregateCourseField<SkillDatabaseKeys>(
      mockCoursesDatabase,
      mockModulesDatabase,
      (course) => course.skills,
      (module) => module.skills,
      (course, values) => ({ ...course, skills: values }),
    );

    expect(result.course2.skills).toEqual([]);
  });

  it("should preserve existing course values when course has no modules", () => {
    const result = aggregateCourseField<SkillDatabaseKeys>(
      mockCoursesDatabase,
      mockModulesDatabase,
      (course) => course.skills,
      (module) => module.skills,
      (course, values) => ({ ...course, skills: values }),
    );

    expect(result.courseEmpty.skills).toEqual([SkillDatabaseKeys.Docker]);
  });

  it("should return an empty database when coursesDatabase is empty", () => {
    const result = aggregateCourseField<SkillDatabaseKeys>(
      {},
      mockModulesDatabase,
      (course) => course.skills,
      (module) => module.skills,
      (course, values) => ({ ...course, skills: values }),
    );

    expect(result).toEqual({});
  });

  it("should not mutate the original coursesDatabase", () => {
    const originalCourse1Skills = [...mockCoursesDatabase.course1.skills];

    aggregateCourseField<SkillDatabaseKeys>(
      mockCoursesDatabase,
      mockModulesDatabase,
      (course) => course.skills,
      (module) => module.skills,
      (course, values) => ({ ...course, skills: values }),
    );

    expect(mockCoursesDatabase.course1.skills).toEqual(originalCourse1Skills);
  });
});
