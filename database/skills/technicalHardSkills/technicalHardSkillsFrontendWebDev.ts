import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  apis,
  stateManagement,
  userCentricDesign,
  webDevelopment,
} from "../generalSkills";
import { javascript, typescript } from "../languages";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsFrontendWebDev: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Recoil]: {
    name: "Recoil",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, stateManagement],
  },
  [SkillSlugEnum.Zustand]: {
    name: "Zustand",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, stateManagement],
  },
  [SkillSlugEnum.Jotai]: {
    name: "Jotai",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, stateManagement],
  },

  [SkillSlugEnum.Redux]: {
    name: "Redux",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, stateManagement],
  },
  [SkillSlugEnum.TailwindCSS]: {
    name: "Tailwind CSS",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.HTML]: {
    name: "HTML",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.CSS]: {
    name: "CSS",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign, tailwindCSS],
  },
  [SkillSlugEnum.React]: {
    name: "React",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
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
  },
  [SkillSlugEnum.Svelte]: {
    name: "Svelte",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript, webDevelopment, userCentricDesign],
  },

  [SkillSlugEnum.Vue]: {
    name: "Vue",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript, webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.ChakraUI]: {
    name: "Chakra UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },

  [SkillSlugEnum.HeadlessUI]: {
    name: "Headless UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.ShadcnUI]: {
    name: "Shadcn UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.RadixUI]: {
    name: "Radix UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },

  [SkillSlugEnum.ReactQuery]: {
    name: "React Query",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, apis],
  },
  [SkillSlugEnum.NextUI]: {
    name: "Next UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.Bootstrap]: {
    name: "Bootstrap",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.MaterialUI]: {
    name: "Material UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.SemanticUI]: {
    name: "Semantic UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.AntDesign]: {
    name: "Ant Design",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.StoryBooks]: {
    name: "Storybooks",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.SimpleGUI]: {
    name: "Simple GUI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [userCentricDesign],
  },
  [SkillSlugEnum.Axios]: {
    name: "Axios",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [webDevelopment, apis],
  },
};

export default technicalHardSkillsFrontendWebDev;
