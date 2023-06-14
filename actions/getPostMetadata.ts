import { PostMetadata } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";

/**
 * Get the metadata for all posts stored in the posts/ directory.
 * Does not return posts with display false.
 * Undefined posts are still returned.
 * @returns {PostMetadata[]} An array of post metadata.
 */
const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts: PostMetadata[] = markdownPosts
    .map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
        display: matterResult.data.display,
      };
    })
    .filter((post) => post.display !== "false");

  return posts;
};

export default getPostMetadata;
