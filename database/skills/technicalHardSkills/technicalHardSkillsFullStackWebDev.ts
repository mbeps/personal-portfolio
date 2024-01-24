import SkillInterface from "@/interfaces/skills/SkillInterface";
import { webDevelopment, userCentricDesign } from "../generalSkills";
import { react, svelte, vue } from "./technicalHardSkillsFrontendWebDev";
import { javascript, typescript } from "../languages";

export const nextjs: SkillInterface = {
  name: "Next.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
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
  skillType: "hard",
  slug: "angular",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const nuxtjs: SkillInterface = {
  name: "Nuxt.js",
  category: "Full-Stack Web Development",
  skillType: "hard",
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
  skillType: "hard",
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
