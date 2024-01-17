import BlogInterface from "@/interfaces/BlogInterface";

/**
 * Gets the blog metadata with the given slug (unique identifier).
 * If no blog metadata with the given slug exists in the given list of blog metadata, null is returned.
 * This returns the blog metadata object itself, not just a single property of the blog metadata.
 * @param slug (string) - slug of blog to find
 * @param blogs (Blog[]) - array of blog metadata
 * @returns (Blog | null) - blog metadata if found, null otherwise
 */
export default function getBlogMetadataBySlug(
  slug: string,
  blogs: BlogInterface[],
): BlogInterface | null {
  return blogs.find((blog) => blog.slug === slug) || null;
}
