import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
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

export const firebase: SkillInterface = {
  name: "Firebase",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "firebase",
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
};

export const supabase: SkillInterface = {
  name: "Supabase",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "supabase",
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
};

export const pocketbase: SkillInterface = {
  name: "PocketBase",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "pocketbase",
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
};

export const auth0: SkillInterface = {
  name: "Auth0",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "auth0",
  relatedSkills: [userAuthentication, sdks],
};

export const clerkAuth: SkillInterface = {
  name: "Clerk Auth",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "clerkAuth",
  relatedSkills: [userAuthentication, sdks],
};

export const nextauth: SkillInterface = {
  name: "NextAuth",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "next-auth",
  relatedSkills: [javascript, typescript, userAuthentication, webDevelopment],
};

export const stripe: SkillInterface = {
  name: "Stripe",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "stripe",
  relatedSkills: [sdks],
};

export const express: SkillInterface = {
  name: "Express",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  skillType: SkillTypes.Hard,
  slug: "express-js",
  relatedSkills: [javascript, typescript, webDevelopment, apis],
};

export const flask: SkillInterface = {
  name: "Flask",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "flask",
  relatedSkills: [webDevelopment, apis, python],
};

export const django: SkillInterface = {
  name: "Django",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "django",
  relatedSkills: [webDevelopment, apis, python],
};

export const spring: SkillInterface = {
  name: "Spring",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "spring",
  relatedSkills: [webDevelopment, apis, java],
};

export const springBoot: SkillInterface = {
  name: "Spring Boot",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "springboot",
  relatedSkills: [java, webDevelopment, apis],
};

export const cloudinary: SkillInterface = {
  name: "Cloudinary",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  skillType: SkillTypes.Hard,
  slug: "cloudinary",
  relatedSkills: [webDevelopment],
};

export const edgestore: SkillInterface = {
  name: "Edge Store",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  skillType: SkillTypes.Hard,
  slug: "edge-store",
  relatedSkills: [webDevelopment],
};

export const jwt: SkillInterface = {
  name: "JWT",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  skillType: SkillTypes.Hard,
  slug: "jtw",
  relatedSkills: [userAuthentication],
};

export const gunicorn: SkillInterface = {
  name: "Gunicorn",
  category: SkillCategoriesEnum.BackEndWebDevelopment,
  skillType: SkillTypes.Hard,
  slug: "gunicon",
  relatedSkills: [python, webDevelopment],
};

export const jinja: SkillInterface = {
  name: "Jinja",
  category: SkillCategoriesEnum.CodeQuality,
  skillType: SkillTypes.Hard,
  slug: "jinja",
  relatedSkills: [python, webDevelopment],
};

const technicalHardSkillsBackendWebDev: SkillInterface[] = [
  firebase,
  supabase,
  pocketbase,
  auth0,
  clerkAuth,
  nextauth,
  stripe,
  express,
  flask,
  django,
  spring,
  springBoot,
  cloudinary,
  jwt,
  gunicorn,
  jinja,
];

export default technicalHardSkillsBackendWebDev;
