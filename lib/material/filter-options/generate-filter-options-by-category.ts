import type MaterialInterface from "@/database/materials/material-interface";
import type Database from "@/interfaces/database";
import type FilterOption from "@/interfaces/filters/filter-option";
import stringToSlug from "../../string-to-slug";
import generateFilterOptions from "./generate-filter-options";

/**
 * Converts whatever editorial categories exist in the current dataset into drawer options so section lists and filters stay aligned.
 * Uses the category labels already present on each material, which lets curated sections introduce bespoke groupings.
 *
 * @param materialsDatabase Material map scoped to the active page.
 * @returns Unique filter options sorted by first appearance to preserve editorial ordering.
 */
export default function generateFilterOptionsByCategory<
  T extends MaterialInterface,
>(materialsDatabase: Database<T>): FilterOption[] {
  return generateFilterOptions(materialsDatabase, (material) => ({
    slug: stringToSlug(material.category),
    entryName: material.category,
  }));
}
