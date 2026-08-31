import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import useFuseSearch from "@/hooks/use-fuse-search/use-fuse-search";

interface TestItem {
  name: string;
  category?: string;
  tags?: (string | null | undefined)[];
  count?: number;
  nested?: {
    label: string;
  };
}

interface HarnessProps<T> {
  database: Record<string, T>;
  searchTerm: string;
  searchKeys: string[];
  arrayFields?: Partial<Record<string, (item: T) => string[]>>;
  onResult: (keys: string[]) => void;
}

function HookHarness<T extends object>(props: HarnessProps<T>) {
  const keys = useFuseSearch(
    props.database,
    props.searchTerm,
    props.searchKeys,
    props.arrayFields,
  );
  props.onResult(keys);
  return React.createElement("div", null, keys.join(","));
}

function runHook<T extends object>(
  database: Record<string, T>,
  searchTerm: string,
  searchKeys: string[],
  arrayFields?: Partial<Record<string, (item: T) => string[]>>,
): string[] {
  let result: string[] = [];
  renderToStaticMarkup(
    React.createElement(HookHarness<T>, {
      database,
      searchTerm,
      searchKeys,
      arrayFields,
      onResult: (keys: string[]) => {
        result = keys;
      },
    }),
  );
  return result;
}

describe("useFuseSearch", () => {
  const sampleDatabase: Record<string, TestItem> = {
    alpha: {
      name: "Alpha Project",
      category: "Frontend",
      tags: ["react", "typescript", "ui"],
      count: 10,
    },
    beta: {
      name: "Beta API",
      category: "Backend",
      tags: ["python", "fastapi", "rest"],
      count: 20,
    },
    gamma: {
      name: "Gamma Platform",
      category: "Fullstack",
      tags: ["react", "python", "docker"],
      count: 30,
    },
  };

  describe("empty search term", () => {
    it("should return all keys in insertion order when search term is empty", () => {
      const result = runHook(sampleDatabase, "", ["name", "category"]);
      expect(result).toEqual(["alpha", "beta", "gamma"]);
    });

    it("should return an empty array for an empty database with empty search term", () => {
      const result = runHook({}, "", ["name"]);
      expect(result).toEqual([]);
    });
  });

  describe("searching items with standard scalar fields", () => {
    it("should find and rank matching item by name", () => {
      const result = runHook(sampleDatabase, "Alpha", ["name"]);
      expect(result[0]).toBe("alpha");
      expect(result).toContain("alpha");
      expect(result).not.toContain("beta");
    });

    it("should find matching items across multiple search keys", () => {
      const result = runHook(sampleDatabase, "Backend", ["name", "category"]);
      expect(result).toEqual(["beta"]);
    });

    it("should perform fuzzy search matching with small typos", () => {
      const result = runHook(sampleDatabase, "Platfom", ["name"]);
      expect(result[0]).toBe("gamma");
    });

    it("should handle numeric and boolean scalar fields via toString", () => {
      const result = runHook(sampleDatabase, "20", ["count"]);
      expect(result).toEqual(["beta"]);
    });

    it("should handle undefined and null scalar fields gracefully", () => {
      const dbWithMissing: Record<string, TestItem> = {
        item1: { name: "First" },
        item2: { name: "Second", category: "Available" },
      };
      const result = runHook(dbWithMissing, "Available", ["name", "category"]);
      expect(result).toEqual(["item2"]);
    });
  });

  describe("searching with array fields", () => {
    it("should search inside default string array fields", () => {
      const result = runHook(sampleDatabase, "fastapi", ["tags"]);
      expect(result).toEqual(["beta"]);
    });

    it("should find multiple items that share the same tag", () => {
      const result = runHook(sampleDatabase, "react", ["tags"]);
      expect(result).toContain("alpha");
      expect(result).toContain("gamma");
      expect(result).not.toContain("beta");
    });

    it("should handle null and undefined elements in array fields", () => {
      const dbWithSparseArray: Record<string, TestItem> = {
        sparse: {
          name: "Sparse Item",
          tags: ["validTag", null, undefined, "anotherTag"],
        },
        other: {
          name: "Other Item",
          tags: ["unrelated"],
        },
      };

      const result = runHook(dbWithSparseArray, "validTag", ["tags"]);
      expect(result).toEqual(["sparse"]);
    });
  });

  describe("custom arrayFields extractor option", () => {
    it("should use custom arrayFields extractor when provided for a search key", () => {
      const dbWithNested: Record<string, TestItem> = {
        nested1: {
          name: "One",
          nested: { label: "CustomExtractedTag" },
        },
        nested2: {
          name: "Two",
          nested: { label: "OtherLabel" },
        },
      };

      const arrayExtractors = {
        customNested: (item: TestItem) =>
          item.nested ? [item.nested.label] : [],
      };

      const result = runHook(
        dbWithNested,
        "CustomExtractedTag",
        ["customNested"],
        arrayExtractors,
      );

      expect(result).toEqual(["nested1"]);
    });

    it("should handle custom array extractor returning an empty array", () => {
      const arrayExtractors = {
        emptyExtractor: () => [] as string[],
      };

      const result = runHook(
        sampleDatabase,
        "react",
        ["emptyExtractor"],
        arrayExtractors,
      );

      expect(result).toEqual([]);
    });
  });

  describe("boundary conditions and edge cases", () => {
    it("should return empty array when database is empty and search term is non-empty", () => {
      const result = runHook({}, "query", ["name"]);
      expect(result).toEqual([]);
    });

    it("should return empty array when no item matches the query", () => {
      const result = runHook(sampleDatabase, "nonexistentxyz123", ["name"]);
      expect(result).toEqual([]);
    });

    it("should preserve multiple keys when items have duplicate names", () => {
      const dbWithDuplicates: Record<string, TestItem> = {
        firstEntry: { name: "Duplicate Title", category: "Cat1" },
        secondEntry: { name: "Duplicate Title", category: "Cat2" },
      };

      const result = runHook(dbWithDuplicates, "Duplicate", ["name"]);
      expect(result).toContain("firstEntry");
      expect(result).toContain("secondEntry");
      expect(result.length).toBe(2);
    });

    it("should handle search terms with punctuation or special characters", () => {
      const dbWithSpecial: Record<string, TestItem> = {
        itemSpecial: { name: "Next.js & React-Native (v14.0+)" },
      };

      const result = runHook(dbWithSpecial, "Next.js", ["name"]);
      expect(result).toEqual(["itemSpecial"]);
    });
  });
});
