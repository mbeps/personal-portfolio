import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Generic utility that implements the extract → deduplicate-by-slug → optional-sort → prepend-All
 * pattern shared by every filter-option generator in the project.
 *
 * @param database  Record of items to derive options from.
 * @param extractor Converts one database item into one or more {slug, entryName} objects.
 * @param sort      When true, sorts the non-All options alphabetically by entryName.
 * @returns         FilterOption array starting with the All catch-all entry.
 */
export default function generateFilterOptions<T>(
  database: Record<string, T>,
  extractor: (
    item: T,
  ) =>
    | { slug: string; entryName: string }
    | { slug: string; entryName: string }[],
  sort = false,
): FilterOption[] {
  const seen = new Map<string, FilterOption>();

  for (const item of Object.values(database)) {
    const result = extractor(item);
    const options = Array.isArray(result) ? result : [result];
    for (const option of options) {
      if (!seen.has(option.slug)) {
        seen.set(option.slug, option);
      }
    }
  }

  const unique = Array.from(seen.values());
  if (sort) {
    unique.sort((a, b) => a.entryName.localeCompare(b.entryName));
  }

  return [{ slug: "all", entryName: "All" }, ...unique];
}
