import matter from "gray-matter";
import fs from "fs";

/**
 * Shared loader for blog, project report, and about pages so every markdown consumer passes through the same gray-matter parsing.
 * Keeps metadata parsing consistent with `Reader` / `SpecialReader`, and gracefully tolerates missing drafts.
 *
 * @param filePath Absolute path to the markdown asset.
 * @returns Parsed gray-matter payload, or `null` if the asset is missing.
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
