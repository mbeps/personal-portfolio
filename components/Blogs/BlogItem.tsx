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
        h-full 
        cursor-pointer
        bg-neutral-100 dark:bg-stone-800
        hover:bg-neutral-200 dark:hover:bg-red-950
        p-4 
        rounded-xl 
        shadow-md hover:shadow-lg
        transform hover:scale-105
        transition-all duration-500 ease-in-out"
      >
        <p
          className="
          text-sm 
          text-neutral-400 dark:text-neutral-500"
        >
          {props.date}
        </p>

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
