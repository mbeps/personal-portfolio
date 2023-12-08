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

  const blogs: BlogMetadata[] = [];

  for (const dirName of directories) {
    const filePath = `${baseFolder}/${dirName}/blog.md`;
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const matterResult = matter(fileContents);
      const metadata = matterResult.data as BlogMetadata; // Cast the data to BlogMetadata

      blogs.push({
        ...metadata, // Spread all properties from the parsed YAML
        slug: dirName, // Optionally overwrite or set the slug from the dirName
      });
    }
  }

  return blogs;
};

export default getBlogMetadata;
