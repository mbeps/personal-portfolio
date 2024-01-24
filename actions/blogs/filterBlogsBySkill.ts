import BlogInterface from "@/interfaces/BlogInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterBlogsBySkill(
  blogs: BlogInterface[],
  selectedSkill: SkillInterface,
): BlogInterface[] {
  return blogs.filter((blog) =>
    blog.skills.some((s) => s.slug === selectedSkill.slug),
  );
}
