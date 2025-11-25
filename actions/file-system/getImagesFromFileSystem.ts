import fs from "fs";

/**
 * Enumerates static image assets used by galleries so project pages can build media strips without hardcoding filenames.
 * Mirrors the markdown loader strategy, letting empty folders fail silently during local writing sessions.
 *
 * @param filePath Directory that may contain project or blog imagery.
 * @returns Collection of image filenames filtered to `.jpg` and `.png`.
 */
export default function getImagesFromFileSystem(filePath: string): string[] {
  try {
    const files: string[] = fs.readdirSync(filePath);
    return files.filter(
      (file) => file.endsWith(".jpg") || file.endsWith(".png")
    );
  } catch (error) {
    // console.log(`Error reading directory ${filePath}:`, error);
    return [];
  }
}
