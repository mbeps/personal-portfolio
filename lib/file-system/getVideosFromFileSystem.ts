import fs from "fs";

/**
 * Pulls video filenames from a directory whose name mirrors the route slug (e.g., `/public/projects/my-app/media`).
 * Keeps galleries in sync with whatever assets live next to the markdown without hardcoding file lists.
 *
 * @param filePath Path to the media folder under `public`.
 * @returns Video filenames limited to `.mp4` and `.webm`, or an empty list when nothing is found.
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
