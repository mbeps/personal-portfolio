import matter from "gray-matter";
import fs from "fs";

/**
 * Reads and parses a Markdown file from the filesystem.
 * It uses `gray-matter` to separate the frontmatter from the content.
 * This is useful for content sources like blogs or documentation.
 *
 * @param filePath The path to the Markdown file.
 * @returns A `GrayMatterFile` object, or `null` if the file cannot be read.
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
