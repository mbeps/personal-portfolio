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
import { java, javascript, python, typescript } from "../languages";

export const mongoose: SkillInterface = {
  name: "Mongoose",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "mongoose-orm",
  relatedSkills: [
    javascript,
    typescript,
    databaseManagementSystems,
    databases,
    noSql,
    indexing,
    orm,
    mongoDB,
  ],
};

export const prisma: SkillInterface = {
  name: "Prisma",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "prisma-orm",
  relatedSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
    mongoDB,
    postgreSQL,
    mySQL,
    sqlite,
    javascript,
    typescript,
  ],
};

export const drizzle: SkillInterface = {
  name: "Drizzle",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "drizzle-orm",
  relatedSkills: [
    javascript,
    typescript,
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
    postgreSQL,
    mySQL,
    sqlite,
  ],
};

export const sqlalchemy: SkillInterface = {
  name: "SQLAlchemy",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "sqlalchemy",
  relatedSkills: [
    python,
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
    postgreSQL,
    mySQL,
    sqlite,
  ],
};

export const hibernate: SkillInterface = {
  name: "Hibernate",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "hibernate-orm",
  relatedSkills: [
    java,
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
    postgreSQL,
    mySQL,
    sqlite,
  ],
};

const technicalHardSkillsORMs: SkillInterface[] = [
  mongoose,
  prisma,
  drizzle,
  sqlalchemy,
  hibernate,
];

export default technicalHardSkillsORMs;
