import { describe, expect, it } from "vitest";
import ShortDate from "@/class/ShortDate";
import type CertificateInterface from "@/database/certificates/CertificateInterface";
import type MaterialInterface from "@/database/materials/MaterialInterface";
import type ProjectInterface from "@/database/projects/ProjectInterface";
import type RoleInterface from "@/database/roles/RoleInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import type SkillInterface from "@/database/skills/SkillInterface";
import CertificateCategoriesEnum from "@/enums/certificate/CertificateCategoriesEnum";
import CertificateIssuersEnum from "@/enums/certificate/CertificateIssuersEnum";
import ExperienceCategoriesEnum from "@/enums/experience/ExperienceCategoriesEnum";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import ProjectCategoriesEnum from "@/enums/project/ProjectCategoriesEnum";
import ProjectTypeEnum from "@/enums/project/ProjectTypeEnum";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import type Database from "@/interfaces/Database";
import generateFilterOptions from "@/lib/material/filter-options/generateFilterOptions";
import generateFilterOptionsByCategory from "@/lib/material/filter-options/generateFilterOptionsByCategory";
import { generateFilterOptionsByRoleType } from "@/lib/material/filter-options/generateFilterOptionsByRoleType";
import { generateFilterOptionsBySkillCategories } from "@/lib/material/filter-options/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/lib/material/filter-options/generateFilterOptionsBySkillType";
import generateFilterOptionsByType from "@/lib/material/filter-options/generateFilterOptionsByType";
import generateFilterOptionsForProgrammingLanguages from "@/lib/material/filter-options/generateFilterOptionsForProgrammingLanguages";
import generateIssuerFilterOptions from "@/lib/material/filter-options/generateIssuerFilterOptions";

describe("generateFilterOptions", () => {
  it("should always prepend { slug: 'all', entryName: 'All' }", () => {
    const db = { item1: { tag: "React" } };
    const result = generateFilterOptions(db, (item) => ({
      slug: item.tag.toLowerCase(),
      entryName: item.tag,
    }));

    expect(result[0]).toEqual({ slug: "all", entryName: "All" });
    expect(result[1]).toEqual({ slug: "react", entryName: "React" });
  });

  it("should deduplicate options by slug", () => {
    const db = {
      item1: { tag: "React" },
      item2: { tag: "React" },
      item3: { tag: "Vue" },
    };
    const result = generateFilterOptions(db, (item) => ({
      slug: item.tag.toLowerCase(),
      entryName: item.tag,
    }));

    expect(result).toEqual([
      { slug: "all", entryName: "All" },
      { slug: "react", entryName: "React" },
      { slug: "vue", entryName: "Vue" },
    ]);
  });

  it("should handle extractor returning an array of options", () => {
    const db = {
      item1: { tags: ["Node", "Express"] },
      item2: { tags: ["Node", "Nest"] },
    };
    const result = generateFilterOptions(db, (item) =>
      item.tags.map((t) => ({ slug: t.toLowerCase(), entryName: t })),
    );

    expect(result).toEqual([
      { slug: "all", entryName: "All" },
      { slug: "node", entryName: "Node" },
      { slug: "express", entryName: "Express" },
      { slug: "nest", entryName: "Nest" },
    ]);
  });

  it("should sort alphabetically when sort is true", () => {
    const db = {
      item1: { name: "Zebra" },
      item2: { name: "Apple" },
      item3: { name: "Mango" },
    };
    const result = generateFilterOptions(
      db,
      (item) => ({
        slug: item.name.toLowerCase(),
        entryName: item.name,
      }),
      true,
    );

    expect(result).toEqual([
      { slug: "all", entryName: "All" },
      { slug: "apple", entryName: "Apple" },
      { slug: "mango", entryName: "Mango" },
      { slug: "zebra", entryName: "Zebra" },
    ]);
  });

  it("should return only 'All' for an empty database", () => {
    const result = generateFilterOptions({}, (item: any) => ({
      slug: item.id,
      entryName: item.id,
    }));
    expect(result).toEqual([{ slug: "all", entryName: "All" }]);
  });
});

