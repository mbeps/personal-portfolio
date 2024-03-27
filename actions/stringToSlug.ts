/**
 * Converts a string to a slug so that it can be used as a key in places like URLs.
 * @param input String to convert to a slug
 * @returns Converted string
 */
export default function stringToSlug(input: string): string {
  return input.toLowerCase().replace(/\s+/g, "-");
}
