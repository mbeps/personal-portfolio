import ProjectItem from "@/components/material-items/ProjectItem";
import { Button } from "@/components/shadcn/ui/button";
import { PROJECTS_PAGE } from "@/constants/pages";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import Link from "next/link";

/**
 * Homepage showcase that spotlights a curated subset of the project database to tease the work archive.
 * Uses `ProjectItem` for consistency with the Projects page while keeping the hero CTA aligned with `/projects`.
 *
 * @returns Section element with featured project cards and navigation link.
 */
const ProjectsSection = () => {
  const basePath: string = PROJECTS_PAGE.path;

  /**
   * Only projects matching these slugs will be shown.
   * In other words, only these projects will be displayed on the home page.
   */
  const displayedProjects: string[] = [
    ProjectDatabaseKeys.ForumDiscussions,
    ProjectDatabaseKeys.AiGenerations,
    ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
  ];

  return (
    <section id="projects" className="home-section-wrapper">
      <h2>Projects</h2>

      <div className="flex flex-col space-y-14 md:space-y-20 mt-6 md:mt-14">
        {displayedProjects.map((slug, idx) => (
          <div key={slug}>
            {/* SlideUp removed */}
            <ProjectItem projectKey={slug} subtitle={"category"} />
            {/* SlideUp removed */}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href={basePath}>
          <Button variant="outline">View All Projects</Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
