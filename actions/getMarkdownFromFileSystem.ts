import matter from "gray-matter";
import fs from "fs";

/**
 * Reads a markdown file from the file system and parses it using gray-matter
 *
 * @param filePath (string): The path to the markdown file
 * @returns (matter.GrayMatterFile<string> | null): The parsed markdown file or null if an error occurred
 */
const getMarkdownFromFileSystem = (
  filePath: string
): matter.GrayMatterFile<string> | null => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    console.log(`Error reading markdown file ${filePath}:`, error);
    return null;
  }
};

export default getMarkdownFromFileSystem;
