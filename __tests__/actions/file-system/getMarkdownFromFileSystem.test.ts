import fs from "node:fs";
import { describe, expect, test, vi } from "vitest";
/// <reference types="vitest/globals" />
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";

vi.mock("fs");

describe("getMarkdownFromFileSystem", () => {
  test("should read and return markdown file content as string", () => {
    const fileContent = "# Hello world\n\nThis is markdown content.";

    (fs.readFileSync as any).mockReturnValue(fileContent);

    const result = getMarkdownFromFileSystem("/fake/path.md");

    expect(fs.readFileSync).toHaveBeenCalledWith("/fake/path.md", "utf8");
    expect(result).toBe(fileContent);
  });

  test("should return null if the file does not exist", () => {
    (fs.readFileSync as any).mockImplementation(() => {
      throw new Error("ENOENT: no such file or directory");
    });

    const result = getMarkdownFromFileSystem("/nonexistent/path.md");
    expect(result).toBeNull();
  });

  test("should handle an empty file", () => {
    (fs.readFileSync as any).mockReturnValue("");

    const result = getMarkdownFromFileSystem("/fake/empty.md");
    expect(result).toBe("");
  });
});
