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
  const baseFolder = "public/blogs/";
  const directories = fs
    .readdirSync(baseFolder, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const blogs = directories.map((dirName) => {
    const filePath = `${baseFolder}/${dirName}/blog.md`;
    if (!fs.existsSync(filePath)) return null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      slug: dirName,
      category: matterResult.data.category,
    };
  });

  // Filter out null values with a type guard
  return blogs.filter((blog): blog is BlogMetadata => blog !== null);
};

export default getBlogMetadata;
