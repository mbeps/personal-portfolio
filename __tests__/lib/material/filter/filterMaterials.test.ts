import { describe, expect, it } from "vitest";
import type CertificateInterface from "@/database/certificates/CertificateInterface";
import type MaterialInterface from "@/database/materials/MaterialInterface";
import type ProjectInterface from "@/database/projects/ProjectInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import type SkillInterface from "@/database/skills/SkillInterface";
import CertificateCategoriesEnum from "@/enums/certificate/CertificateCategoriesEnum";
import CertificateIssuersEnum from "@/enums/certificate/CertificateIssuersEnum";
import ProjectCategoriesEnum from "@/enums/project/ProjectCategoriesEnum";
import ProjectTypeEnum from "@/enums/project/ProjectTypeEnum";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import type Database from "@/interfaces/Database";
import filterCertificatesByIssuer from "@/lib/material/filter/filterCertificatesByIssuer";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/lib/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/lib/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/lib/material/filter/filterMaterialBySkillCategory";
import filterMaterialKeysByPredicate from "@/lib/material/filter/filterMaterialKeysByPredicate";
import filterProjectsByType from "@/lib/material/filter/filterProjectsByType";

const mockSkillsDatabase: Database<SkillInterface> = {
  [SkillDatabaseKeys.Python]: {
    name: "Python",
    category: SkillCategoriesEnum.ProgrammingLanguages,
    skillType: SkillTypesEnum.Technology,
  },
  [SkillDatabaseKeys.TypeScript]: {
    name: "TypeScript",
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

const mockCertificatesDatabase: Database<CertificateInterface> = {
  cert1: {
    name: "CS Certificate",
    issuer: CertificateIssuersEnum.GitHub,
    category: CertificateCategoriesEnum.SoftwareEngineering,
    certificateURL: "https://example.com/cs",
    skills: [SkillDatabaseKeys.Python],
    archived: false,
  },
  cert2: {
    name: "Machine Learning Specialization",
    issuer: CertificateIssuersEnum.Coursera,
    category: CertificateCategoriesEnum.ArtificialIntelligence,
    certificateURL: "https://example.com/ml",
    skills: [SkillDatabaseKeys.Python],
    archived: true,
  },
  cert3: {
    name: "AWS Certified Developer",
    issuer: CertificateIssuersEnum.Coursera,
    category: CertificateCategoriesEnum.CloudComputing,
    certificateURL: "https://example.com/aws",
    skills: [SkillDatabaseKeys.Docker],
    archived: false,
  },
};

const mockProjectsDatabase: Database<ProjectInterface> = {
  proj1: {
    name: "Portfolio Website",
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    type: ProjectTypeEnum.Personal,
    description: "Personal portfolio",
    skills: [SkillDatabaseKeys.TypeScript, SkillDatabaseKeys.ReactJs],
    archived: false,
  },
  proj2: {
    name: "AI Tooling CLI",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    description: "CLI tool for AI",
    skills: [SkillDatabaseKeys.Python, SkillDatabaseKeys.Docker],
    archived: true,
  },
  proj3: {
    name: "Mobile App",
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    type: ProjectTypeEnum.Personal,
    description: "React Native app",
    skills: [SkillDatabaseKeys.TypeScript],
  },
};

describe("filterCertificatesByIssuer", () => {
  it("should filter certificates matching the given issuer", () => {
    const keys = ["cert1", "cert2", "cert3"];
    const result = filterCertificatesByIssuer(
      CertificateIssuersEnum.Coursera,
      keys,
      mockCertificatesDatabase,
    );
    expect(result).toEqual(["cert2", "cert3"]);
  });

  it("should match issuer regardless of case differences via slug comparison", () => {
    const keys = ["cert1", "cert2", "cert3"];
    const result = filterCertificatesByIssuer(
      "github",
      keys,
      mockCertificatesDatabase,
    );
    expect(result).toEqual(["cert1"]);
  });

  it("should return empty array if no certificate matches the issuer", () => {
    const keys = ["cert1", "cert2", "cert3"];
    const result = filterCertificatesByIssuer(
      "NonExistentIssuer",
      keys,
      mockCertificatesDatabase,
    );
    expect(result).toEqual([]);
  });

  it("should ignore missing keys in certificatesMap", () => {
    const keys = ["nonExistentKey", "cert1"];
    const result = filterCertificatesByIssuer(
      CertificateIssuersEnum.GitHub,
      keys,
      mockCertificatesDatabase,
    );
    expect(result).toEqual(["cert1"]);
  });
});

describe("filterMaterialByArchivedStatus", () => {
  it("should return all existing materials when isArchived is true", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialByArchivedStatus(
      true,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj1", "proj2", "proj3"]);
  });

  it("should return only non-archived materials when isArchived is false", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialByArchivedStatus(
      false,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj1", "proj3"]);
  });

  it("should ignore non-existent keys", () => {
    const keys = ["nonExistentKey", "proj1"];
    const result = filterMaterialByArchivedStatus(
      false,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj1"]);
  });

  it("should return empty array for empty material keys", () => {
    const result = filterMaterialByArchivedStatus(
      false,
      [],
      mockProjectsDatabase,
    );
    expect(result).toEqual([]);
  });
});

describe("filterMaterialByCategory", () => {
  it("should filter materials by category slug", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialByCategory(
      ProjectCategoriesEnum.FullStackWebDevelopment,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj1", "proj3"]);
  });

  it("should match category case-insensitively", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialByCategory(
      "artificial-intelligence-(ai)",
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj2"]);
  });

  it("should return empty array when category does not match", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialByCategory(
      "Unmatched Category",
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual([]);
  });

  it("should ignore missing keys in database", () => {
    const keys = ["nonExistent", "proj2"];
    const result = filterMaterialByCategory(
      ProjectCategoriesEnum.ArtificialIntelligence,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj2"]);
  });
});

describe("filterMaterialBySkillCategory", () => {
  it("should filter materials that include any skill matching the skill category", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialBySkillCategory(
      keys,
      mockProjectsDatabase,
      SkillCategoriesEnum.ProgrammingLanguages,
      mockSkillsDatabase,
    );
    // proj1 has TypeScript, proj2 has Python, proj3 has TypeScript
    expect(result).toEqual(["proj1", "proj2", "proj3"]);
  });

  it("should filter materials for a specialized skill category", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialBySkillCategory(
      keys,
      mockProjectsDatabase,
      SkillCategoriesEnum.FrontEndWebDevelopment,
      mockSkillsDatabase,
    );
    // Only proj1 has ReactJs (FrontEndWebDevelopment)
    expect(result).toEqual(["proj1"]);
  });

  it("should return empty array if no material skills match the category", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialBySkillCategory(
      keys,
      mockProjectsDatabase,
      SkillCategoriesEnum.Mathematics,
      mockSkillsDatabase,
    );
    expect(result).toEqual([]);
  });

  it("should handle materials with skills that do not exist in skillsDatabase", () => {
    const customDatabase: Database<MaterialInterface> = {
      item1: {
        name: "Item 1",
        category: "Test",
        skills: ["unknown-skill" as SkillDatabaseKeys],
      },
    };
    const result = filterMaterialBySkillCategory(
      ["item1"],
      customDatabase,
      SkillCategoriesEnum.FrontEndWebDevelopment,
      mockSkillsDatabase,
    );
    expect(result).toEqual([]);
  });
});

describe("filterMaterialBySkill", () => {
  it("should filter materials containing the exact skill key", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialBySkill(
      SkillDatabaseKeys.Docker,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj2"]);
  });

  it("should return multiple materials containing the skill", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialBySkill(
      SkillDatabaseKeys.TypeScript,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj1", "proj3"]);
  });

  it("should return empty array when no material contains the skill", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterMaterialBySkill(
      SkillDatabaseKeys.Java,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual([]);
  });

  it("should handle missing material in database", () => {
    const keys = ["missingKey", "proj1"];
    const result = filterMaterialBySkill(
      SkillDatabaseKeys.ReactJs,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj1"]);
  });
});

describe("filterMaterialKeysByPredicate", () => {
  it("should filter keys according to custom predicate preserving order", () => {
    const keys = ["proj3", "proj2", "proj1"];
    const result = filterMaterialKeysByPredicate(
      keys,
      mockProjectsDatabase,
      (item) => item?.skills.length === 2,
    );
    expect(result).toEqual(["proj2", "proj1"]);
  });

  it("should pass undefined to predicate for missing keys", () => {
    const keys = ["missing"];
    const result = filterMaterialKeysByPredicate(
      keys,
      mockProjectsDatabase,
      (item) => item === undefined,
    );
    expect(result).toEqual(["missing"]);
  });

  it("should return empty array for empty input keys", () => {
    const result = filterMaterialKeysByPredicate(
      [],
      mockProjectsDatabase,
      () => true,
    );
    expect(result).toEqual([]);
  });
});

describe("filterProjectsByType", () => {
  it("should filter projects by project type", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterProjectsByType(
      ProjectTypeEnum.Personal,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj1", "proj3"]);
  });

  it("should match project type by slug", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterProjectsByType("academic", keys, mockProjectsDatabase);
    expect(result).toEqual(["proj2"]);
  });

  it("should return empty array when no projects match the type", () => {
    const keys = ["proj1", "proj2", "proj3"];
    const result = filterProjectsByType(
      ProjectTypeEnum.Professional,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual([]);
  });

  it("should ignore missing keys in projects database", () => {
    const keys = ["missing", "proj2"];
    const result = filterProjectsByType(
      ProjectTypeEnum.Academic,
      keys,
      mockProjectsDatabase,
    );
    expect(result).toEqual(["proj2"]);
  });
});
