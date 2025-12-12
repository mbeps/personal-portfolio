/**
 * Keeps blog and project report markdown portable by rewriting `{BASE}` placeholders to the runtime image directory.
 * Lets CMS-less content reuse the same markdown locally and in production without fragile absolute paths.
 *
 * @param content Markdown string pulled from the filesystem.
 * @param basePath Runtime base path for image assets (e.g., `/projects/my-case-study/img`).
 * @returns Markdown with placeholders swapped for the real asset path.
 */
export default function processMarkdownImages(
  content: string,
  basePath: string
): string {
  return content.replace(/{BASE}/g, basePath);
}
