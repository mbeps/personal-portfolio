import Skill from "@/types/skills";
import {
  databaseManagementSystems,
  databases,
  sql,
  indexing,
  noSql,
  orm,
} from "../generalSkills";

export const normalisation: Skill = {
  name: "Normalisation",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "database-normalisation",
};

export const postgreSQL: Skill = {
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

export const mySQL: Skill = {
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

export const sqlite: Skill = {
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

export const mongoDB: Skill = {
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

export const redis: Skill = {
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

export const convex: Skill = {
  name: "Convex",
  category: "Databases",
  isMainSkill: false,
  skillType: "hard",
  slug: "convex",
};

const technicalHardSkillsDatabases: Skill[] = [
  normalisation,
  postgreSQL,
  mySQL,
  sqlite,
  mongoDB,
  redis,
  convex,
];

export default technicalHardSkillsDatabases;
