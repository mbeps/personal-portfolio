import { useMemo } from "react";
import Fuse from "fuse.js";
import SkillInterface from "@/database/Skills/SkillInterface";

/**
 * Custom hook for performing a fuzzy search using Fuse.js on a hashmap of skills.
 *
 * @param skillsMap - A hashmap of skills to search.
 * @param searchTerm - The term to search for.
 * @param searchKeys - The keys to search within the skills.
 * @returns A list of keys of the skills that match the search term.
 * @see {@link https://fusejs.io/} for more information on Fuse.js.
 */
function useFuseSkillSearch<T extends SkillInterface>(
  skillsMap: Database<T>,
  searchTerm: string,
  searchKeys: string[]
): string[] {
  // Enhanced search options to handle nested arrays
  const searchOptions = useMemo(
    () => ({
      keys: searchKeys.map((key) => {
        // Adding custom path logic for nested arrays like 'relatedSkills'
        if (key.includes("relatedSkills")) {
          return {
            name: key,
            getFn: (item: T) =>
              item.relatedSkills?.map((skill) => skill.toString()) || [], // Assuming relatedSkills is an array of keys
          };
        }
        return key;
      }),
      threshold: 0.3, // Fixed threshold for fuzzy matching
      includeScore: true, // Optional: include scoring to debug or refine searches
    }),
    [searchKeys]
  );

  // Convert the hashmap into an array for Fuse.js
  const skillsArray: T[] = useMemo(() => Object.values(skillsMap), [skillsMap]);

  // Initialize Fuse with the skills array and search options
  const fuse = useMemo(
    () => new Fuse(skillsArray, searchOptions),
    [skillsArray, searchOptions]
  );

  // Perform the search
  const searchedSkills = useMemo(() => {
    return searchTerm
      ? fuse.search(searchTerm).map((result) => result.item)
      : skillsArray;
  }, [fuse, skillsArray, searchTerm]);

  // Create a reverse lookup map for skill names to keys
  const nameToKeyMap = useMemo(() => {
    return Object.keys(skillsMap).reduce((acc, key) => {
      const skill = skillsMap[key];
      acc[skill.name] = key;
      return acc;
    }, {} as { [name: string]: string });
  }, [skillsMap]);

  // Convert the searched skills back into a hashmap using the reverse lookup
  const filteredSkillsMap = useMemo(() => {
    return searchedSkills.reduce((acc, skill) => {
      const key = nameToKeyMap[skill.name];
      if (key) {
        acc[key] = skill;
      }
      return acc;
    }, {} as Database<T>);
  }, [searchedSkills, nameToKeyMap]);

  return Object.keys(filteredSkillsMap);
}

export default useFuseSkillSearch;
