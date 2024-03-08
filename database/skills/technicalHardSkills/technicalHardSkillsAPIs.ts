import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import { webDevelopment, apis, artificialIntelligence } from "../generalSkills";

export const rest: SkillInterface = {
  name: "REST",
  category: SkillCategoriesEnum.APIs,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "rest-api",
  relatedSkills: [webDevelopment, apis],
};

export const apollo: SkillInterface = {
  name: "Apollo",
  category: SkillCategoriesEnum.APIs,
  skillType: SkillTypes.Hard,
  slug: "apollo",
  relatedSkills: [webDevelopment, apis],
};

export const graphQL: SkillInterface = {
  name: "GraphQL",
  category: SkillCategoriesEnum.APIs,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "graphql-api",
  relatedSkills: [webDevelopment, apis, apollo],
};

export const tRPC: SkillInterface = {
  name: "tRPC",
  category: SkillCategoriesEnum.APIs,
  skillType: SkillTypes.Hard,
  slug: "trpc-api",
  relatedSkills: [webDevelopment, apis],
};

export const socketIO: SkillInterface = {
  name: "Socket.IO",
  category: SkillCategoriesEnum.WebSockets,
  skillType: SkillTypes.Hard,
  slug: "socket-io",
  relatedSkills: [webDevelopment],
};

export const pusher: SkillInterface = {
  name: "Pusher",
  category: SkillCategoriesEnum.WebSockets,
  skillType: SkillTypes.Hard,
  slug: "pusher",
  relatedSkills: [webDevelopment],
};

export const openAI: SkillInterface = {
  name: "OpenAI",
  category: SkillCategoriesEnum.ArtificialIntelligence,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "open-ai",
  relatedSkills: [apis, artificialIntelligence],
};

export const replicateAI: SkillInterface = {
  name: "Replicate AI",
  category: SkillCategoriesEnum.ArtificialIntelligence,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "repliate-ai",
  relatedSkills: [apis, artificialIntelligence],
};

const technicalHardSkillsAPIs = [
  rest,
  graphQL,
  tRPC,
  socketIO,
  pusher,
  openAI,
  replicateAI,
  apollo,
];

export default technicalHardSkillsAPIs;
