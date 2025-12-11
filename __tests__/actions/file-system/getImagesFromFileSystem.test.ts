/// <reference types="vitest/globals" />
import getImagesFromFileSystem from "@/lib/actions/file-system/getImagesFromFileSystem";
import { describe, expect, test, vi } from "vitest";
import fs from "fs";

vi.mock("fs");

describe("getImagesFromFileSystem", () => {
  test("should return a list of image files from a directory", () => {
    const files = ["image1.jpg", "image2.png", "document.pdf"];
    (fs.readdirSync as any).mockReturnValue(files);

    const result = getImagesFromFileSystem("/fake/path");
    expect(result).toEqual(["image1.jpg", "image2.png"]);
  });

  test("should return an empty array if no image files are found", () => {
    const files = ["document.pdf", "archive.zip"];
    (fs.readdirSync as any).mockReturnValue(files);

    const result = getImagesFromFileSystem("/fake/path");
    expect(result).toEqual([]);
  });

  test("should return an empty array if the directory is empty", () => {
    (fs.readdirSync as any).mockReturnValue([]);

    const result = getImagesFromFileSystem("/fake/path");
    expect(result).toEqual([]);
  });

  test("should return an empty array if the directory does not exist", () => {
    (fs.readdirSync as any).mockImplementation(() => {
      throw new Error("ENOENT: no such file or directory");
    });

    const result = getImagesFromFileSystem("/nonexistent/path");
    expect(result).toEqual([]);
  });

  test("should only include .jpg and .png files", () => {
    const files = [
      "image1.jpg",
      "image2.png",
      "image3.jpeg",
      "image4.gif",
      "vector.svg",
    ];
    (fs.readdirSync as any).mockReturnValue(files);

    const result = getImagesFromFileSystem("/fake/path");
    expect(result).toEqual(["image1.jpg", "image2.png"]);
  });
});
