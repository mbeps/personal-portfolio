import React from "react";
import BlogInterface from "@/database/blogs/BlogInterface";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import CvItemSkills from "@/app/cv/_components/CvItemSkills";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

/**
 * Props for the AllBlogItem component.
 */
interface AllBlogItemProps {
  /** The blog object to render. */
  blog: BlogInterface;
  /** The unique key for the blog. */
  blogKey: BlogDatabaseKeys;
}

/**
 * AllBlogItem renders blog metadata including title, subtitle, and associated skills.
 *
 * @param {AllBlogItemProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const AllBlogItem: React.FC<AllBlogItemProps> = ({ blog, blogKey }) => {
  return (
    <div className="break-inside-avoid">
      <Link href={ROUTES.BLOGS.detail(blogKey)} className="group">
        <h3 className="text-2xl font-bold group-hover:underline decoration-primary">
          {blog.name}
        </h3>
      </Link>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-3">
        {blog.subtitle}
      </p>
      <CvItemSkills skills={blog.skills} showArchived={true} />
    </div>
  );
};

export default AllBlogItem;
