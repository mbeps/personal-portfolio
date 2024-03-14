import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsFrontendWebDev: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Recoil]: {
    name: "Recoil",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.StateManagement,
    ],
  },
  [SkillSlugEnum.Zustand]: {
    name: "Zustand",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.StateManagement,
    ],
  },
  [SkillSlugEnum.Jotai]: {
    name: "Jotai",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.StateManagement,
    ],
  },

  [SkillSlugEnum.Redux]: {
    name: "Redux",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.StateManagement,
    ],
  },
  [SkillSlugEnum.TailwindCSS]: {
    name: "Tailwind CSS",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.HTML]: {
    name: "HTML",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.CSS]: {
    name: "CSS",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.ReactJS]: {
    name: "React",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.Recoil,
      SkillSlugEnum.Zustand,
      SkillSlugEnum.Jotai,
      SkillSlugEnum.Redux,
    ],
  },
  [SkillSlugEnum.SvelteJS]: {
    name: "Svelte",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },

  [SkillSlugEnum.VueJS]: {
    name: "Vue",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserAuthentication,
    ],
  },
  [SkillSlugEnum.ChakraUI]: {
    name: "Chakra UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },

  [SkillSlugEnum.HeadlessUI]: {
    name: "Headless UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.VueJS,
    ],
  },
  [SkillSlugEnum.ShadcnUI]: {
    name: "Shadcn UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.ReactJS,
    ],
  },
  [SkillSlugEnum.RadixUI]: {
    name: "Radix UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.ReactJS,
    ],
  },

  [SkillSlugEnum.ReactQuery]: {
    name: "React Query",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.ReactJS,
    ],
  },
  [SkillSlugEnum.NextUI]: {
    name: "Next UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.ReactJS,
    ],
  },
  [SkillSlugEnum.Bootstrap]: {
    name: "Bootstrap",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.MaterialUI]: {
    name: "Material UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.SemanticUI]: {
    name: "Semantic UI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.AntDesign]: {
    name: "Ant Design",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.StoryBooks]: {
    name: "Storybooks",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.SimpleGUI]: {
    name: "Simple GUI",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.UserCentricDesign],
  },
  [SkillSlugEnum.Axios]: {
    name: "Axios",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.WebDevelopment, SkillSlugEnum.APIs],
  },
};

export default technicalHardSkillsFrontendWebDev;
