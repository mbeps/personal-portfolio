import { describe, expect, it } from "vitest";
import type CourseInterface from "@/database/courses/CourseInterface";
import type ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import type Database from "@/interfaces/Database";
import findCourseKeyForModule from "@/lib/material/course/findCourseKeyForModule";

const mockCoursesDatabase: Database<CourseInterface> = {
  "computer-science-bsc": {
    name: "BSc Computer Science",
    category: "Undergraduate",
    skills: [],
    startYear: 2019,
    endYear: 2022,
    university: "Brunel University London",
    logo: "/logos/brunel.png",
    modules: [
      "software-engineering" as ModuleDatabaseKeys,
      "algorithms-and-complexity" as ModuleDatabaseKeys,
      "databases" as ModuleDatabaseKeys,
    ],
  },
  "artificial-intelligence-msc": {
    name: "MSc Artificial Intelligence",
    category: "Postgraduate",
    skills: [],
    startYear: 2022,
    endYear: 2023,
    university: "Queen Mary University of London",
    logo: "/logos/qmul.png",
    modules: [
      "deep-learning" as ModuleDatabaseKeys,
      "natural-language-processing" as ModuleDatabaseKeys,
    ],
  },
  "empty-course": {
    name: "Empty Course",
    category: "Short Course",
    skills: [],
    startYear: 2023,
    endYear: 2023,
    university: "Online",
    logo: "/logos/online.png",
    modules: [],
  },
};

describe("findCourseKeyForModule", () => {
  it("should return the matching course key when a module is found", () => {
    const result = findCourseKeyForModule(
      "software-engineering" as ModuleDatabaseKeys,
      mockCoursesDatabase,
    );
    expect(result).toBe("computer-science-bsc");
  });

  it("should find modules belonging to a second course", () => {
    const result = findCourseKeyForModule(
      "deep-learning" as ModuleDatabaseKeys,
      mockCoursesDatabase,
    );
    expect(result).toBe("artificial-intelligence-msc");
  });

  it("should return null when the module key is not in any course", () => {
    const result = findCourseKeyForModule(
      "non-existent-module" as ModuleDatabaseKeys,
      mockCoursesDatabase,
    );
    expect(result).toBeNull();
  });

  it("should return null for an empty courses database", () => {
    const result = findCourseKeyForModule(
      "software-engineering" as ModuleDatabaseKeys,
      {},
    );
    expect(result).toBeNull();
  });

  it("should return null when courses exist but have empty module arrays", () => {
    const emptyCourses: Database<CourseInterface> = {
      course1: {
        ...mockCoursesDatabase["empty-course"],
        modules: [],
      },
    };
    const result = findCourseKeyForModule(
      "software-engineering" as ModuleDatabaseKeys,
      emptyCourses,
    );
    expect(result).toBeNull();
  });
});
