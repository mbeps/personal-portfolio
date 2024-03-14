import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { webDevelopment, apis, artificialIntelligence } from "../generalSkills";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsAPIs: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.REST]: {
    name: "REST",
    category: SkillCategoriesEnum.APIs,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    // relatedSkills: [webDevelopment, apis],
  },
  [SkillSlugEnum.Apollo]: {
    name: "Apollo",
    category: SkillCategoriesEnum.APIs,
    skillType: SkillTypesEnum.Hard,
    // relatedSkills: [webDevelopment, apis],
  },
  [SkillSlugEnum.GraphQL]: {
    name: "GraphQL",
    category: SkillCategoriesEnum.APIs,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    // relatedSkills: [webDevelopment, apis, apollo],
  },
  [SkillSlugEnum.TRPC]: {
    name: "tRPC",
    category: SkillCategoriesEnum.APIs,
    skillType: SkillTypesEnum.Hard,
    // relatedSkills: [webDevelopment, apis],
  },
  [SkillSlugEnum.SocketIO]: {
    name: "Socket.IO",
    category: SkillCategoriesEnum.WebSockets,
    skillType: SkillTypesEnum.Hard,
    // relatedSkills: [webDevelopment],
  },
  [SkillSlugEnum.Pusher]: {
    name: "Pusher",
    category: SkillCategoriesEnum.WebSockets,
    skillType: SkillTypesEnum.Hard,
    // relatedSkills: [webDevelopment],
  },
  [SkillSlugEnum.OpenAI]: {
    name: "OpenAI",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    // relatedSkills: [apis, artificialIntelligence],
  },
  [SkillSlugEnum.ReplicateAI]: {
    name: "Replicate AI",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    // relatedSkills: [apis, artificialIntelligence],
  },
};

export default technicalHardSkillsAPIs;
