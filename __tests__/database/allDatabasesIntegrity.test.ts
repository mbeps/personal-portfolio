import { describe, expect, it } from "vitest";
import ShortDate from "@/class/short-date";
import blogsDatabaseMap, {
  blogDatabaseKeys,
} from "@/database/blogs/blogs-database-map";
import CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/certificates/certificate-database-map";
import CompanyDatabaseKeys from "@/database/companies/company-database-keys";
import companyDatabaseMap, {
  companyDatabaseKeys,
} from "@/database/companies/company-database-map";
import CourseDatabaseKeys from "@/database/courses/course-database-keys";
import courseDatabaseMap, {
  courseDatabaseKeys,
} from "@/database/courses/course-database-map";
import materialDatabaseMap, {
  materialKeys,
  skillUsageMap,
} from "@/database/materials/material-database-map";
import ModuleDatabaseKeys from "@/database/modules/module-database-keys";
import moduleDatabaseMap, {
  moduleDatabaseKeys,
} from "@/database/modules/module-database-map";
import ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import projectDatabaseMap, {
  projectDatabaseKeys,
} from "@/database/projects/project-database-map";
import RoleDatabaseKeys from "@/database/roles/role-database-keys";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/roles/role-database-map";
import SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/skill-database-map";
import BlogCategoriesEnum from "@/enums/blog/blog-categories-enum";
import CertificateCategoriesEnum from "@/enums/certificate/certificate-categories-enum";
import CertificateIssuersEnum from "@/enums/certificate/certificate-issuers-enum";
import ExperienceCategoriesEnum from "@/enums/experience/experience-categories-enum";
import ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import ModuleYearGroupsEnum from "@/enums/module/module-year-groups-enum";
import ProjectCategoriesEnum from "@/enums/project/project-categories-enum";
import ProjectTypeEnum from "@/enums/project/project-type-enum";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";

const validKeyRegex = /^[a-zA-Z0-9-]+$/;

