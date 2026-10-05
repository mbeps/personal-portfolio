import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import stringToSlug from "@/lib/string-to-slug";

/**
 * Resolves a natural language skill name or slug into a canonical SkillDatabaseKeys slug.
 * Handles inputs like "Spring Boot", "spring-boot", "React.js", "python", etc.
 *
 * @param input Search string representing a skill.
 * @returns Canonical SkillDatabaseKeys key if matched, or undefined.
 */
export function resolveSkillKey(
  input?: string,
): SkillDatabaseKeys | undefined {
  if (!input || input.trim() === "") {
    return undefined;
  }

  const clean = input.trim().toLowerCase();
  const slugified = stringToSlug(clean);

  // 1. Direct match on key or slug
  if (clean in skillDatabaseMap) {
    return clean as SkillDatabaseKeys;
  }
  if (slugified in skillDatabaseMap) {
    return slugified as SkillDatabaseKeys;
  }

  // 2. Exact match on display name (case-insensitive)
  const exactNameMatch = Object.entries(skillDatabaseMap).find(
    ([, skill]) => skill.name.toLowerCase() === clean,
  );
  if (exactNameMatch) {
    return exactNameMatch[0] as SkillDatabaseKeys;
  }

  // 3. Alphanumeric match (ignoring dots, dashes, spaces e.g. "reactjs" -> "react-js")
  const stripChars = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const strippedClean = stripChars(clean);
  if (strippedClean.length >= 2) {
    const strippedMatch = Object.entries(skillDatabaseMap).find(
      ([key, skill]) =>
        stripChars(key) === strippedClean ||
        stripChars(skill.name) === strippedClean,
    );
    if (strippedMatch) {
      return strippedMatch[0] as SkillDatabaseKeys;
    }
  }

  // 4. Substring match where skill name or key contains the full query (at least 3 characters)
  if (clean.length >= 3) {
    const partialMatch = Object.entries(skillDatabaseMap).find(
      ([key, skill]) =>
        skill.name.toLowerCase().includes(clean) ||
        key.toLowerCase().includes(slugified),
    );
    if (partialMatch) {
      return partialMatch[0] as SkillDatabaseKeys;
    }
  }

  return undefined;
}

export default resolveSkillKey;

