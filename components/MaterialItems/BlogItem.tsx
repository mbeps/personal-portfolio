import { BLOG_PAGE } from "@/constants/pages";
import blogsDatabaseMap from "@/database/Blogs/BlogsDatabaseMap";
import BlogInterface from "@/database/Blogs/BlogInterface";
import Link from "next/link";
import React from "react";

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
  const basePath: string = BLOG_PAGE.path;
  const blogData: BlogInterface = blogsDatabaseMap[blogKey];

  return (
    <>
      <Link href={`${basePath}/${blogKey}`}>
        <div
          className="
            flex flex-col
            min-h-[180px] h-full max-h-[280px]
            cursor-pointer
            bg-neutral-100 dark:bg-neutral-800
            md:hover:bg-neutral-200 md:dark:hover:bg-red-950
            p-4
            border border-neutral-300 dark:border-neutral-700
            hover:border-neutral-400 dark:hover:border-red-500
            rounded-xl
            shadow-md md:hover:shadow-lg
            transform md:hover:scale-105
            transition-all duration-500 ease-in-out"
        >
          <h2 className=" text-xl font-bold  mb-4 text-neutral-900 dark:text-neutral-100">
            {blogData.name}
          </h2>
          <p
            className="
        text-neutral-700 dark:text-neutral-300"
          >
            {blogData.subtitle}
          </p>
        </div>
      </Link>
    </>
  );
};

export default BlogItem;
