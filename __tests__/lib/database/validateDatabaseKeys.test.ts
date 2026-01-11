import { describe, it, expect } from "vitest";
import validateDatabaseKeys from "@/lib/database/validateDatabaseKeys";

describe("validateDatabaseKeys", () => {
  it("should not throw an error for valid keys (alphanumeric and dashes)", () => {
    const validKeys = [
      "valid-key",
      "validKey123",
      "Another-Valid-Key",
      "123-456",
      "a",
    ];
    expect(() => validateDatabaseKeys(validKeys)).not.toThrow();
  });

  it("should not throw an error for an empty array", () => {
    expect(() => validateDatabaseKeys([])).not.toThrow();
  });

  it("should throw an error for keys containing spaces", () => {
    const invalidKeys = ["invalid key"];
    expect(() => validateDatabaseKeys(invalidKeys)).toThrow(
      'Invalid database key found: "invalid key"'
    );
  });

  it("should throw an error for keys containing underscores", () => {
    const invalidKeys = ["invalid_key"];
    expect(() => validateDatabaseKeys(invalidKeys)).toThrow(
      'Invalid database key found: "invalid_key"'
    );
  });

  it("should throw an error for keys containing dots", () => {
    const invalidKeys = ["invalid.key"];
    expect(() => validateDatabaseKeys(invalidKeys)).toThrow(
      'Invalid database key found: "invalid.key"'
    );
  });

  it("should throw an error for keys containing special characters", () => {
    const invalidKeys = ["key!", "key@", "key#", "key$"];
    invalidKeys.forEach((key) => {
      expect(() => validateDatabaseKeys([key])).toThrow(
        `Invalid database key found: "${key}"`
      );
    });
  });

  it("should throw an error if at least one key is invalid in a list", () => {
    const mixedKeys = ["valid-key", "invalid_key", "another-valid-key"];
    expect(() => validateDatabaseKeys(mixedKeys)).toThrow(
      'Invalid database key found: "invalid_key"'
    );
  });
});
