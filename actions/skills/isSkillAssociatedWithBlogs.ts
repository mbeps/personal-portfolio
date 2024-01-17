import BlogInterface from "@/interfaces/BlogInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function isSkillAssociatedWithBlogs(
  skillToCheck: SkillInterface,
  blogs: BlogInterface[],
): boolean {
  // Function to check nested skills
  const checkNestedSkills = (skills: SkillInterface[]) =>
    skills.some(
      (skill) =>
        skill.slug === skillToCheck.slug ||
        (skill.technicalGeneralSkills || []).some(
          (nestedSkill) => nestedSkill.slug === skillToCheck.slug,
        ),
    );

  return blogs.some(
    (blog) =>
      (blog.technicalSkills && checkNestedSkills(blog.technicalSkills)) ||
      (blog.softSkills && checkNestedSkills(blog.softSkills)),
  );
}
