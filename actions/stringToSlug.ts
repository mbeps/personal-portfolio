export default function stringToSlug(input: string): string {
  return input.toLowerCase().replace(/ /g, "-");
}
