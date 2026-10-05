import { describe, expect, it } from "vitest";
import searchDatabase from "@/lib/search/search-database";

describe("searchDatabase utility", () => {
  const sampleData: Record<
    string,
    { name: string; tags: string[]; role?: string }
  > = {
    item1: {
      name: "Full Stack Web App",
      tags: ["TypeScript", "React"],
      role: "Engineer",
    },
    item2: {
      name: "Neural Network Coursework",
      tags: ["Python", "PyTorch"],
      role: "Student",
    },
    item3: {
      name: "Spreadsheet Assistant",
      tags: ["Python", "FastAPI"],
      role: "Developer",
    },
  };

  it("returns all keys when search term is undefined or empty", () => {
    expect(searchDatabase(sampleData)).toEqual(["item1", "item2", "item3"]);
    expect(searchDatabase(sampleData, "")).toEqual(["item1", "item2", "item3"]);
    expect(searchDatabase(sampleData, "   ")).toEqual([
      "item1",
      "item2",
      "item3",
    ]);
  });

  it("finds keys matching exact and fuzzy name query", () => {
    const results = searchDatabase(sampleData, "Spreadsheet", ["name"]);
    expect(results).toEqual(["item3"]);

    const fuzzyResults = searchDatabase(sampleData, "Neural Net", ["name"]);
    expect(fuzzyResults).toEqual(["item2"]);
  });

  it("searches across array fields using arrayFields extractor", () => {
    const results = searchDatabase(sampleData, "React", ["name", "tags"], {
      tags: (item) => item.tags,
    });
    expect(results).toEqual(["item1"]);

    const pythonResults = searchDatabase(sampleData, "Python", ["tags"], {
      tags: (item) => item.tags,
    });
    expect(pythonResults).toContain("item2");
    expect(pythonResults).toContain("item3");
  });

  it("returns empty array when no matches are found", () => {
    const results = searchDatabase(sampleData, "NonexistentRandomString12345", [
      "name",
    ]);
    expect(results).toEqual([]);
  });

  it("handles empty database record gracefully", () => {
    expect(searchDatabase({}, "test")).toEqual([]);
    expect(searchDatabase({})).toEqual([]);
  });
});
