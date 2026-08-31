import { describe, expect, it } from "vitest";
import ShortDate from "@/class/short-date";
import type CompanyDatabaseKeys from "@/database/companies/company-database-keys";
import type RoleInterface from "@/database/roles/role-interface";
import ExperienceCategoriesEnum from "@/enums/experience/experience-categories-enum";
import ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import type Database from "@/interfaces/database";
import filterRolesByType from "@/lib/material/experience/filter-roles-by-type";

const mockRolesDatabase: Database<RoleInterface> = {
  swe: {
    name: "Software Engineer",
    category: ExperienceCategoriesEnum.Software,
    type: ExperienceTypeEnum.FullTime,
    skills: [],
    startDate: new ShortDate(2022, 1),
    endDate: new ShortDate(2023, 1),
    company: "google" as CompanyDatabaseKeys,
  },
  partTimeRole: {
    name: "Teaching Assistant",
    category: ExperienceCategoriesEnum.Other,
    type: ExperienceTypeEnum.PartTime,
    skills: [],
    startDate: new ShortDate(2021, 6),
    endDate: new ShortDate(2021, 9),
    company: "meta" as CompanyDatabaseKeys,
  },
  volunteer: {
    name: "Open Source Contributor",
    category: ExperienceCategoriesEnum.Other,
    type: ExperienceTypeEnum.Volunteering,
    skills: [],
    startDate: new ShortDate(2020, 1),
    endDate: new ShortDate(2021, 1),
    company: "open-source" as CompanyDatabaseKeys,
  },
};

describe("filterRolesByType", () => {
  it("should filter roles matching the specified ExperienceTypeEnum", () => {
    const keys = ["swe", "partTimeRole", "volunteer"];
    const result = filterRolesByType(
      ExperienceTypeEnum.FullTime,
      keys,
      mockRolesDatabase,
    );
    expect(result).toEqual(["swe"]);
  });

  it("should match roles by slugified type", () => {
    const keys = ["swe", "partTimeRole", "volunteer"];
    const result = filterRolesByType(
      ExperienceTypeEnum.PartTime,
      keys,
      mockRolesDatabase,
    );
    expect(result).toEqual(["partTimeRole"]);
  });

  it("should return multiple matching keys preserving order", () => {
    const customDatabase: Database<RoleInterface> = {
      ...mockRolesDatabase,
      swe2: {
        ...mockRolesDatabase.swe,
        name: "Senior Software Engineer",
      },
    };
    const keys = ["volunteer", "swe2", "partTimeRole", "swe"];
    const result = filterRolesByType(
      ExperienceTypeEnum.FullTime,
      keys,
      customDatabase,
    );
    expect(result).toEqual(["swe2", "swe"]);
  });

  it("should return an empty array when no roles match the type", () => {
    const keys = ["swe"];
    const result = filterRolesByType(
      ExperienceTypeEnum.Volunteering,
      keys,
      mockRolesDatabase,
    );
    expect(result).toEqual([]);
  });

  it("should return an empty array when roleKeys is empty", () => {
    const result = filterRolesByType(
      ExperienceTypeEnum.FullTime,
      [],
      mockRolesDatabase,
    );
    expect(result).toEqual([]);
  });

  it("should ignore keys that do not exist in rolesDatabase", () => {
    const keys = ["non-existent-role", "swe"];
    const result = filterRolesByType(
      ExperienceTypeEnum.FullTime,
      keys,
      mockRolesDatabase,
    );
    expect(result).toEqual(["swe"]);
  });
});
