import Skill from "@/types/skills";
import { webDevelopment, apis, artificialIntelligence } from "../generalSkills";

export const rest: Skill = {
  name: "REST",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "rest-api",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const apollo: Skill = {
  name: "Apollo",
  category: "APIs",
  skillType: "hard",
  slug: "apollo",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const graphQL: Skill = {
  name: "GraphQL",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "graphql-api",
  technicalGeneralSkills: [webDevelopment, apis],
  technicalHardSkills: [apollo],
};

export const tRPC: Skill = {
  name: "tRPC",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "trpc-api",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const socketIO: Skill = {
  name: "Socket.IO",
  category: "Web Sockets",
  skillType: "hard",
  slug: "socket-io",
  technicalGeneralSkills: [webDevelopment],
};

export const pusher: Skill = {
  name: "Pusher",
  category: "Web Sockets",
  skillType: "hard",
  slug: "pusher",
  technicalGeneralSkills: [webDevelopment],
};

export const openAI: Skill = {
  name: "OpenAI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "open-ai",
  technicalGeneralSkills: [apis, artificialIntelligence],
};

export const replicateAI: Skill = {
  name: "Replicate AI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "repliate-ai",
  technicalGeneralSkills: [apis, artificialIntelligence],
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