import { Skill } from "./skills";

/**
 * Interface for representing a language.
 */
interface Language {
  language: string;
  skills?: Skill[];
  repository?: string;
}

export type { Skill, Language };
