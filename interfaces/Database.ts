/**
 * Database interface that represents a database.
 * This makes it easier to represent hashmaps.
 *
 * The fields are:
 * - `key`: the key of the database
 * - `value`: the value of the database which can be any type
 *
 * This is used to represent a database where the key is a string and the value can be any type.
 * For example, there could be a database where the key is mapped to a specific skill.
 */
interface Database<T> {
  [key: string]: T;
}
