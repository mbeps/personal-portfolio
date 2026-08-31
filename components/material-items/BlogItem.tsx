import Link from "next/link";
import type React from "react";
import { ROUTES } from "@/constants/routes";
import type BlogInterface from "@/database/blogs/BlogInterface";
import blogsDatabaseMap from "@/database/blogs/BlogsDatabaseMap";

interface BlogItemProps {
  blogKey: string;
}

/**
 * Blog tile used in the blogs archive and related material tabs to surface title + subtitle links into the markdown reader.
 *
 * @param blogKey Blog slug from the static database.
 * @returns Clickable card with blog summary copy.
 */
const BlogItem: React.FC<BlogItemProps> = ({ blogKey }) => {
  const basePath: string = ROUTES.BLOGS.path;
  const blogData: BlogInterface = blogsDatabaseMap[blogKey];

  return (
    <Link href={`${basePath}/${blogKey}`}>
      <div className="flex h-full max-h-70 min-h-45 transform cursor-pointer flex-col rounded-xl border border-neutral-300 bg-neutral-100 p-4 shadow-sm transition-all duration-500 ease-in-out hover:border-neutral-400 md:hover:scale-103 md:hover:bg-neutral-200 md:hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-red-500 md:dark:hover:bg-red-950">
        <h2 className="mb-4 font-bold text-neutral-900 text-xl dark:text-neutral-100">
          {blogData.name}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          {blogData.subtitle}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
