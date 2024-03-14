import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  databaseManagementSystems,
  databases,
  indexing,
  noSql,
  orm,
  sql,
} from "../generalSkills";
import { java, javascript, python, typescript } from "../languages";
import {
  mongoDB,
  mySQL,
  postgreSQL,
  sqlite,
} from "./technicalHardSkillsDatabases";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsORMs: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Monoose]: {
    name: "Mongoose",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
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
  },
  [SkillSlugEnum.Prisma]: {
    name: "Prisma",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
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
  },
  [SkillSlugEnum.Drizzle]: {
    name: "Drizzle",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
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
  },
  [SkillSlugEnum.SQLAlchemy]: {
    name: "SQLAlchemy",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
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
  },
  [SkillSlugEnum.Hibernate]: {
    name: "Hibernate",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
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
  },
};

export default technicalHardSkillsORMs;
