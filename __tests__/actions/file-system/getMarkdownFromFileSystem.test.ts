/// <reference types="vitest/globals" />
import getMarkdownFromFileSystem from "@/lib/actions/file-system/getMarkdownFromFileSystem";
import { describe, expect, test, vi } from "vitest";
import fs from "fs";
import matter from "gray-matter";

vi.mock("fs");
vi.mock("gray-matter");

describe("getMarkdownFromFileSystem", () => {
  test("should read and parse a markdown file with frontmatter and content", () => {
    const fileContent = "---\ntitle: Test\n---\nHello world";
    const mockMatterResult = {
      data: { title: "Test" },
      content: "Hello world",
      isEmpty: false,
      excerpt: "",
      orig: Buffer.from(fileContent),
    };

    (fs.readFileSync as any).mockReturnValue(fileContent);
    (matter as any).mockReturnValue(mockMatterResult);

    const result = getMarkdownFromFileSystem("/fake/path.md");

    expect(fs.readFileSync).toHaveBeenCalledWith("/fake/path.md", "utf8");
    expect(matter).toHaveBeenCalledWith(fileContent);
    expect(result).toEqual(mockMatterResult);
  });

  test("should return null if the file does not exist", () => {
    (fs.readFileSync as any).mockImplementation(() => {
      throw new Error("ENOENT: no such file or directory");
    });

    const result = getMarkdownFromFileSystem("/nonexistent/path.md");
    expect(result).toBeNull();
  });

  test("should handle an empty file", () => {
    const fileContent = "";
    const mockMatterResult = {
      data: {},
      content: "",
      isEmpty: true,
      excerpt: "",
      orig: Buffer.from(fileContent),
    };

    (fs.readFileSync as any).mockReturnValue(fileContent);
    (matter as any).mockReturnValue(mockMatterResult);

    const result = getMarkdownFromFileSystem("/fake/empty.md");
    expect(result).toEqual(mockMatterResult);
  });

  test("should handle a file with no frontmatter", () => {
    const fileContent = "Just content";
    const mockMatterResult = {
      data: {},
      content: "Just content",
      isEmpty: false,
      excerpt: "",
      orig: Buffer.from(fileContent),
    };

    (fs.readFileSync as any).mockReturnValue(fileContent);
    (matter as any).mockReturnValue(mockMatterResult);

    const result = getMarkdownFromFileSystem("/fake/no-frontmatter.md");
    expect(result).toEqual(mockMatterResult);
  });

  test("should handle a file with frontmatter but no content", () => {
    const fileContent = "---\ntitle: Test\n---";
    const mockMatterResult = {
      data: { title: "Test" },
      content: "",
      isEmpty: false,
      excerpt: "",
      orig: Buffer.from(fileContent),
    };

    (fs.readFileSync as any).mockReturnValue(fileContent);
    (matter as any).mockReturnValue(mockMatterResult);

    const result = getMarkdownFromFileSystem("/fake/no-content.md");
    expect(result).toEqual(mockMatterResult);
  });
});
