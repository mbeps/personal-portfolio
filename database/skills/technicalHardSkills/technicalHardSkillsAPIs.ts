import SkillInterface from "@/interfaces/skills/SkillInterface";
import { webDevelopment, apis, artificialIntelligence } from "../generalSkills";

export const rest: SkillInterface = {
  name: "REST",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "rest-api",
  relatedSkills: [webDevelopment, apis],
};

export const apollo: SkillInterface = {
  name: "Apollo",
  category: "APIs",
  skillType: "hard",
  slug: "apollo",
  relatedSkills: [webDevelopment, apis],
};

export const graphQL: SkillInterface = {
  name: "GraphQL",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "graphql-api",
  relatedSkills: [webDevelopment, apis, apollo],
};

export const tRPC: SkillInterface = {
  name: "tRPC",
  category: "APIs",
  skillType: "hard",
  slug: "trpc-api",
  relatedSkills: [webDevelopment, apis],
};

export const socketIO: SkillInterface = {
  name: "Socket.IO",
  category: "Web Sockets",
  skillType: "hard",
  slug: "socket-io",
  relatedSkills: [webDevelopment],
};

export const pusher: SkillInterface = {
  name: "Pusher",
  category: "Web Sockets",
  skillType: "hard",
  slug: "pusher",
  relatedSkills: [webDevelopment],
};

export const openAI: SkillInterface = {
  name: "OpenAI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "open-ai",
  relatedSkills: [apis, artificialIntelligence],
};

export const replicateAI: SkillInterface = {
  name: "Replicate AI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
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
