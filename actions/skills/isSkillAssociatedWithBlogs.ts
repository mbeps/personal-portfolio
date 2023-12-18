import { BlogMetadata } from "@/types/blog";
import { Skill } from "@/types/skills";

export default function isSkillAssociatedWithBlogs(
  skillToCheck: Skill,
  blogs: BlogMetadata[]
): boolean {
  return blogs.some((blog) =>
    blog.technicalSkills.some((skill) => skill.slug === skillToCheck.slug)
  );
}
