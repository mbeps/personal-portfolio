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

export const firebase: SkillInterface = {
  name: "Firebase",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
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
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
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
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
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
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "auth0",
  relatedSkills: [userAuthentication, sdks],
};

export const clerkAuth: SkillInterface = {
  name: "Clerk Auth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "clerkAuth",
  relatedSkills: [userAuthentication, sdks],
};

export const nextauth: SkillInterface = {
  name: "NextAuth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-auth",
  relatedSkills: [javascript, typescript, userAuthentication, webDevelopment],
};

export const stripe: SkillInterface = {
  name: "Stripe",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "stripe",
  relatedSkills: [sdks],
};

export const express: SkillInterface = {
  name: "Express",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "express-js",
  relatedSkills: [javascript, typescript, webDevelopment, apis],
};

export const flask: SkillInterface = {
  name: "Flask",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "flask",
  relatedSkills: [webDevelopment, apis, python],
};

export const django: SkillInterface = {
  name: "Django",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "django",
  relatedSkills: [webDevelopment, apis, python],
};

export const spring: SkillInterface = {
  name: "Spring",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "spring",
  relatedSkills: [webDevelopment, apis, java],
};

export const springBoot: SkillInterface = {
  name: "Spring Boot",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "springboot",
  relatedSkills: [java, webDevelopment, apis],
};

export const cloudinary: SkillInterface = {
  name: "Cloudinary",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "cloudinary",
  relatedSkills: [webDevelopment],
};

export const edgestore: SkillInterface = {
  name: "Edge Store",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "edge-store",
  relatedSkills: [webDevelopment],
};

export const jwt: SkillInterface = {
  name: "JWT",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "jtw",
  relatedSkills: [userAuthentication],
};

export const gunicorn: SkillInterface = {
  name: "Gunicorn",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "gunicon",
  relatedSkills: [python, webDevelopment],
};

export const jinja: SkillInterface = {
  name: "Jinja",
  category: "Code Quality",
  skillType: "hard",
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
