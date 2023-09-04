import { BlogMetadata } from "@/types/blog";

/**
 * Gets the blog metadata with the given slug (unique identifier).
 * If no blog metadata with the given slug exists in the given list of blog metadata, null is returned.
 * This returns the blog metadata object itself, not just a single property of the blog metadata.
 * @param slug (string) - slug of blog to find
 * @param blogs (BlogMetadata[]) - array of blog metadata
 * @returns (BlogMetadata | null) - blog metadata if found, null otherwise
 */
export function getBlogMetadataBySlug(
  slug: string,
  blogs: BlogMetadata[]
): BlogMetadata | null {
  return blogs.find((blog) => blog.slug === slug) || null;
}
