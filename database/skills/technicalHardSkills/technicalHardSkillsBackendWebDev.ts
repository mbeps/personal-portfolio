import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsBackendWebDev: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Firebase]: {
    name: "Firebase",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.NonRelationalDatabases,
      SkillSlugEnum.Databases,
      SkillSlugEnum.DatabaseIndexing,
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.UserAuthentication,
      SkillSlugEnum.SDKs,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.GCP,
    ],
  },
  [SkillSlugEnum.Supabase]: {
    name: "Supabase",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.DatabaseIndexing,
      SkillSlugEnum.Databases,
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.UserAuthentication,
      SkillSlugEnum.SDKs,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.PostgreSQL,
    ],
  },
  [SkillSlugEnum.PocketBase]: {
    name: "PocketBase",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.Databases,
      SkillSlugEnum.DatabaseIndexing,
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.UserAuthentication,
      SkillSlugEnum.SDKs,
      SkillSlugEnum.WebDevelopment,
    ],
  },
  [SkillSlugEnum.Auth0]: {
    name: "Auth0",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.UserAuthentication, SkillSlugEnum.SDKs],
  },
  [SkillSlugEnum.ClerkAuth]: {
    name: "Clerk Auth",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.UserAuthentication, SkillSlugEnum.SDKs],
  },
  [SkillSlugEnum.NextAuth]: {
    name: "NextAuth",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.UserAuthentication,
      SkillSlugEnum.WebDevelopment,
    ],
  },
  [SkillSlugEnum.Stripe]: {
    name: "Stripe",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.SDKs],
  },
  [SkillSlugEnum.ExpressJS]: {
    name: "Express",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.APIs,
    ],
  },
  [SkillSlugEnum.Flask]: {
    name: "Flask",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.APIs,
      SkillSlugEnum.Python,
    ],
  },
  [SkillSlugEnum.Django]: {
    name: "Django",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.APIs,
      SkillSlugEnum.Python,
    ],
  },
  [SkillSlugEnum.Spring]: {
    name: "Spring",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.APIs,
      SkillSlugEnum.Java,
    ],
  },
  [SkillSlugEnum.SpringBoot]: {
    name: "Spring Boot",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.APIs,
      SkillSlugEnum.Java,
    ],
  },
  [SkillSlugEnum.Cloudinary]: {
    name: "Cloudinary",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Cloudinary],
  },
  [SkillSlugEnum.EdgeStore]: {
    name: "Edge Store",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.WebDevelopment],
  },
  [SkillSlugEnum.Gunicorn]: {
    name: "Gunicorn",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python, SkillSlugEnum.WebDevelopment],
  },
  [SkillSlugEnum.Jinja]: {
    name: "Jinja",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python, SkillSlugEnum.WebDevelopment],
  },
};

export default technicalHardSkillsBackendWebDev;
