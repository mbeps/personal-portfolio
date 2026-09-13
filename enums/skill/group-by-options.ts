/**
 * Grouping dimensions accepted by `groupSkills` and consumed by `useSkillFilterState`.
 * Each member corresponds to a URL-safe slug value stored in the filter URL params.
 * Downstream components use this enum to request a specific visual organisation of the skills list.
 * @author Maruf Bepary
 */
export enum GroupByOptions {
  /** Group skills by their parent programming language, nesting technologies under each language. */
  Language = "language",
  /** Group skills by their editorial category (e.g. Frontend, Backend, DevOps). */
  Category = "category",
  /** Group skills by their `SkillTypesEnum` classification (e.g. Technology, Technical, Soft). */
  SkillType = "skill-type",
}

export default GroupByOptions;
