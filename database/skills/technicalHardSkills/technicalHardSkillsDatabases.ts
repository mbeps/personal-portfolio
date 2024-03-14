import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsDatabases: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Normalisation]: {
    name: "Normalisation",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.Databases,
    ],
  },
  [SkillSlugEnum.PostgreSQL]: {
    name: "PostgreSQL",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.Normalisation,
      SkillSlugEnum.DatabaseIndexing,
    ],
  },
  [SkillSlugEnum.MySQL]: {
    name: "MySQL",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.Normalisation,
      SkillSlugEnum.DatabaseIndexing,
    ],
  },
  [SkillSlugEnum.SQLite]: {
    name: "SQLite",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.Normalisation,
      SkillSlugEnum.DatabaseIndexing,
    ],
  },
  [SkillSlugEnum.MongoDB]: {
    name: "MongoDB",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.NonRelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
    ],
  },
  [SkillSlugEnum.Redis]: {
    name: "Redis",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.NonRelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
    ],
  },
  [SkillSlugEnum.Convex]: {
    name: "Convex",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: false,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.NonRelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
    ],
  },
};

export default technicalHardSkillsDatabases;
