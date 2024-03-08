import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, {
  SkillTypesEnum,
} from "@/interfaces/skills/SkillInterface";
import {
  databaseManagementSystems,
  databases,
  indexing,
  noSql,
  sql,
} from "../generalSkills";

export const normalisation: SkillInterface = {
  name: "Normalisation",
  category: SkillCategoriesEnum.Databases,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "database-normalisation",
};

export const postgreSQL: SkillInterface = {
  name: "PostgreSQL",
  category: SkillCategoriesEnum.Databases,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "postgresql",
  relatedSkills: [
    databaseManagementSystems,
    databases,
    sql,
    normalisation,
    indexing,
  ],
};

export const mySQL: SkillInterface = {
  name: "MySQL",
  category: SkillCategoriesEnum.Databases,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "mysql",
  relatedSkills: [
    databaseManagementSystems,
    databases,
    sql,
    normalisation,
    indexing,
  ],
};

export const sqlite: SkillInterface = {
  name: "SQLite",
  category: SkillCategoriesEnum.Databases,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "sqlite",
  relatedSkills: [
    databaseManagementSystems,
    databases,
    sql,
    normalisation,
    indexing,
  ],
};

export const mongoDB: SkillInterface = {
  name: "MongoDB",
  category: SkillCategoriesEnum.Databases,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "mongodb",
  relatedSkills: [databaseManagementSystems, databases, noSql, indexing],
};

export const redis: SkillInterface = {
  name: "Redis",
  category: SkillCategoriesEnum.Databases,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "redis",
  relatedSkills: [databaseManagementSystems, databases, noSql, indexing],
};

export const convex: SkillInterface = {
  name: "Convex",
  category: SkillCategoriesEnum.Databases,
  isMainSkill: false,
  skillType: SkillTypesEnum.Hard,
  slug: "convex",
};

const technicalHardSkillsDatabases: SkillInterface[] = [
  normalisation,
  postgreSQL,
  mySQL,
  sqlite,
  mongoDB,
  redis,
  convex,
];

export default technicalHardSkillsDatabases;
