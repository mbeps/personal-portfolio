import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import {
  databaseManagementSystems,
  databases,
  indexing,
  noSql,
  sql
} from "../generalSkills";

export const normalisation: SkillInterface = {
  name: "Normalisation",
  category: "Databases",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "database-normalisation",
};

export const postgreSQL: SkillInterface = {
  name: "PostgreSQL",
  category: "Databases",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
  category: "Databases",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
  category: "Databases",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
  category: "Databases",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "mongodb",
  relatedSkills: [databaseManagementSystems, databases, noSql, indexing],
};

export const redis: SkillInterface = {
  name: "Redis",
  category: "Databases",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "redis",
  relatedSkills: [databaseManagementSystems, databases, noSql, indexing],
};

export const convex: SkillInterface = {
  name: "Convex",
  category: "Databases",
  isMainSkill: false,
  skillType: SkillTypes.Hard,
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
