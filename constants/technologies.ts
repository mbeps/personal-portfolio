import { Skill } from "@/types/skills";
import {
  firebase,
  supabase,
  pocketbase,
  auth0,
  clerkAuth,
  stripe,
  tailwindCSS,
  html,
  css,
  gitHubActions,
  jenkins,
  teamCity,
  travisCI,
  docker,
  podman,
  kubernetes,
  rest,
  graphQL,
  tRPC,
  postgreSQL,
  mySQL,
  sqlite,
  normalisation,
  mongoDB,
  redis,
  socketIO,
  pusher,
  openAI,
  replicateAI,
  probability,
  statistics,
  calculus,
  trigonometry,
  algebra,
  linearAlgebra,
  discrete,
  geometry,
  git,
  vagrant,
} from "./skills/hardSkills";

/**
 * Array of technologies.
 */
const technologies: Skill[] = [
  firebase,
  supabase,
  pocketbase,
  auth0,
  clerkAuth,
  stripe,

  tailwindCSS,
  html,
  css,

  gitHubActions,
  jenkins,
  teamCity,
  travisCI,

  docker,
  podman,
  kubernetes,

  rest,
  graphQL,
  tRPC,

  postgreSQL,
  mySQL,
  sqlite,
  normalisation,
  mongoDB,
  redis,

  openAI,
  replicateAI,

  probability,
  statistics,
  calculus,
  trigonometry,
  algebra,
  linearAlgebra,
  discrete,
  geometry,

  vagrant,
];

export { technologies };
