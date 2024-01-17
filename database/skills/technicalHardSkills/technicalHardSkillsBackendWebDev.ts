import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  databaseManagementSystems,
  noSql,
  databases,
  indexing,
  cloudComputing,
  userAuthentication,
  sdks,
  webDevelopment,
  apis,
} from "../generalSkills";

export const firebase: SkillInterface = {
  name: "Firebase",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "firebase",
  technicalGeneralSkills: [
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
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "supabase",
  technicalGeneralSkills: [
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
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "pocketbase",
  technicalGeneralSkills: [
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
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "auth0",
  technicalGeneralSkills: [userAuthentication, sdks],
};

export const clerkAuth: SkillInterface = {
  name: "Clerk Auth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "clerkAuth",
  technicalGeneralSkills: [userAuthentication, sdks],
};

export const nextauth: SkillInterface = {
  name: "NextAuth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-auth",
  technicalGeneralSkills: [userAuthentication, webDevelopment],
};

export const stripe: SkillInterface = {
  name: "Stripe",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "stripe",
  technicalGeneralSkills: [sdks],
};

export const express: SkillInterface = {
  name: "Express",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "express-js",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const flask: SkillInterface = {
  name: "Flask",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "flask",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const django: SkillInterface = {
  name: "Django",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "django",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const spring: SkillInterface = {
  name: "Spring",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "spring",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const springBoot: SkillInterface = {
  name: "Spring Boot",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "springboot",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const cloudinary: SkillInterface = {
  name: "Cloudinary",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "cloudinary",
  technicalGeneralSkills: [webDevelopment],
};

export const edgestore: SkillInterface = {
  name: "Edge Store",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "edge-store",
  technicalGeneralSkills: [webDevelopment],
};

export const jwt: SkillInterface = {
  name: "JWT",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "jtw",
  technicalGeneralSkills: [userAuthentication],
};

export const gunicorn: SkillInterface = {
  name: "Gunicorn",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "gunicon",
  technicalGeneralSkills: [webDevelopment],
};

export const jinja: SkillInterface = {
  name: "Jinja",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "jinja",
  technicalGeneralSkills: [webDevelopment],
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
