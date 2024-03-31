import fs from "fs";

/**
 * Get all videos from a directory so that they can be displayed in the UI.
 * @param filePath Path to the directory where the videos are stored
 * @returns A list of video file names
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
