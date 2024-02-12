import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import {
  apis,
  stateManagement,
  userCentricDesign,
  webDevelopment,
} from "../generalSkills";
import { javascript, typescript } from "../languages";

export const recoil: SkillInterface = {
  name: "Recoil",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "recoil",
  relatedSkills: [webDevelopment, stateManagement],
};
export const zustand: SkillInterface = {
  name: "Zustand",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "zustand",
  relatedSkills: [webDevelopment, stateManagement],
};

export const jotai: SkillInterface = {
  name: "Jotai",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "jotai",
  relatedSkills: [webDevelopment, stateManagement],
};

export const redux: SkillInterface = {
  name: "Redux",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "redux",
  relatedSkills: [webDevelopment, stateManagement],
};

export const tailwindCSS: SkillInterface = {
  name: "Tailwind CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "tailwind-css",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const html: SkillInterface = {
  name: "HTML",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "html",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const css: SkillInterface = {
  name: "CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "css",
  relatedSkills: [webDevelopment, userCentricDesign, tailwindCSS],
};

export const react: SkillInterface = {
  name: "React",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "react-js",
  relatedSkills: [
    javascript,
    typescript,
    webDevelopment,
    userCentricDesign,
    recoil,
    zustand,
    jotai,
    redux,
  ],
};

export const svelte: SkillInterface = {
  name: "Svelte",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "svelte",
  relatedSkills: [javascript, typescript, webDevelopment, userCentricDesign],
};

export const vue: SkillInterface = {
  name: "Vue",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "vue-js",
  relatedSkills: [javascript, typescript, webDevelopment, userCentricDesign],
};

export const chakraUI: SkillInterface = {
  name: "Chakra UI",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "chakra-ui",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const headlessUI: SkillInterface = {
  name: "Headless UI",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "headless-ui",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const shadcnUI: SkillInterface = {
  name: "Shadcn UI",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "shadow-ui",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const radixUI: SkillInterface = {
  name: "Radix UI",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "radix-ui",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const reactQuery: SkillInterface = {
  name: "React Query",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "react-query",
  relatedSkills: [webDevelopment, apis],
};
export const nextUI: SkillInterface = {
  name: "Next UI",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "next-ui",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const bootstrap: SkillInterface = {
  name: "Bootstrap",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "bootstrap",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const materialUI: SkillInterface = {
  name: "Material UI",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "material-ui",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const semanticUI: SkillInterface = {
  name: "Semantic UI",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "semantic-ui",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const antDesign: SkillInterface = {
  name: "Ant Design",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "ant-design",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const storybooks: SkillInterface = {
  name: "Storybooks",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "storybooks",
  relatedSkills: [webDevelopment, userCentricDesign],
};

export const simpleGui: SkillInterface = {
  name: "Simple GUI",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "simple-gui",
  relatedSkills: [userCentricDesign],
};

export const axios: SkillInterface = {
  name: "Axios",
  category: "Front-End Web Development",
  skillType: SkillTypes.Hard,
  slug: "axios",
  relatedSkills: [webDevelopment, apis],
};

const technicalHardSkillsFrontendWebDev: SkillInterface[] = [
  tailwindCSS,
  html,
  css,
  react,
  svelte,
  vue,
  chakraUI,
  recoil,
  headlessUI,
  shadcnUI,
  radixUI,
  reactQuery,
  nextUI,
  bootstrap,
  materialUI,
  semanticUI,
  antDesign,
  storybooks,
  simpleGui,
  zustand,
  jotai,
  redux,
  axios,
];

export default technicalHardSkillsFrontendWebDev;
