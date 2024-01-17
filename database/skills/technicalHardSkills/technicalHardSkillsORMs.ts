import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  databaseManagementSystems,
  databases,
  noSql,
  indexing,
  orm,
  sql,
} from "../generalSkills";
import {
  mongoDB,
  mySQL,
  postgreSQL,
  sqlite,
} from "./technicalHardSkillsDatabases";

export const mongoose: SkillInterface = {
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
  technicalHardSkills: [mongoDB],
};

export const prisma: SkillInterface = {
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
  technicalHardSkills: [mongoDB, postgreSQL, mySQL, sqlite],
};

export const drizzle: SkillInterface = {
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
  technicalHardSkills: [postgreSQL, mySQL, sqlite],
};

export const sqlalchemy: SkillInterface = {
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
  technicalHardSkills: [postgreSQL, mySQL, sqlite],
};

export const hibernate: SkillInterface = {
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
  technicalHardSkills: [postgreSQL, mySQL, sqlite],
};

const technicalHardSkillsORMs: SkillInterface[] = [
  mongoose,
  prisma,
  drizzle,
  sqlalchemy,
  hibernate,
];

export default technicalHardSkillsORMs;
