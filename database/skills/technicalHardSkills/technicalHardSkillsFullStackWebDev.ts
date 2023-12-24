import Skill from "@/types/skills";
import { webDevelopment, userCentricDesign } from "../generalSkills";

export const nextjs: Skill = {
  name: "Next.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const angular: Skill = {
  name: "Angular",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "angular",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const nuxtjs: Skill = {
  name: "Nuxt.js",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "nuxt-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const svelteKit: Skill = {
  name: "SvelteKit",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "svelte-kit",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

const technicalHardSkillsFullStackWebDev: Skill[] = [
  nextjs,
  angular,
  nuxtjs,
  svelteKit,
];

export default technicalHardSkillsFullStackWebDev;
