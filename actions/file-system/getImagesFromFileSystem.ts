import fs from "fs";

/**
 * Retrieves a list of image filenames from a specified directory.
 * It filters for files with `.jpg` or `.png` extensions.
 * This function is used to dynamically load image assets from the filesystem.
 *
 * @param filePath The absolute or relative path to the directory.
 * @returns An array of image filenames. Returns an empty array on error.
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
