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

export const prisma: Skill = {
  name: "Prisma",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "prisma-orm",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
  ],
};

export const drizzle: Skill = {
  name: "Drizzle",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "drizzle-orm",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
  ],
};

export const mongoose: Skill = {
  name: "Mongoose",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "mongoose-orm",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    noSql,
    indexing,
    orm,
  ],
};

export const sqlalchemy: Skill = {
  name: "SQLAlchemy",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "sqlalchemy",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
  ],
};

export const hibernate: Skill = {
  name: "Hibernate",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "hibernate-orm",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
  ],
};

const technicalHardSkillsDatabases: Skill[] = [
  normalisation,
  postgreSQL,
  mySQL,
  sqlite,
  mongoDB,
  redis,
  prisma,
  drizzle,
  mongoose,
  sqlalchemy,
  hibernate,
];

export default technicalHardSkillsDatabases;
