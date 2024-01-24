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

  // Check the unified skills array, including nested skills
  return blogs.some((blog) => checkNestedSkills(blog.skills));
}
