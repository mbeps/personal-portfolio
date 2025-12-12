/// <reference types="vitest/globals" />
import getVideosFromFileSystem from "@/lib/file-system/getVideosFromFileSystem";
import { describe, expect, test, vi } from "vitest";
import fs from "fs";

vi.mock("fs");

describe("getVideosFromFileSystem", () => {
  test("should return a list of video files from a directory", () => {
    const files = ["video1.mp4", "video2.webm", "document.pdf"];
    (fs.readdirSync as any).mockReturnValue(files);

    const result = getVideosFromFileSystem("/fake/path");
    expect(result).toEqual(["video1.mp4", "video2.webm"]);
  });

  test("should return an empty array if no video files are found", () => {
    const files = ["document.pdf", "archive.zip"];
    (fs.readdirSync as any).mockReturnValue(files);

    const result = getVideosFromFileSystem("/fake/path");
    expect(result).toEqual([]);
  });

  test("should return an empty array if the directory is empty", () => {
    (fs.readdirSync as any).mockReturnValue([]);

    const result = getVideosFromFileSystem("/fake/path");
    expect(result).toEqual([]);
  });

  test("should return an empty array if the directory does not exist", () => {
    (fs.readdirSync as any).mockImplementation(() => {
      throw new Error("ENOENT: no such file or directory");
    });

    const result = getVideosFromFileSystem("/nonexistent/path");
    expect(result).toEqual([]);
  });

  test("should only include .mp4 and .webm files", () => {
    const files = [
      "video1.mp4",
      "video2.webm",
      "video3.mkv",
      "video4.avi",
      "image.jpg",
    ];
    (fs.readdirSync as any).mockReturnValue(files);

    const result = getVideosFromFileSystem("/fake/path");
    expect(result).toEqual(["video1.mp4", "video2.webm"]);
  });
});
