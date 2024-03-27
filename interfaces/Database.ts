/**
 * Database interface that represents a database.
 * This makes it easier to represent hashmaps.
 */
interface Database<T> {
  [key: string]: T;
}
