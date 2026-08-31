import { describe, expect, test } from "vitest";
import ShortDate from "@/class/short-date";
import CompanyDatabaseKeys from "@/database/companies/company-database-keys";
import type RoleInterface from "@/database/roles/role-interface";
import SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import ExperienceCategoriesEnum from "@/enums/experience/experience-categories-enum";
import ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import type Database from "@/interfaces/database";
/// <reference types="vitest/globals" />
import updateRolesWithExperienceTime from "@/lib/material/role/update-roles-with-experience-time";

describe("updateRolesWithExperienceTime", () => {
  test("computes time in role for own properties and skips inherited entries", () => {
    const inheritedRole: RoleInterface = {
      name: "Should be skipped",
      skills: [SkillDatabaseKeys.JavaScript],
      category: ExperienceCategoriesEnum.Other,
      type: ExperienceTypeEnum.PartTime,
      startDate: new ShortDate(2018, 1),
      endDate: new ShortDate(2018, 2),
      company: CompanyDatabaseKeys.OpenSource,
    };

    const rolesMap: Database<RoleInterface> = Object.create({
      inherited: inheritedRole,
    });

    rolesMap.softwareEngineer = {
      name: "Software Engineer",
      skills: [SkillDatabaseKeys.TypeScript],
      category: ExperienceCategoriesEnum.Software,
      type: ExperienceTypeEnum.FullTime,
      startDate: new ShortDate(2020, 1),
      endDate: new ShortDate(2021, 1),
      company: CompanyDatabaseKeys.Commerzbank,
    };

    rolesMap.seniorEngineer = {
      name: "Senior Engineer",
      skills: [SkillDatabaseKeys.ReactJs],
      category: ExperienceCategoriesEnum.Software,
      type: ExperienceTypeEnum.FullTime,
      startDate: new ShortDate(2019, 5),
      endDate: new ShortDate(2021, 7),
      company: CompanyDatabaseKeys.Commerzbank,
    };

    const updatedRoles = updateRolesWithExperienceTime(rolesMap);

    expect(updatedRoles.softwareEngineer.timeInRole).toBe("1 year");
    expect(updatedRoles.seniorEngineer.timeInRole).toBe("2 years and 2 months");
    expect(updatedRoles).not.toHaveProperty("inherited");
  });
});
