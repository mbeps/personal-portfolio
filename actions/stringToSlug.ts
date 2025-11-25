/**
 * Minimal slug helper used throughout filters and enums so URL params stay predictable without importing a large dependency.
 *
 * @param input String to normalize.
 * @returns Lowercase, hyphen-delimited slug.
 */
export default function stringToSlug(input: string): string {
  return input.toLowerCase().replace(/\s+/g, "-");
}
