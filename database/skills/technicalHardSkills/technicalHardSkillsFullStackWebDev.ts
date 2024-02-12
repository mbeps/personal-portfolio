import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import { userCentricDesign, webDevelopment } from "../generalSkills";
import { javascript, typescript } from "../languages";
import { react, svelte, vue } from "./technicalHardSkillsFrontendWebDev";

export const nextjs: SkillInterface = {
  name: "Next.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "next-js",
  relatedSkills: [
    javascript,
    typescript,
    webDevelopment,
    userCentricDesign,
    react,
  ],
};

export const angular: SkillInterface = {
  name: "Angular",
  category: "Full-Stack Web Development",
  skillType: SkillTypes.Hard,
  slug: "angular",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const nuxtjs: SkillInterface = {
  name: "Nuxt.js",
  category: "Full-Stack Web Development",
  skillType: SkillTypes.Hard,
  slug: "nuxt-js",
  relatedSkills: [
    javascript,
    typescript,
    webDevelopment,
    userCentricDesign,
    vue,
  ],
};

export const svelteKit: SkillInterface = {
  name: "SvelteKit",
  category: "Full-Stack Web Development",
  skillType: SkillTypes.Hard,
  slug: "svelte-kit",
  relatedSkills: [
    javascript,
    typescript,
    webDevelopment,
    userCentricDesign,
    svelte,
  ],
};

const technicalHardSkillsFullStackWebDev: SkillInterface[] = [
  nextjs,
  angular,
  nuxtjs,
  svelteKit,
];

export default technicalHardSkillsFullStackWebDev;