describe("generateFilterOptionsByCategory", () => {
  it("should generate filter options from material categories preserving order", () => {
    const materials: Database<MaterialInterface> = {
      m1: { name: "M1", category: "Web Development", skills: [] },
      m2: { name: "M2", category: "AI & ML", skills: [] },
      m3: { name: "M3", category: "Web Development", skills: [] },
    };

    const result = generateFilterOptionsByCategory(materials);
    expect(result).toEqual([
      { slug: "all", entryName: "All" },
      { slug: "web-development", entryName: "Web Development" },
      { slug: "ai-&-ml", entryName: "AI & ML" },
    ]);
  });
});

describe("generateFilterOptionsByRoleType", () => {
  it("should generate sorted filter options by role type", () => {
    const roles: Database<RoleInterface> = {
      r1: {
        name: "Role 1",
        category: ExperienceCategoriesEnum.Software,
        type: ExperienceTypeEnum.FullTime,
        skills: [],
        startDate: new ShortDate(2020, 1),
        endDate: new ShortDate(2021, 1),
        company: "c1" as any,
      },
      r2: {
        name: "Role 2",
        category: ExperienceCategoriesEnum.Other,
        type: ExperienceTypeEnum.PartTime,
        skills: [],
        startDate: new ShortDate(2021, 1),
        endDate: new ShortDate(2022, 1),
        company: "c2" as any,
      },
    };

    const result = generateFilterOptionsByRoleType(roles);
    expect(result[0]).toEqual({ slug: "all", entryName: "All" });
    // Sorted alphabetically
    expect(result.slice(1)).toEqual([
      { slug: "full-time", entryName: ExperienceTypeEnum.FullTime },
      { slug: "part-time", entryName: ExperienceTypeEnum.PartTime },
    ]);
  });
});

