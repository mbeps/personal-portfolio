/**
 * Validates that all keys in a database map only contain alphanumeric characters and dashes.
 * If an invalid key is found, an error is thrown with a descriptive message.
 * This is intended to be used at build time to ensure consistency and avoid slug-related issues.
 *
 * @param keys An array of database keys to validate.
 * @throws Error if any key contains characters other than alphanumeric and dashes.
 */
export default function validateDatabaseKeys(keys: string[]): void {
  const invalidKeyRegex = /[^a-zA-Z0-9-]/;

  keys.forEach((key) => {
    if (invalidKeyRegex.test(key)) {
      throw new Error(
        `Invalid database key found: "${key}". ` +
          `Database keys can only contain alphanumeric characters and dashes "-". ` +
          `No other special characters are allowed.`
      );
    }
  });
}
