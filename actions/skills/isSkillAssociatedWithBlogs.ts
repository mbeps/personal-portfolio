import BlogInterface from "@/interfaces/material/BlogInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function isSkillAssociatedWithBlogs(
  skillToCheck: SkillInterface,
  blogs: BlogInterface[],
): boolean {
  // Function to recursively check nested skills
  const checkNestedSkills = (
    skills: SkillInterface[],
    skillSlug: string,
  ): boolean => {
    return skills.some(
      (skill) =>
        skill.slug === skillSlug ||
        (skill.relatedSkills &&
          checkNestedSkills(skill.relatedSkills, skillSlug)),
    );
  };

  // Check the skills array of each blog, including nested skills
  return blogs.some((blog) =>
    checkNestedSkills(blog.skills, skillToCheck.slug),
  );
}
