import BlogListSection from "@/app/blogs/components/BlogListSection";
import { BlogMetadata } from "@/types/blog";
import { Skill } from "@/types/skills";

import React from "react";

interface BlogsPageProps {
  blogs: BlogMetadata[];
  skill: Skill;
}

const BlogsSection: React.FC<BlogsPageProps> = ({ blogs, skill }) => {
  const filterBlogsBySkill = (
    blogs: BlogMetadata[],
    selectedSkill: string
  ): BlogMetadata[] => {
    return blogs.filter((blog) =>
      blog.skills.some(
        (s) => s.skill.toLowerCase() === selectedSkill.toLowerCase()
      )
    );
  };

  const filteredBlogs = filterBlogsBySkill(blogs, skill.skill);

  const groupBlogsByCategory = (
    blogs: BlogMetadata[]
  ): Record<string, BlogMetadata[]> => {
    return { Blogs: blogs };
  };

  const groupedBlogs = groupBlogsByCategory(filteredBlogs);

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <BlogListSection groupedBlogs={groupedBlogs} />
    </div>
  );
};

export default BlogsSection;
