import MediaItem from "@/types/MediaItem";
import fs from "fs";

/**
 * Get all media (images and videos) from a directory
 * @param filePath (string) - path to directory
 * @returns (MediaItem[]) - array of media items
 */
const getMediaFromFileSystem = (filePath: string): MediaItem[] => {
  try {
    const files = fs.readdirSync(filePath);
    return files
      .map((file) => {
        if (file.endsWith(".jpg") || file.endsWith(".png")) {
          return { type: "image", src: file };
        } else if (file.endsWith(".mp4") || file.endsWith(".webm")) {
          return { type: "video", src: file };
        }
        return null;
      })
      .filter((item) => item !== null) as MediaItem[];
  } catch (error) {
    // console.log(`Error reading directory ${filePath}:`, error);
    return [];
  }
};

export default getMediaFromFileSystem;
