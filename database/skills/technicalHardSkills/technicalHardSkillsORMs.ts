import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsORMs: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Mongoose]: {
    name: "Mongoose",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.NonRelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
      SkillSlugEnum.ObjectRelationalMapping,
      SkillSlugEnum.MongoDB,
    ],
  },
  [SkillSlugEnum.Prisma]: {
    name: "Prisma",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.NonRelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.MongoDB,
      SkillSlugEnum.PostgreSQL,
      SkillSlugEnum.MySQL,
      SkillSlugEnum.SQLite,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
    ],
  },
  [SkillSlugEnum.Drizzle]: {
    name: "Drizzle",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
      SkillSlugEnum.TypeORM,
      SkillSlugEnum.PostgreSQL,
      SkillSlugEnum.MySQL,
      SkillSlugEnum.SQLite,
    ],
  },
  [SkillSlugEnum.SQLAlchemy]: {
    name: "SQLAlchemy",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
      SkillSlugEnum.ObjectRelationalMapping,
      SkillSlugEnum.PostgreSQL,
      SkillSlugEnum.MySQL,
      SkillSlugEnum.SQLite,
    ],
  },
  [SkillSlugEnum.Hibernate]: {
    name: "Hibernate",
    category: SkillCategoriesEnum.ObjectRelationalMappers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Java,
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
      SkillSlugEnum.ObjectRelationalMapping,
      SkillSlugEnum.PostgreSQL,
      SkillSlugEnum.MySQL,
      SkillSlugEnum.SQLite,
    ],
  },
};

export default technicalHardSkillsORMs;
