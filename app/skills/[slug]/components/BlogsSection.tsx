import filterContentBySkill from "@/actions/material/filterContentBySkill";
import groupMaterialsBySkill from "@/actions/material/groupMaterialsBySkill";
import BlogsList from "@/components/MaterialLists/BlogsList";
import { Button } from "@/components/shadcn/ui/button";
import { BLOG } from "@/constants/pages";
import BlogInterface from "@/interfaces/material/BlogInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";

import React from "react";

interface BlogsPageProps {
  blogs: BlogInterface[];
  skill: SkillInterface;
}

const BlogsSection: React.FC<BlogsPageProps> = ({ blogs, skill }) => {
  const basePath = BLOG.path;

  const filteredBlogs = filterContentBySkill<BlogInterface>(blogs, skill);

  if (!filteredBlogs || filteredBlogs.length === 0) {
    return;
  }

  const groupedBlogs = groupMaterialsBySkill<BlogInterface>(filteredBlogs);

  return (
    <div className="flex flex-col space-y-10 align-top relative">
      <BlogsList groupedBlogs={groupedBlogs} />

      <div className="flex justify-center mt-10">
        <Link href={basePath}>
          <Button variant="outline">View All Blogs</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsSection;
