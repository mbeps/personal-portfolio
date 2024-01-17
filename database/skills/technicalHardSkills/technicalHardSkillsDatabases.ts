import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  databaseManagementSystems,
  databases,
  sql,
  indexing,
  noSql,
  orm,
} from "../generalSkills";

export const normalisation: SkillInterface = {
  name: "Normalisation",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "database-normalisation",
};

export const postgreSQL: SkillInterface = {
  name: "PostgreSQL",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "postgresql",
  technicalGeneralSkills: [
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
  skillType: "hard",
  slug: "mysql",
  technicalGeneralSkills: [
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
  skillType: "hard",
  slug: "sqlite",
  technicalGeneralSkills: [
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
  skillType: "hard",
  slug: "mongodb",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    noSql,
    indexing,
  ],
};

export const redis: SkillInterface = {
  name: "Redis",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "redis",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    noSql,
    indexing,
  ],
};

export const convex: SkillInterface = {
  name: "Convex",
  category: "Databases",
  isMainSkill: false,
  skillType: "hard",
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
