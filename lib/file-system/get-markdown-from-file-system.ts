import fs from "node:fs";

/**
 * Shared loader for blog posts, project reports, and other markdown files stored under `public` folders.
 *
 * @param filePath Absolute path to the markdown asset.
 * @returns Markdown content string, or `null` if the asset is missing.
 */
export default function getMarkdownFromFileSystem(
  filePath: string,
): string | null {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}
