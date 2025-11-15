import fs from "fs";

/**
 * Retrieves a list of video filenames from a specified directory.
 * It filters for files with `.mp4` or `.webm` extensions.
 * This function is used to dynamically load video assets from the filesystem.
 *
 * @param filePath The absolute or relative path to the directory.
 * @returns An array of video filenames. Returns an empty array on error.
 */
export default function getVideosFromFileSystem(filePath: string): string[] {
  try {
    const files = fs.readdirSync(filePath);
    return files.filter(
      (file) => file.endsWith(".mp4") || file.endsWith(".webm")
    );
  } catch (error) {
    // console.log(`Error reading directory ${filePath}:`, error);
    return [];
  }
}
