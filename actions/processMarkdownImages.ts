/**
 * Processes markdown content by replacing the {BASE} placeholder with the actual base path.
 * This allows markdown files to use relative image paths that work correctly when rendered.
 *
 * @param content The markdown content to process
 * @param basePath The base path to replace {BASE} with (e.g., "/blogs/my-blog/img")
 * @returns The processed markdown content with replaced paths
 */
export default function processMarkdownImages(
  content: string,
  basePath: string
): string {
  return content.replace(/{BASE}/g, basePath);
}
