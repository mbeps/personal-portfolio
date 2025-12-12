import matter from "gray-matter";
import fs from "fs";

/**
 * Shared loader for blog posts, project reports, and other markdown files stored under `public` folders named after route segments.
 * Keeps metadata parsing consistent with `Reader` / `SpecialReader` and tolerates missing drafts during local authoring.
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
