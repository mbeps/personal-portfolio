import { BlogMetadata } from "@/types/blog";
import Link from "next/link";
import React from "react";

/**
 * Displays a card which allows the user to open a blog.
 * @param props: Blog metadata used in the card
 * @returns (JSX.Element): card with blog metadata
 */
const BlogItem: React.FC<BlogMetadata> = (props) => {
  return (
    <Link href={`/blogs/${props.slug}`}>
      <div
        className="
        flex flex-col 
        min-h-[180px]
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
          {props.title}
        </h2>
        <p
          className="
        text-neutral-700 dark:text-neutral-300"
        >
          {props.subtitle}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