describe("generateFilterOptionsBySkillCategories", () => {
  it("should extract skill categories present in materials and sort them", () => {
    const materials: Database<MaterialInterface> = {
      m1: {
        name: "M1",
        category: "Web",
        skills: [SkillDatabaseKeys.Python, SkillDatabaseKeys.ReactJs],
      },
      m2: {
        name: "M2",
        category: "DevOps",
        skills: [SkillDatabaseKeys.Docker],
      },
    };

    const skills: Database<SkillInterface> = {
      [SkillDatabaseKeys.Python]: {
        name: "Python",
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
    };

    const result = generateFilterOptionsBySkillCategories(materials, skills);
    expect(result[0]).toEqual({ slug: "all", entryName: "All" });
    expect(
      result.find((o) => o.slug === "programming-languages"),
    ).toBeDefined();
    expect(
      result.find((o) => o.slug === "front-end-web-development"),
    ).toBeDefined();
    expect(result.find((o) => o.slug === "devops")).toBeDefined();
  });

  it("should ignore skills not in the skill database", () => {
    const materials: Database<MaterialInterface> = {
      m1: {
        name: "M1",
        category: "Web",
        skills: ["unknown" as SkillDatabaseKeys],
      },
    };
    const skills: Database<SkillInterface> = {};

    const result = generateFilterOptionsBySkillCategories(materials, skills);
    expect(result).toEqual([{ slug: "all", entryName: "All" }]);
  });
});

describe("generateFilterOptionsBySkillType", () => {
  const materials: Database<MaterialInterface> = {
    m1: {
      name: "M1",
      category: "Web",
      skills: [
        SkillDatabaseKeys.Python,
        SkillDatabaseKeys.Testing,
        SkillDatabaseKeys.ReactJs,
      ],
    },
  };

  const skills: Database<SkillInterface> = {
    [SkillDatabaseKeys.Python]: {
      name: "Python",
      category: SkillCategoriesEnum.ProgrammingLanguages,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.ReactJs]: {
      name: "React",
      category: SkillCategoriesEnum.FrontEndWebDevelopment,
      skillType: SkillTypesEnum.Technology,
    },
    [SkillDatabaseKeys.Testing]: {
      name: "Testing",
      category: SkillCategoriesEnum.Testing,
      skillType: SkillTypesEnum.Technical,
    },
  };

  it("should return options matching skillType", () => {
    const result = generateFilterOptionsBySkillType(
      materials,
      skills,
      SkillTypesEnum.Technology,
    );

    expect(result[0]).toEqual({ slug: "all", entryName: "All" });
    const slugs = result.map((r) => r.slug);
    expect(slugs).toContain(SkillDatabaseKeys.Python);
    expect(slugs).toContain(SkillDatabaseKeys.ReactJs);
    expect(slugs).not.toContain(SkillDatabaseKeys.Testing);
  });

  it("should exclude category when excludeCategory is provided", () => {
    const result = generateFilterOptionsBySkillType(
      materials,
      skills,
      SkillTypesEnum.Technology,
      SkillCategoriesEnum.ProgrammingLanguages,
    );

    const slugs = result.map((r) => r.slug);
    expect(slugs).not.toContain(SkillDatabaseKeys.Python);
    expect(slugs).toContain(SkillDatabaseKeys.ReactJs);
  });
});

describe("generateFilterOptionsByType", () => {
  it("should generate options from project type", () => {
    const projects: Database<ProjectInterface> = {
      p1: {
        name: "P1",
        category: ProjectCategoriesEnum.FullStackWebDevelopment,
        type: ProjectTypeEnum.Personal,
        description: "desc",
        skills: [],
      },
      p2: {
        name: "P2",
        category: ProjectCategoriesEnum.FullStackWebDevelopment,
        type: ProjectTypeEnum.Academic,
        description: "desc",
        skills: [],
      },
    };

    const result = generateFilterOptionsByType(projects);
    expect(result).toEqual([
      { slug: "all", entryName: "All" },
      { slug: "personal", entryName: ProjectTypeEnum.Personal },
      { slug: "academic", entryName: ProjectTypeEnum.Academic },
    ]);
  });
});

describe("generateFilterOptionsForProgrammingLanguages", () => {
  it("should generate options only for skills in ProgrammingLanguages category", () => {
    const materials: Database<MaterialInterface> = {
      m1: {
        name: "M1",
        category: "Web",
        skills: [SkillDatabaseKeys.Python, SkillDatabaseKeys.Docker],
      },
    };

    const skills: Database<SkillInterface> = {
      [SkillDatabaseKeys.Python]: {
        name: "Python",
        category: SkillCategoriesEnum.ProgrammingLanguages,
        skillType: SkillTypesEnum.Technology,
      },
      [SkillDatabaseKeys.Docker]: {
        name: "Docker",
        category: SkillCategoriesEnum.DevOps,
        skillType: SkillTypesEnum.Technology,
      },
    };

    const result = generateFilterOptionsForProgrammingLanguages(
      materials,
      skills,
    );
    expect(result).toEqual([
      { slug: "all", entryName: "All" },
      { slug: SkillDatabaseKeys.Python, entryName: "Python" },
    ]);
  });
});

describe("generateIssuerFilterOptions", () => {
  it("should generate sorted options for certificate issuers", () => {
    const certificates: Database<CertificateInterface> = {
      c1: {
        name: "Cert 1",
        issuer: CertificateIssuersEnum.GitHub,
        category: CertificateCategoriesEnum.SoftwareEngineering,
        certificateURL: "https://example.com",
        skills: [],
      },
      c2: {
        name: "Cert 2",
        issuer: CertificateIssuersEnum.Coursera,
        category: CertificateCategoriesEnum.ArtificialIntelligence,
        certificateURL: "https://example.com",
        skills: [],
      },
    };

    const result = generateIssuerFilterOptions(certificates);
    expect(result[0]).toEqual({ slug: "all", entryName: "All" });
    // Sorted alphabetically
    expect(result[1].entryName).toBe(CertificateIssuersEnum.Coursera);
    expect(result[2].entryName).toBe(CertificateIssuersEnum.GitHub);
  });
});
