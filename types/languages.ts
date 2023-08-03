import { Skill } from "./skills";

/**
 * Interface for representing a repository.
 */
interface Repository {
  name: string;
  repository: string;
}

/**
 * Interface for representing a language.
 */
interface Language {
  language: string;
  skills?: Skill[];
  repositories?: Repository[];
}

export type { Skill, Repository, Language };
