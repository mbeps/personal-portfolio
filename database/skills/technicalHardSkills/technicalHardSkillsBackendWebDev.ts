import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  apis,
  cloudComputing,
  databaseManagementSystems,
  databases,
  indexing,
  noSql,
  sdks,
  userAuthentication,
  webDevelopment,
} from "../generalSkills";
import { java, javascript, python, typescript } from "../languages";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsBackendWebDev: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Firebase]: {
    name: "Firebase",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      databaseManagementSystems,
      noSql,
      databases,
      indexing,
      cloudComputing,
      userAuthentication,
      sdks,
      webDevelopment,
    ],
  },
  [SkillSlugEnum.Supabase]: {
    name: "Supabase",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      databaseManagementSystems,
      noSql,
      databases,
      indexing,
      cloudComputing,
      userAuthentication,
      sdks,
      webDevelopment,
    ],
  },
  [SkillSlugEnum.PocketBase]: {
    name: "PocketBase",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      databaseManagementSystems,
      noSql,
      databases,
      indexing,
      cloudComputing,
      userAuthentication,
      sdks,
      webDevelopment,
    ],
  },
  [SkillSlugEnum.Auth0]: {
    name: "Auth0",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [userAuthentication, sdks],
  },
  [SkillSlugEnum.ClerkAuth]: {
    name: "Clerk Auth",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [userAuthentication, sdks],
  },
  [SkillSlugEnum.NextAuth]: {
    name: "NextAuth",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript, userAuthentication, webDevelopment],
  },
  [SkillSlugEnum.Stripe]: {
    name: "Stripe",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [sdks],
  },
  [SkillSlugEnum.ExpressJS]: {
    name: "Express",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript, webDevelopment, apis],
  },
  [SkillSlugEnum.Flask]: {
    name: "Flask",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, apis, python],
  },
  [SkillSlugEnum.Django]: {
    name: "Django",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, apis, python],
  },
  [SkillSlugEnum.Spring]: {
    name: "Spring",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, apis, java],
  },
  [SkillSlugEnum.SpringBoot]: {
    name: "Spring Boot",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [java, webDevelopment, apis],
  },
  [SkillSlugEnum.Cloudinary]: {
    name: "Cloudinary",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment],
  },
  [SkillSlugEnum.EdgeStore]: {
    name: "Edge Store",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment],
  },
  [SkillSlugEnum.Gunicorn]: {
    name: "Gunicorn",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python, webDevelopment],
  },
  [SkillSlugEnum.Jinja]: {
    name: "Jinja",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python, webDevelopment],
  },
};

export default technicalHardSkillsBackendWebDev;
