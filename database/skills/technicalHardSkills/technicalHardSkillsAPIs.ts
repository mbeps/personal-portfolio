import SkillInterface from "@/interfaces/skills/SkillInterface";
import { webDevelopment, apis, artificialIntelligence } from "../generalSkills";

export const rest: SkillInterface = {
  name: "REST",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "rest-api",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const apollo: SkillInterface = {
  name: "Apollo",
  category: "APIs",
  skillType: "hard",
  slug: "apollo",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const graphQL: SkillInterface = {
  name: "GraphQL",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "graphql-api",
  technicalGeneralSkills: [webDevelopment, apis],
  technicalHardSkills: [apollo],
};

export const tRPC: SkillInterface = {
  name: "tRPC",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "trpc-api",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const socketIO: SkillInterface = {
  name: "Socket.IO",
  category: "Web Sockets",
  skillType: "hard",
  slug: "socket-io",
  technicalGeneralSkills: [webDevelopment],
};

export const pusher: SkillInterface = {
  name: "Pusher",
  category: "Web Sockets",
  skillType: "hard",
  slug: "pusher",
  technicalGeneralSkills: [webDevelopment],
};

export const openAI: SkillInterface = {
  name: "OpenAI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "open-ai",
  technicalGeneralSkills: [apis, artificialIntelligence],
};

export const replicateAI: SkillInterface = {
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
