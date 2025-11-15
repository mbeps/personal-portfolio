/**
 * Converts a string into a URL-friendly slug.
 * This is done by converting the string to lowercase and replacing spaces with hyphens.
 * Slugs are useful for creating clean and readable URLs.
 *
 * @param input The string to convert.
 * @returns The slugified string.
 */
export default function stringToSlug(input: string): string {
  return input.toLowerCase().replace(/\s+/g, "-");
}
