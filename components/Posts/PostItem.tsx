import { PostMetadata } from "@/types/post";
import Link from "next/link";
import React from "react";

const PostItem: React.FC<PostMetadata> = (props) => {
  return (
    <div
      className="
        border 
        cursor-pointer
        border-slate-300 dark:border-neutral-600
        bg-neutral-100 dark:bg-stone-800
        hover:bg-neutral-200 dark:hover:bg-red-950
        p-4 
        rounded-xl 
        shadow-md hover:shadow-sm
        transition-colors duration-700"
    >
      <p
        className="
          text-sm 
          text-neutral-400 dark:text-neutral-500"
      >
        {props.date}
      </p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-xl font-bold  mb-4 text-neutral-900 dark:text-neutral-100">
          {props.title}
        </h2>
      </Link>
      <p
        className="
        text-neutral-700 dark:text-neutral-200"
      >
        {props.subtitle}
      </p>
    </div>
  );
};

export default PostItem;
