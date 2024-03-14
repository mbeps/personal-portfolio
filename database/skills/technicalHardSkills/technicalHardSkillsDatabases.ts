import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  databaseManagementSystems,
  databases,
  indexing,
  noSql,
  sql,
} from "../generalSkills";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsDatabases: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Normalisation]: {
    name: "Normalisation",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
  },
  [SkillSlugEnum.PostgreSQL]: {
    name: "PostgreSQL",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      databaseManagementSystems,
      databases,
      sql,
      normalisation,
      indexing,
    ],
  },
  [SkillSlugEnum.MySQL]: {
    name: "MySQL",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      databaseManagementSystems,
      databases,
      sql,
      normalisation,
      indexing,
    ],
  },
  [SkillSlugEnum.SQLite]: {
    name: "SQLite",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      databaseManagementSystems,
      databases,
      sql,
      normalisation,
      indexing,
    ],
  },
  [SkillSlugEnum.MongoDB]: {
    name: "MongoDB",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [databaseManagementSystems, databases, noSql, indexing],
  },
  [SkillSlugEnum.Redis]: {
    name: "Redis",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [databaseManagementSystems, databases, noSql, indexing],
  },
  [SkillSlugEnum.Convex]: {
    name: "Convex",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: false,
    skillType: SkillTypesEnum.Hard,
  },
};

export default technicalHardSkillsDatabases;