describe("All Databases Integrity & Consistency", () => {
  describe("Key format validity for all databases", () => {
    it("should ensure all skill keys only contain alphanumeric characters and dashes", () => {
      for (const key of skillDatabaseKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });

    it("should ensure all company keys only contain alphanumeric characters and dashes", () => {
      for (const key of companyDatabaseKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });

    it("should ensure all role keys only contain alphanumeric characters and dashes", () => {
      for (const key of roleDatabaseKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });

    it("should ensure all course keys only contain alphanumeric characters and dashes", () => {
      for (const key of courseDatabaseKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });

    it("should ensure all module keys only contain alphanumeric characters and dashes", () => {
      for (const key of moduleDatabaseKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });

    it("should ensure all certificate keys only contain alphanumeric characters and dashes", () => {
      for (const key of certificateDatabaseKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });

    it("should ensure all project keys only contain alphanumeric characters and dashes", () => {
      for (const key of projectDatabaseKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });

    it("should ensure all blog keys only contain alphanumeric characters and dashes", () => {
      for (const key of blogDatabaseKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });

    it("should ensure all unified material keys only contain alphanumeric characters and dashes", () => {
      for (const key of materialKeys) {
        expect(key).toMatch(validKeyRegex);
      }
    });
  });

  describe("SkillDatabaseMap integrity", () => {
    it("should have all enum keys defined in the map", () => {
      const enumValues = Object.values(SkillDatabaseKeys);
      for (const enumVal of enumValues) {
        expect(skillDatabaseMap[enumVal]).toBeDefined();
      }
    });

    it("should contain valid required properties for every skill", () => {
      const validCategories = Object.values(SkillCategoriesEnum);
      const validTypes = Object.values(SkillTypesEnum);

      for (const [key, skill] of Object.entries(skillDatabaseMap)) {
        expect(skill.name).toBeDefined();
        expect(typeof skill.name).toBe("string");
        expect(skill.name.trim().length).toBeGreaterThan(0);

        expect(validCategories).toContain(skill.category);
        expect(validTypes).toContain(skill.skillType);

        if (skill.isMainSkill !== undefined) {
          expect(typeof skill.isMainSkill).toBe("boolean");
        }

        if (skill.relatedSkills) {
          expect(Array.isArray(skill.relatedSkills)).toBe(true);
          for (const related of skill.relatedSkills) {
            expect(
              skillDatabaseMap[related],
              `Skill "${key}" references unknown related skill "${related}"`,
            ).toBeDefined();
          }
        }
      }
    });
  });

  describe("CompanyDatabaseMap integrity", () => {
    it("should have all keys matching valid CompanyDatabaseKeys enum values", () => {
      const enumValues = Object.values(CompanyDatabaseKeys);
      expect(companyDatabaseKeys.length).toBe(
        Object.keys(companyDatabaseMap).length,
      );
      for (const key of companyDatabaseKeys) {
        expect(enumValues).toContain(key);
        expect(companyDatabaseMap[key]).toBeDefined();
      }
    });

    it("should contain valid required properties and valid role references", () => {
      for (const [key, company] of Object.entries(companyDatabaseMap)) {
        expect(company.name.trim().length).toBeGreaterThan(0);
        expect(company.location.trim().length).toBeGreaterThan(0);
        if (company.logo) {
          expect(company.logo.trim().length).toBeGreaterThan(0);
        }
        expect(Array.isArray(company.positions)).toBe(true);
        expect(company.positions.length).toBeGreaterThan(0);

        for (const roleKey of company.positions) {
          expect(
            rolesDatabase[roleKey],
            `Company "${key}" references unknown role "${roleKey}"`,
          ).toBeDefined();
        }
      }
    });
  });

  describe("RoleDatabaseMap integrity", () => {
    it("should have all keys matching valid RoleDatabaseKeys enum values", () => {
      const enumValues = Object.values(RoleDatabaseKeys);
      expect(roleDatabaseKeys.length).toBe(Object.keys(rolesDatabase).length);
      for (const key of roleDatabaseKeys) {
        expect(enumValues).toContain(key);
        expect(rolesDatabase[key]).toBeDefined();
      }
    });

    it("should validate all role fields, date ordering, company references, and skills", () => {
      const validCategories = Object.values(ExperienceCategoriesEnum);
      const validTypes = Object.values(ExperienceTypeEnum);

      for (const [key, role] of Object.entries(rolesDatabase)) {
        expect(role.name.trim().length).toBeGreaterThan(0);
        expect(validCategories).toContain(role.category);
        expect(validTypes).toContain(role.type);

        expect(
          companyDatabaseMap[role.company],
          `Role "${key}" references unknown company "${role.company}"`,
        ).toBeDefined();

        expect(role.startDate).toBeInstanceOf(ShortDate);
        if (role.endDate) {
          expect(role.endDate).toBeInstanceOf(ShortDate);
          expect(
            ShortDate.subtract(role.endDate, role.startDate),
            `Role "${key}" startDate must be before or equal to endDate`,
          ).toBeGreaterThanOrEqual(0);
        }

        expect(Array.isArray(role.skills)).toBe(true);
        for (const skillKey of role.skills) {
          expect(
            skillDatabaseMap[skillKey],
            `Role "${key}" references unknown skill "${skillKey}"`,
          ).toBeDefined();
        }

        if (role.relatedMaterials) {
          for (const matKey of role.relatedMaterials) {
            expect(
              materialDatabaseMap[matKey],
              `Role "${key}" references unknown related material "${matKey}"`,
            ).toBeDefined();
          }
        }
      }
    });
  });

  describe("CourseDatabaseMap integrity", () => {
    it("should have all keys matching CourseDatabaseKeys", () => {
      const enumValues = Object.values(CourseDatabaseKeys);
      expect(courseDatabaseKeys.length).toBe(
        Object.keys(courseDatabaseMap).length,
      );
      for (const key of courseDatabaseKeys) {
        expect(enumValues).toContain(key);
        expect(courseDatabaseMap[key]).toBeDefined();
      }
    });

    it("should validate course fields, year range, module references, and skills", () => {
      for (const [key, course] of Object.entries(courseDatabaseMap)) {
        expect(course.name.trim().length).toBeGreaterThan(0);
        expect(course.university.trim().length).toBeGreaterThan(0);
        if (course.grade) {
          expect(course.grade.trim().length).toBeGreaterThan(0);
        }
        expect(course.category.trim().length).toBeGreaterThan(0);
        expect(course.startYear).toBeLessThanOrEqual(course.endYear);

        expect(Array.isArray(course.modules)).toBe(true);
        expect(course.modules.length).toBeGreaterThan(0);
        for (const modKey of course.modules) {
          expect(
            moduleDatabaseMap[modKey],
            `Course "${key}" references unknown module "${modKey}"`,
          ).toBeDefined();
        }

        expect(Array.isArray(course.skills)).toBe(true);
        for (const skillKey of course.skills) {
          expect(
            skillDatabaseMap[skillKey],
            `Course "${key}" references unknown skill "${skillKey}"`,
          ).toBeDefined();
        }

        if (course.relatedMaterials) {
          for (const matKey of course.relatedMaterials) {
            expect(
              materialDatabaseMap[matKey],
              `Course "${key}" references unknown related material "${matKey}"`,
            ).toBeDefined();
          }
        }
      }
    });
  });

  describe("ModuleDatabaseMap integrity", () => {
    it("should have all enum keys defined in the map", () => {
      const enumValues = Object.values(ModuleDatabaseKeys);
      for (const enumVal of enumValues) {
        expect(moduleDatabaseMap[enumVal]).toBeDefined();
      }
    });

    it("should validate module fields, category, parentCourse, skills, and outcomes", () => {
      const validYearGroups = Object.values(ModuleYearGroupsEnum);

      for (const [key, mod] of Object.entries(moduleDatabaseMap)) {
        expect(mod.name.trim().length).toBeGreaterThan(0);
        expect(validYearGroups).toContain(mod.category);

        expect(
          courseDatabaseMap[mod.parentCourse],
          `Module "${key}" references unknown parent course "${mod.parentCourse}"`,
        ).toBeDefined();

        expect(Array.isArray(mod.skills)).toBe(true);
        for (const skillKey of mod.skills) {
          expect(
            skillDatabaseMap[skillKey],
            `Module "${key}" references unknown skill "${skillKey}"`,
          ).toBeDefined();
        }

        if (mod.learningOutcomes) {
          expect(Array.isArray(mod.learningOutcomes)).toBe(true);
          for (const outcome of mod.learningOutcomes) {
            expect(typeof outcome).toBe("string");
            expect(outcome.trim().length).toBeGreaterThan(0);
          }
        }

        if (mod.relatedMaterials) {
          for (const matKey of mod.relatedMaterials) {
            expect(
              materialDatabaseMap[matKey],
              `Module "${key}" references unknown related material "${matKey}"`,
            ).toBeDefined();
          }
        }
      }
    });
  });

  describe("CertificateDatabaseMap integrity", () => {
    it("should have all keys matching CertificateDatabaseKeys", () => {
      const enumValues = Object.values(CertificateDatabaseKeys);
      expect(certificateDatabaseKeys.length).toBe(
        Object.keys(certificateDatabaseMap).length,
      );
      for (const key of certificateDatabaseKeys) {
        expect(enumValues).toContain(key);
        expect(certificateDatabaseMap[key]).toBeDefined();
      }
    });

    it("should validate certificate fields, issuers, categories, and referenced skills", () => {
      const validCategories = Object.values(CertificateCategoriesEnum);
      const validIssuers = Object.values(CertificateIssuersEnum);

      for (const [key, cert] of Object.entries(certificateDatabaseMap)) {
        expect(cert.name.trim().length).toBeGreaterThan(0);
        expect(validCategories).toContain(cert.category);
        expect(validIssuers).toContain(cert.issuer);
        expect(cert.certificateURL.trim().length).toBeGreaterThan(0);

        if (cert.description) {
          expect(cert.description.trim().length).toBeGreaterThan(0);
        }

        expect(Array.isArray(cert.skills)).toBe(true);
        for (const skillKey of cert.skills) {
          expect(
            skillDatabaseMap[skillKey],
            `Certificate "${key}" references unknown skill "${skillKey}"`,
          ).toBeDefined();
        }

        if (cert.learningOutcomes) {
          expect(Array.isArray(cert.learningOutcomes)).toBe(true);
          for (const outcome of cert.learningOutcomes) {
            expect(typeof outcome).toBe("string");
            expect(outcome.trim().length).toBeGreaterThan(0);
          }
        }

        if (cert.relatedMaterials) {
          for (const matKey of cert.relatedMaterials) {
            expect(
              materialDatabaseMap[matKey],
              `Certificate "${key}" references unknown related material "${matKey}"`,
            ).toBeDefined();
          }
        }
      }
    });
  });

  describe("ProjectDatabaseMap integrity", () => {
    it("should have all enum keys defined in the map", () => {
      const enumValues = Object.values(ProjectDatabaseKeys);
      for (const enumVal of enumValues) {
        expect(projectDatabaseMap[enumVal]).toBeDefined();
      }
    });

    it("should validate project fields, categories, types, and referenced skills", () => {
      const validCategories = Object.values(ProjectCategoriesEnum);
      const validTypes = Object.values(ProjectTypeEnum);

      for (const [key, project] of Object.entries(projectDatabaseMap)) {
        expect(project.name.trim().length).toBeGreaterThan(0);
        expect(project.description.trim().length).toBeGreaterThan(0);
        if (project.thumbnailImage) {
          expect(project.thumbnailImage.trim().length).toBeGreaterThan(0);
        }
        expect(validCategories).toContain(project.category);
        expect(validTypes).toContain(project.type);

        expect(Array.isArray(project.skills)).toBe(true);
        expect(project.skills.length).toBeGreaterThan(0);
        for (const skillKey of project.skills) {
          expect(
            skillDatabaseMap[skillKey],
            `Project "${key}" references unknown skill "${skillKey}"`,
          ).toBeDefined();
        }

        if (project.relatedMaterials) {
          for (const matKey of project.relatedMaterials) {
            expect(
              materialDatabaseMap[matKey],
              `Project "${key}" references unknown related material "${matKey}"`,
            ).toBeDefined();
          }
        }
      }
    });
  });

  describe("BlogsDatabaseMap integrity", () => {
    it("should contain valid blog objects with valid categories and referenced skills", () => {
      const validCategories = Object.values(BlogCategoriesEnum);

      for (const [key, blog] of Object.entries(blogsDatabaseMap)) {
        expect(blog.name.trim().length).toBeGreaterThan(0);
        expect(blog.subtitle.trim().length).toBeGreaterThan(0);
        expect(validCategories).toContain(blog.category);

        expect(Array.isArray(blog.skills)).toBe(true);
        for (const skillKey of blog.skills) {
          expect(
            skillDatabaseMap[skillKey],
            `Blog "${key}" references unknown skill "${skillKey}"`,
          ).toBeDefined();
        }

        if (blog.relatedMaterials) {
          for (const matKey of blog.relatedMaterials) {
            expect(
              materialDatabaseMap[matKey],
              `Blog "${key}" references unknown related material "${matKey}"`,
            ).toBeDefined();
          }
        }
      }
    });
  });

  describe("MaterialDatabaseMap unified lake integrity", () => {
    it("should have matching materialKeys and materialDatabaseMap entries", () => {
      const mapKeys = Object.keys(materialDatabaseMap);
      expect(materialKeys.length).toBe(mapKeys.length);
      expect(new Set(materialKeys)).toEqual(new Set(mapKeys));
    });

    it("should include all items from projects, courses, roles, modules, certificates, and blogs", () => {
      for (const key of Object.keys(projectDatabaseMap)) {
        expect(materialDatabaseMap[key]).toBeDefined();
      }
      for (const key of Object.keys(courseDatabaseMap)) {
        expect(materialDatabaseMap[key]).toBeDefined();
      }
      for (const key of Object.keys(rolesDatabase)) {
        expect(materialDatabaseMap[key]).toBeDefined();
      }
      for (const key of Object.keys(moduleDatabaseMap)) {
        expect(materialDatabaseMap[key]).toBeDefined();
      }
      for (const key of Object.keys(certificateDatabaseMap)) {
        expect(materialDatabaseMap[key]).toBeDefined();
      }
      for (const key of Object.keys(blogsDatabaseMap)) {
        expect(materialDatabaseMap[key]).toBeDefined();
      }
    });

    it("should correctly populate skillUsageMap with positive counts for referenced skills", () => {
      expect(skillUsageMap.size).toBeGreaterThan(0);

      for (const [skillKey, count] of skillUsageMap.entries()) {
        expect(count).toBeGreaterThan(0);
        expect(
          skillDatabaseMap[skillKey],
          `skillUsageMap contains unknown skill "${skillKey}"`,
        ).toBeDefined();
      }
    });
  });
});
