/**
 * Generic hashmap used across the static datasets so hooks and utilities can accept any of the material or skill maps.
 * Keys map to slugs that mirror folder names under `public`, keeping assets and metadata aligned.
 */
interface Database<T> {
  /** Entry keyed by slug or identifier for the dataset. */
  [key: string]: T;
}

export default Database;
