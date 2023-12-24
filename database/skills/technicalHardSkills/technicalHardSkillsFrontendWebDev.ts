import Skill from "@/types/skills";
import {
  apis,
  stateManagement,
  userCentricDesign,
  webDevelopment,
} from "../generalSkills";

export const recoil: Skill = {
  name: "Recoil",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "recoil",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};
export const zustand: Skill = {
  name: "Zustand",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "zustand",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const jotai: Skill = {
  name: "Jotai",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "jotai",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const redux: Skill = {
  name: "Redux",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "redux",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const tailwindCSS: Skill = {
  name: "Tailwind CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "tailwind-css",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const html: Skill = {
  name: "HTML",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "html",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const css: Skill = {
  name: "CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "css",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
  technicalHardSkills: [tailwindCSS],
};

export const react: Skill = {
  name: "React",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "react-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
  technicalHardSkills: [recoil, zustand, jotai, redux],
};

export const svelte: Skill = {
  name: "Svelte",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "svelte",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const vue: Skill = {
  name: "Vue",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "vue-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const chakraUI: Skill = {
  name: "Chakra UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "chakra-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const headlessUI: Skill = {
  name: "Headless UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "headless-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const shadcnUI: Skill = {
  name: "Shadcn UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "shadow-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const radixUI: Skill = {
  name: "Radix UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "radix-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const reactQuery: Skill = {
  name: "React Query",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "react-query",
  technicalGeneralSkills: [webDevelopment, apis],
};
export const nextUI: Skill = {
  name: "Next UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "next-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const bootstrap: Skill = {
  name: "Bootstrap",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "bootstrap",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const materialUI: Skill = {
  name: "Material UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "material-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const semanticUI: Skill = {
  name: "Semantic UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "semantic-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const antDesign: Skill = {
  name: "Ant Design",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "ant-design",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const storybooks: Skill = {
  name: "Storybooks",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "storybooks",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const simpleGui: Skill = {
  name: "Simple GUI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "simple-gui",
  technicalGeneralSkills: [userCentricDesign],
};

export const axios: Skill = {
  name: "Axios",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "axios",
  technicalGeneralSkills: [webDevelopment, apis],
};

const technicalHardSkillsFrontendWebDev: Skill[] = [
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
