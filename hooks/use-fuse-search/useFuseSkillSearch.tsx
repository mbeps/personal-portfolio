import SkillInterface from "@/database/skills/SkillInterface";
import Database from "@/interfaces/Database";
import Fuse from "fuse.js";
import { useMemo } from "react";

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
  const entries = useMemo(
    () => Object.entries(skillsMap) as [string, T][],
    [skillsMap],
  );

  // Enhanced search options to handle nested arrays
  const searchOptions = useMemo(
    () => ({
      keys: searchKeys.map((key) => {
        // Adding custom path logic for nested arrays like 'relatedSkills'
        if (key === "relatedSkills") {
          return {
            name: key,
            getFn: (entry: [string, T]) =>
              entry[1].relatedSkills?.map((skill) => skill.toString()) ?? [],
          };
        }

        return {
          name: key,
          getFn: (entry: [string, T]) => {
            const value = (entry[1] as Record<string, unknown>)[key];

            if (Array.isArray(value)) {
              return value.map((item) => item?.toString() ?? "");
            }

            return value?.toString() ?? "";
          },
        };
      }),
      threshold: 0.3, // Fixed threshold for fuzzy matching
      includeScore: true, // Optional: include scoring to debug or refine searches
    }),
    [searchKeys],
  );

  // Initialize Fuse with the skills array and search options
  const fuse = useMemo(
    () => new Fuse(entries, searchOptions),
    [entries, searchOptions],
  );

  return useMemo(() => {
    if (!searchTerm) {
      return entries.map(([key]) => key);
    }

    return fuse.search(searchTerm).map((result) => result.item[0]);
  }, [entries, fuse, searchTerm]);
}

export default useFuseSkillSearch;
