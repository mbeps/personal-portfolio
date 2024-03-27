import fs from "fs";

/**
 * Get all images from a directory so that they can be displayed in the UI.
 * @param filePath path to the directory where the images are stored
 * @returns a list of image file names
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
