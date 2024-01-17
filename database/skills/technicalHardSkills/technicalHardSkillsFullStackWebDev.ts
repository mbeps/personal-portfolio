import SkillInterface from "@/interfaces/skills/SkillInterface";
import { webDevelopment, userCentricDesign } from "../generalSkills";
import { react, svelte, vue } from "./technicalHardSkillsFrontendWebDev";

export const nextjs: SkillInterface = {
  name: "Next.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
  technicalHardSkills: [react],
};

export const angular: SkillInterface = {
  name: "Angular",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "angular",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const nuxtjs: SkillInterface = {
  name: "Nuxt.js",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "nuxt-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
  technicalHardSkills: [vue],
};

export const svelteKit: SkillInterface = {
  name: "SvelteKit",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "svelte-kit",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
  technicalHardSkills: [svelte],
};

const technicalHardSkillsFullStackWebDev: SkillInterface[] = [
  nextjs,
  angular,
  nuxtjs,
  svelteKit,
];

export default technicalHardSkillsFullStackWebDev;
