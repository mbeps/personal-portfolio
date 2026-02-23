import SkillInterface from "@/database/skills/SkillInterface";
import Database from "@/interfaces/Database";
import useFuseSearch from "./useFuseSearch";

// Stable module-level reference keeps the Fuse options memo from firing on every render.
const SKILL_ARRAY_FIELDS: Record<string, (item: SkillInterface) => string[]> = {
  relatedSkills: (item) =>
    item.relatedSkills?.map((skill) => skill.toString()) ?? [],
};

/**
 * Fuzzy search helper dedicated to the skills dictionary so the skill directory and language modal mirror the same ranking logic.
 * Mirrors the material variant but understands nested `relatedSkills`, keeping Fuse aware of grouped skills.
 *
 * @template T The type of the skill, extending `SkillInterface`.
 * @param skillsMap Hashmap of skills loaded from the static database.
 * @param searchTerm User supplied term.
 * @param searchKeys Fields inspected by Fuse, including arrays.
 * @returns Keys for skills that match the query, ordered by Fuse.
 */
function useFuseSkillSearch<T extends SkillInterface>(
  skillsMap: Database<T>,
  searchTerm: string,
  searchKeys: string[],
): string[] {
  return useFuseSearch<T>(
    skillsMap as Record<string, T>,
    searchTerm,
    searchKeys,
    SKILL_ARRAY_FIELDS as Partial<Record<string, (item: T) => string[]>>,
  );
}

export default useFuseSkillSearch;
