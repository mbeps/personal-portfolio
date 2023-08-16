import { BlogMetadata } from "@/types/blog";
import fs from "fs";
import matter from "gray-matter";

/**
 * Get the metadata for all blogs stored in the blogs/ directory.
 * This metadata is defined at the top of each markdown file.
 * This does not load the actual content of the blog.
 * @returns {BlogMetadata[]} An array of blog metadata.
 */
const getBlogMetadata = (): BlogMetadata[] => {
  const folder = "public/blogs/";
  const files = fs.readdirSync(folder);
  const markdownBlogs = files.filter((file) => file.endsWith(".md"));

  const blogs: BlogMetadata[] = markdownBlogs.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      display: matterResult.data.display,
    };
  });

  return blogs;
};

export default getBlogMetadata;
