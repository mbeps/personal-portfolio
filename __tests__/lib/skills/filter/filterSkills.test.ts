import { describe, expect, it } from "vitest";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import type SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import type Database from "@/interfaces/Database";
import type ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import filterCategoriesFromSkills from "@/lib/skills/filter/filterCategoriesFromSkills";
import filterNonEmptySkillCategories from "@/lib/skills/filter/filterNonEmptySkillCategories";
import { filterSkillSlugsExcludingCategory } from "@/lib/skills/filter/filterSkillSlugsExcludingCategory";
import filterSkillsByCategory from "@/lib/skills/filter/filterSkillsByCategory";
import filterSkillsByType from "@/lib/skills/filter/filterSkillsByType";
import hasAnySkills from "@/lib/skills/hasAnySkills";

const mockSkillsDatabase: Database<SkillInterface> = {
  [SkillDatabaseKeys.Python]: {
    name: "Python",
    category: SkillCategoriesEnum.ProgrammingLanguages,
    skillType: SkillTypesEnum.Technology,
  },
  [SkillDatabaseKeys.JavaScript]: {
    name: "JavaScript",
    category: SkillCategoriesEnum.ProgrammingLanguages,
    skillType: SkillTypesEnum.Technology,
  },
  [SkillDatabaseKeys.ReactJs]: {
    name: "React",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Technology,
  },
  [SkillDatabaseKeys.Docker]: {
    name: "Docker",
    category: SkillCategoriesEnum.DevOps,
    skillType: SkillTypesEnum.Technology,
  },
  [SkillDatabaseKeys.Mathematics]: {
    name: "Mathematics",
    category: SkillCategoriesEnum.Mathematics,
    skillType: SkillTypesEnum.Technical,
  },
  [SkillDatabaseKeys.Testing]: {
    name: "Testing",
    category: SkillCategoriesEnum.Testing,
    skillType: SkillTypesEnum.Technical,
  },
};

describe("filterCategoriesFromSkills", () => {
  it("should filter out skills belonging to ignored categories", () => {
    const ignored = [
      SkillCategoriesEnum.ProgrammingLanguages,
      SkillCategoriesEnum.Mathematics,
    ];
    const result = filterCategoriesFromSkills(mockSkillsDatabase, ignored);

    expect(result).not.toContain(SkillDatabaseKeys.Python);
    expect(result).not.toContain(SkillDatabaseKeys.JavaScript);
    expect(result).not.toContain(SkillDatabaseKeys.Mathematics);
    expect(result).toContain(SkillDatabaseKeys.ReactJs);
    expect(result).toContain(SkillDatabaseKeys.Docker);
    expect(result).toContain(SkillDatabaseKeys.Testing);
  });

  it("should return all skill keys when ignored categories array is empty", () => {
    const result = filterCategoriesFromSkills(mockSkillsDatabase, []);
    expect(result).toEqual(Object.keys(mockSkillsDatabase));
  });

  it("should return an empty array when all skills match ignored categories", () => {
    const allCategories = [
      SkillCategoriesEnum.ProgrammingLanguages,
      SkillCategoriesEnum.FrontEndWebDevelopment,
      SkillCategoriesEnum.DevOps,
      SkillCategoriesEnum.Mathematics,
      SkillCategoriesEnum.Testing,
    ];
    const result = filterCategoriesFromSkills(
      mockSkillsDatabase,
      allCategories,
    );
    expect(result).toEqual([]);
  });

  it("should return an empty array for an empty database", () => {
    const result = filterCategoriesFromSkills({}, [
      SkillCategoriesEnum.ProgrammingLanguages,
    ]);
    expect(result).toEqual([]);
  });
});

describe("filterNonEmptySkillCategories", () => {
  it("should drop grouped categories with 0 skillCategories", () => {
    const groupedSkills: ListOfCategorisedSkillsByTypeInterface[] = [
      {
        title: "Technologies",
        skillCategories: [
          {
            skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
            skills: [SkillDatabaseKeys.Python],
          },
        ],
      },
      {
        title: "Technical Skills",
        skillCategories: [],
      },
    ];

    const result = filterNonEmptySkillCategories(groupedSkills);
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Technologies");
  });

  it("should keep all groups if all have non-empty skillCategories", () => {
    const groupedSkills: ListOfCategorisedSkillsByTypeInterface[] = [
      {
        title: "Technologies",
        skillCategories: [
          {
            skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
            skills: [SkillDatabaseKeys.Python],
          },
        ],
      },
      {
        title: "Technical Skills",
        skillCategories: [
          {
            skillCategoryName: SkillCategoriesEnum.Mathematics,
            skills: [SkillDatabaseKeys.Mathematics],
          },
        ],
      },
    ];

    const result = filterNonEmptySkillCategories(groupedSkills);
    expect(result).toHaveLength(2);
  });

  it("should return an empty array if all groups have empty skillCategories", () => {
    const groupedSkills: ListOfCategorisedSkillsByTypeInterface[] = [
      {
        title: "Group 1",
        skillCategories: [],
      },
      {
        title: "Group 2",
        skillCategories: [],
      },
    ];

    const result = filterNonEmptySkillCategories(groupedSkills);
    expect(result).toEqual([]);
  });

  it("should return an empty array for empty input array", () => {
    expect(filterNonEmptySkillCategories([])).toEqual([]);
  });
});

