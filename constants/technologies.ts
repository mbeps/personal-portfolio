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
  probabilityAndStatistics,
  calculus,
  trigonometry,
  algebra,
  linearAlgebra,
  discrete,
  geometry,
  git,
  vagrant,
  linux,
} from "./skills";

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

  probabilityAndStatistics,
  calculus,
  trigonometry,
  algebra,
  linearAlgebra,
  discrete,
  geometry,

  git,
  vagrant,
  linux,
];

export { technologies };
