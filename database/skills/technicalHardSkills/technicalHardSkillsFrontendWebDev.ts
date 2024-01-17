import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  apis,
  stateManagement,
  userCentricDesign,
  webDevelopment,
} from "../generalSkills";

export const recoil: SkillInterface = {
  name: "Recoil",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "recoil",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};
export const zustand: SkillInterface = {
  name: "Zustand",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "zustand",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const jotai: SkillInterface = {
  name: "Jotai",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "jotai",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const redux: SkillInterface = {
  name: "Redux",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "redux",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const tailwindCSS: SkillInterface = {
  name: "Tailwind CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "tailwind-css",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const html: SkillInterface = {
  name: "HTML",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "html",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const css: SkillInterface = {
  name: "CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "css",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
  technicalHardSkills: [tailwindCSS],
};

export const react: SkillInterface = {
  name: "React",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "react-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
  technicalHardSkills: [recoil, zustand, jotai, redux],
};

export const svelte: SkillInterface = {
  name: "Svelte",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "svelte",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const vue: SkillInterface = {
  name: "Vue",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "vue-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const chakraUI: SkillInterface = {
  name: "Chakra UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "chakra-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const headlessUI: SkillInterface = {
  name: "Headless UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "headless-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const shadcnUI: SkillInterface = {
  name: "Shadcn UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "shadow-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const radixUI: SkillInterface = {
  name: "Radix UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "radix-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const reactQuery: SkillInterface = {
  name: "React Query",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "react-query",
  technicalGeneralSkills: [webDevelopment, apis],
};
export const nextUI: SkillInterface = {
  name: "Next UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "next-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const bootstrap: SkillInterface = {
  name: "Bootstrap",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "bootstrap",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const materialUI: SkillInterface = {
  name: "Material UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "material-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const semanticUI: SkillInterface = {
  name: "Semantic UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "semantic-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const antDesign: SkillInterface = {
  name: "Ant Design",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "ant-design",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const storybooks: SkillInterface = {
  name: "Storybooks",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "storybooks",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const simpleGui: SkillInterface = {
  name: "Simple GUI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "simple-gui",
  technicalGeneralSkills: [userCentricDesign],
};

export const axios: SkillInterface = {
  name: "Axios",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "axios",
  technicalGeneralSkills: [webDevelopment, apis],
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