describe("filterSkillsByCategory", () => {
  it("should return only skill keys that match the specified category", () => {
    const keys = [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Docker,
    ];

    const result = filterSkillsByCategory(
      keys,
      mockSkillsDatabase,
      SkillCategoriesEnum.ProgrammingLanguages,
    );

    expect(result).toEqual([
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.JavaScript,
    ]);
  });

  it("should return an empty array if no skill matches the specified category", () => {
    const keys = [SkillDatabaseKeys.Python, SkillDatabaseKeys.JavaScript];
    const result = filterSkillsByCategory(
      keys,
      mockSkillsDatabase,
      SkillCategoriesEnum.CloudComputing,
    );
    expect(result).toEqual([]);
  });

  it("should return an empty array if input keys array is empty", () => {
    const result = filterSkillsByCategory(
      [],
      mockSkillsDatabase,
      SkillCategoriesEnum.ProgrammingLanguages,
    );
    expect(result).toEqual([]);
  });

  it("should preserve the order of input skill keys", () => {
    const keys = [
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Python,
    ];

    const result = filterSkillsByCategory(
      keys,
      mockSkillsDatabase,
      SkillCategoriesEnum.ProgrammingLanguages,
    );

    expect(result).toEqual([
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,
    ]);
  });
});

describe("filterSkillsByType", () => {
  it("should filter skill keys by the specified skill type", () => {
    const keys = [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Testing,
    ];

    const techResult = filterSkillsByType(
      keys,
      mockSkillsDatabase,
      SkillTypesEnum.Technology,
    );
    expect(techResult).toEqual([
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJs,
    ]);

    const technicalResult = filterSkillsByType(
      keys,
      mockSkillsDatabase,
      SkillTypesEnum.Technical,
    );
    expect(technicalResult).toEqual([
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Testing,
    ]);
  });

  it("should handle skill keys missing from the database gracefully", () => {
    const keys = [
      SkillDatabaseKeys.Python,
      "non-existent-skill" as SkillDatabaseKeys,
    ];

    const result = filterSkillsByType(
      keys,
      mockSkillsDatabase,
      SkillTypesEnum.Technology,
    );
    expect(result).toEqual([SkillDatabaseKeys.Python]);
  });

  it("should return an empty array if no skills match the type", () => {
    const keys = [SkillDatabaseKeys.Mathematics, SkillDatabaseKeys.Testing];
    const result = filterSkillsByType(
      keys,
      mockSkillsDatabase,
      SkillTypesEnum.Technology,
    );
    expect(result).toEqual([]);
  });

  it("should return an empty array for empty skill keys", () => {
    const result = filterSkillsByType(
      [],
      mockSkillsDatabase,
      SkillTypesEnum.Technology,
    );
    expect(result).toEqual([]);
  });
});

describe("filterSkillSlugsExcludingCategory", () => {
  it("should exclude skills with the specified category", () => {
    const keys = [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Docker,
    ];

    const result = filterSkillSlugsExcludingCategory(
      keys,
      mockSkillsDatabase,
      SkillCategoriesEnum.ProgrammingLanguages,
    );

    expect(result).toEqual([
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Docker,
    ]);
  });

  it("should return all keys if the excluded category does not match any skill", () => {
    const keys = [SkillDatabaseKeys.Python, SkillDatabaseKeys.JavaScript];
    const result = filterSkillSlugsExcludingCategory(
      keys,
      mockSkillsDatabase,
      SkillCategoriesEnum.DevOps,
    );
    expect(result).toEqual(keys);
  });

  it("should return an empty array if all skills match the excluded category", () => {
    const keys = [SkillDatabaseKeys.Python, SkillDatabaseKeys.JavaScript];
    const result = filterSkillSlugsExcludingCategory(
      keys,
      mockSkillsDatabase,
      SkillCategoriesEnum.ProgrammingLanguages,
    );
    expect(result).toEqual([]);
  });

  it("should return an empty array for empty keys array", () => {
    const result = filterSkillSlugsExcludingCategory(
      [],
      mockSkillsDatabase,
      SkillCategoriesEnum.ProgrammingLanguages,
    );
    expect(result).toEqual([]);
  });
});

describe("hasAnySkills", () => {
  it("should return false for undefined", () => {
    expect(hasAnySkills(undefined)).toBe(false);
  });

  it("should return false for non-array inputs", () => {
    expect(hasAnySkills(null as unknown as undefined)).toBe(false);
    expect(hasAnySkills({} as unknown as undefined)).toBe(false);
  });

  it("should return false for an empty array", () => {
    expect(hasAnySkills([])).toBe(false);
  });

  it("should return false when groups have empty skillCategories", () => {
    const input: ListOfCategorisedSkillsByTypeInterface[] = [
      {
        title: "Technologies",
        skillCategories: [],
      },
    ];
    expect(hasAnySkills(input)).toBe(false);
  });

  it("should return false when skillCategories have empty skills arrays", () => {
    const input: ListOfCategorisedSkillsByTypeInterface[] = [
      {
        title: "Technologies",
        skillCategories: [
          {
            skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
            skills: [],
          },
        ],
      },
    ];
    expect(hasAnySkills(input)).toBe(false);
  });

  it("should return true when at least one category contains skills", () => {
    const input: ListOfCategorisedSkillsByTypeInterface[] = [
      {
        title: "Technologies",
        skillCategories: [
          {
            skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
            skills: [SkillDatabaseKeys.Python],
          },
        ],
      },
    ];
    expect(hasAnySkills(input)).toBe(true);
  });

  it("should return true if first group is empty but second group contains skills", () => {
    const input: ListOfCategorisedSkillsByTypeInterface[] = [
      {
        title: "Technologies",
        skillCategories: [
          {
            skillCategoryName: SkillCategoriesEnum.ProgrammingLanguages,
            skills: [],
          },
        ],
      },
      {
        title: "Technical Skills",
        skillCategories: [
          {
            skillCategoryName: SkillCategoriesEnum.Mathematics,
            skills: [SkillDatabaseKeys.Mathematics],
          },
        ],
      },
    ];
    expect(hasAnySkills(input)).toBe(true);
  });
});
