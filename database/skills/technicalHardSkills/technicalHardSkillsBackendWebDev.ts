import Skill from "@/types/skills";
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

export const firebase: Skill = {
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

export const supabase: Skill = {
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

export const pocketbase: Skill = {
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

export const auth0: Skill = {
  name: "Auth0",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "auth0",
  technicalGeneralSkills: [userAuthentication, sdks],
};

export const clerkAuth: Skill = {
  name: "Clerk Auth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "clerkAuth",
  technicalGeneralSkills: [userAuthentication, sdks],
};

export const nextauth: Skill = {
  name: "NextAuth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-auth",
  technicalGeneralSkills: [userAuthentication, webDevelopment],
};

export const stripe: Skill = {
  name: "Stripe",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "stripe",
  technicalGeneralSkills: [sdks],
};

export const express: Skill = {
  name: "Express",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "express-js",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const flask: Skill = {
  name: "Flask",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "flask",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const django: Skill = {
  name: "Django",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "django",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const spring: Skill = {
  name: "Spring",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "spring",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const springBoot: Skill = {
  name: "Spring Boot",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "springboot",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const cloudinary: Skill = {
  name: "Cloudinary",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "cloudinary",
  technicalGeneralSkills: [webDevelopment],
};
export const jwt: Skill = {
  name: "JWT",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "jtw",
  technicalGeneralSkills: [userAuthentication],
};

export const gunicorn: Skill = {
  name: "Gunicorn",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "gunicon",
  technicalGeneralSkills: [webDevelopment],
};

export const jinja: Skill = {
  name: "Jinja",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "jinja",
  technicalGeneralSkills: [webDevelopment],
};

const technicalHardSkillsBackendWebDev: Skill[] = [
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
