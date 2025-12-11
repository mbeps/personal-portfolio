/// <reference types="vitest/globals" />
import updateRolesWithExperienceTime from "@/lib/actions/material/role/updateRolesWithExperienceTime";
import CompanyDatabaseKeys from "@/database/companies/CompanyDatabaseKeys";
import type RoleInterface from "@/database/roles/RoleInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import ExperienceCategoriesEnum from "@/enums/experience/ExperienceCategoriesEnum";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import ShortDate from "@/class/ShortDate";
import type Database from "@/interfaces/Database";
import { describe, expect, test } from "vitest";

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
      skills: [SkillDatabaseKeys.ReactJS],
      category: ExperienceCategoriesEnum.Software,
      type: ExperienceTypeEnum.FullTime,
      startDate: new ShortDate(2019, 5),
      endDate: new ShortDate(2021, 7),
      company: CompanyDatabaseKeys.Commerzbank,
    };

    const updatedRoles = updateRolesWithExperienceTime(rolesMap);

    expect(updatedRoles.softwareEngineer.timeInRole).toBe("1 year");
    expect(updatedRoles.seniorEngineer.timeInRole).toBe(
      "2 years and 2 months"
    );
    expect(updatedRoles).not.toHaveProperty("inherited");
  });
});
