import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsAPIs: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.REST]: {
    name: "REST",
    category: SkillCategoriesEnum.APIs,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.WebDevelopment, SkillSlugEnum.APIs],
  },
  [SkillSlugEnum.Apollo]: {
    name: "Apollo",
    category: SkillCategoriesEnum.APIs,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.WebDevelopment, SkillSlugEnum.APIs],
  },
  [SkillSlugEnum.GraphQL]: {
    name: "GraphQL",
    category: SkillCategoriesEnum.APIs,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.APIs,
      SkillSlugEnum.Apollo,
    ],
  },
  [SkillSlugEnum.TRPC]: {
    name: "tRPC",
    category: SkillCategoriesEnum.APIs,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.WebDevelopment, SkillSlugEnum.APIs],
  },
  [SkillSlugEnum.SocketIO]: {
    name: "Socket.IO",
    category: SkillCategoriesEnum.WebSockets,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.WebDevelopment, SkillSlugEnum.WebSockets],
  },
  [SkillSlugEnum.Pusher]: {
    name: "Pusher",
    category: SkillCategoriesEnum.WebSockets,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.WebDevelopment, SkillSlugEnum.WebSockets],
  },
  [SkillSlugEnum.OpenAI]: {
    name: "OpenAI",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.APIs, SkillSlugEnum.ArtificialIntelligence],
  },
  [SkillSlugEnum.ReplicateAI]: {
    name: "Replicate AI",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.APIs, SkillSlugEnum.ArtificialIntelligence],
  },
};

export default technicalHardSkillsAPIs;
