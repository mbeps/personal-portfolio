import Blog from "@/types/blog";
import Skill from "@/types/skills";

export default function isSkillAssociatedWithBlogs(
  skillToCheck: Skill,
  blogs: Blog[]
): boolean {
  // Function to check nested skills
  const checkNestedSkills = (skills: Skill[]) =>
    skills.some(
      (skill) =>
        skill.slug === skillToCheck.slug ||
        (skill.skills || []).some(
          (nestedSkill) => nestedSkill.slug === skillToCheck.slug
        )
    );

  return blogs.some(
    (blog) =>
      (blog.technicalSkills && checkNestedSkills(blog.technicalSkills)) ||
      (blog.softSkills && checkNestedSkills(blog.softSkills))
  );
}
