import BlogListSection from "@/app/blogs/components/BlogListSection";
import Button from "@/components/Atoms/Button";
import { Blog } from "@/types/blog";
import { Skill } from "@/types/skills";
import Link from "next/link";

import React from "react";

interface BlogsPageProps {
  blogs: Blog[];
  skill: Skill;
}

const BlogsSection: React.FC<BlogsPageProps> = ({ blogs, skill }) => {
  const filterBlogsBySkill = (blogs: Blog[], selectedSkill: string): Blog[] => {
    return blogs.filter((blog) =>
      blog.technicalSkills.some(
        (s) => s.skill.toLowerCase() === selectedSkill.toLowerCase()
      )
    );
  };

  const filteredBlogs = filterBlogsBySkill(blogs, skill.skill);

  if (!filteredBlogs || filteredBlogs.length === 0) {
    return;
  }

  const groupBlogsByCategory = (blogs: Blog[]): Record<string, Blog[]> => {
    return { Blogs: blogs };
  };

  const groupedBlogs = groupBlogsByCategory(filteredBlogs);

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <BlogListSection groupedBlogs={groupedBlogs} />

      <Link href="/blogs" className="flex justify-center mt-10">
        <Button variant="outlined">View All Blogs</Button>
      </Link>
    </div>
  );
};

export default BlogsSection;
