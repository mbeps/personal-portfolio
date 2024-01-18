import BlogListSection from "@/app/blogs/components/BlogListSection";
import { Button } from "@/components/shadcn/ui/button";
import BlogInterface from "@/interfaces/BlogInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";

import React from "react";

interface BlogsPageProps {
  blogs: BlogInterface[];
  skill: SkillInterface;
}

const BlogsSection: React.FC<BlogsPageProps> = ({ blogs, skill }) => {
  const filterBlogsBySkill = (
    blogs: BlogInterface[],
    selectedSkill: string,
  ): BlogInterface[] => {
    return blogs.filter((blog) =>
      blog.technicalSkills.some(
        (s) => s.name.toLowerCase() === selectedSkill.toLowerCase(),
      ),
    );
  };

  const filteredBlogs = filterBlogsBySkill(blogs, skill.name);

  if (!filteredBlogs || filteredBlogs.length === 0) {
    return;
  }

  const groupBlogsByCategory = (
    blogs: BlogInterface[],
  ): Record<string, BlogInterface[]> => {
    return { Blogs: blogs };
  };

  const groupedBlogs = groupBlogsByCategory(filteredBlogs);

  return (
    <div className="flex flex-col space-y-10 align-top relative">
      <BlogListSection groupedBlogs={groupedBlogs} />

      <div className="flex justify-center mt-10">
        <Link href="/blogs">
          <Button variant="outline">View All Blogs</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsSection;
