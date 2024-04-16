import { BLOG_PAGE } from "@/constants/pages";
import blogDatabase from "@/database/blogs";
import BlogInterface from "@/interfaces/material/BlogInterface";
import Link from "next/link";
import React from "react";

interface BlogItemProps {
  blogKey: string;
}

/**
 * Displays a card which allows the user to open a blog.
 * This card contains the name and subtitle of the blog.
 *
 * @param blogKey Blog metadata used in the card
 * @returns Card with blog metadata
 */
const BlogItem: React.FC<BlogItemProps> = ({ blogKey }) => {
  const basePath: string = BLOG_PAGE.path;
  const blogData: BlogInterface = blogDatabase[blogKey];

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
          rounded-xl
          shadow-md md:hover:shadow-lg
          transform md:hover:scale-105
          animate-slideUpCubiBezier animation-delay-2
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
