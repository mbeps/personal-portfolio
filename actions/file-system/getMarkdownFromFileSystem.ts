import matter from "gray-matter";
import fs from "fs";

/**
 * Reads a markdown file from the file system and parses it using gray-matter.
 * This can then be used to extract the frontmatter and content and display it in the UI.
 *
 * @param filePath The path to the markdown file
 * @returns The parsed markdown file or null if an error occurred
 */
export default function getMarkdownFromFileSystem(
  filePath: string
): matter.GrayMatterFile<string> | null {
  try {
    const content: string = fs.readFileSync(filePath, "utf8");
    const matterResult: matter.GrayMatterFile<string> = matter(content);
    return matterResult;
  } catch (error) {
    // console.log(`Error reading markdown file ${filePath}:`, error);
    return null;
  }
}
