import fs from "fs";

/**
 * Get all images from a directory
 * @param filePath (string) - path to directory
 * @returns (string[]) - array of image file names
 */
const getVideosFromFileSystem = (filePath: string): string[] => {
  try {
    const files = fs.readdirSync(filePath);
    return files.filter(
      (file) => file.endsWith(".mp4") || file.endsWith(".webm"),
    );
  } catch (error) {
    // console.log(`Error reading directory ${filePath}:`, error);
    return [];
  }
};

export default getVideosFromFileSystem;
