import BlogDatabaseKeys from "@/database/Blogs/BlogDatabaseKeys";
import BlogInterface from "@/database/Blogs/BlogInterface";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import BlogCategoriesEnum from "@/enums/Blog/BlogCategoriesEnum";
import Database from "@/interfaces/Database";

/**
 * Projects that have blog.md files.
 * These are the projects that will have their blogs automatically added to the blogs page.
 */
const projectsWithBlogs: ProjectDatabaseKeys[] = [
  ProjectDatabaseKeys.ForumDiscussions,
  ProjectDatabaseKeys.RealTimeMessaging,
  ProjectDatabaseKeys.AiGenerations,
  ProjectDatabaseKeys.MusicStreaming,
  ProjectDatabaseKeys.AiQuizzes,
  ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
  ProjectDatabaseKeys.SymphonyTranslateBot,
  ProjectDatabaseKeys.SymphonyWebhookBot,
  ProjectDatabaseKeys.OsmosGame,
  ProjectDatabaseKeys.JavaCalculatorAssignment,
];

/**
 * Adds project blogs to the blogs map.
 * Projects with blog.md files are converted to blog entries and added to the blogs map under the "Projects" category.
 * If a project is archived, its blog will also be archived.
 *
 * @param projectsMap The map of all projects
 * @returns An object containing blog entries for projects that have blogs
 */
export function addProjectBlogsToMap(
  projectsMap: Database<ProjectInterface>
): Database<BlogInterface> {
  const projectBlogs: Database<BlogInterface> = {};

  projectsWithBlogs.forEach((projectKey) => {
    const project = projectsMap[projectKey];
    if (!project) return;

    // Create a blog key from the project key
    const blogKey = projectKey as unknown as BlogDatabaseKeys;

    // Convert project to blog entry
    projectBlogs[blogKey] = {
      name: project.name,
      subtitle: project.description,
      category: BlogCategoriesEnum.Projects,
      skills: project.skills,
      archived: project.archived,
    };
  });

  return projectBlogs;
}
