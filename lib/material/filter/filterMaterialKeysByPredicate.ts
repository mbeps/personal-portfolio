import Database from "@/interfaces/Database";

/**
 * Generic key-preserving filter for material-like maps.
 * Iterates over provided keys and keeps only entries that satisfy the predicate.
 *
 * @template TKey Key type in the filtered key array.
 * @template TMaterial Material value type stored in the database map.
 * @param keys Ordered key list to filter.
 * @param database Database lookup map.
 * @param predicate Inclusion predicate.
 * @returns Filtered keys while preserving input order.
 */
export default function filterMaterialKeysByPredicate<
  TKey extends string,
  TMaterial,
>(
  keys: TKey[],
  database: Database<TMaterial>,
  predicate: (material: TMaterial) => boolean,
): TKey[] {
  return keys.filter((key) => predicate(database[key]));
}
