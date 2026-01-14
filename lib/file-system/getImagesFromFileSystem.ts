import fs from "fs";

/**
 * Enumerates static image assets from folders that mirror route slugs under `public`, letting project and blog pages build galleries from disk.
 * Mirrors the markdown loader strategy so empty folders fail silently while drafting new posts.
 *
 * @param filePath Directory that may contain project or blog imagery.
 * @returns Collection of image filenames filtered to `.jpg` and `.png`.
 */
export default function getImagesFromFileSystem(filePath: string): string[] {
  try {
    const files: string[] = fs.readdirSync(filePath);
    return files
      .filter((file) => file.endsWith(".jpg") || file.endsWith(".png"))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch (error) {
    // console.log(`Error reading directory ${filePath}:`, error);
    return [];
  }
}
