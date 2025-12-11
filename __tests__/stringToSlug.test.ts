import stringToSlug from "@/lib/stringToSlug";
import { describe, expect, test } from "vitest";

describe("stringToSlug", () => {
  test("should convert a simple string with spaces", () => {
    expect(stringToSlug("hello world")).toBe("hello-world");
  });

  test("should handle multiple spaces between words", () => {
    expect(stringToSlug("hello   world")).toBe("hello-world");
  });

  test("should handle leading and trailing spaces", () => {
    expect(stringToSlug("  hello world  ")).toBe("-hello-world-");
  });

  test("should not change an already valid slug", () => {
    expect(stringToSlug("hello-world")).toBe("hello-world");
  });

  test("should convert uppercase letters to lowercase", () => {
    expect(stringToSlug("Hello World")).toBe("hello-world");
  });

  test("should handle an empty string", () => {
    expect(stringToSlug("")).toBe("");
  });

  test("should handle strings with special characters", () => {
    expect(stringToSlug("hello_world")).toBe("hello_world");
    expect(stringToSlug("hello!world")).toBe("hello!world");
  });

  test("should handle a mix of cases and spaces", () => {
    expect(stringToSlug("  Another   Test String  ")).toBe(
      "-another-test-string-"
    );
  });
});
