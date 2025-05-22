import ProjectItem from "@/components/MaterialItems/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import SlideUp from "@/components/UI/Slideup";
import { Button } from "@/components/shadcn/ui/button";
import { PROJECTS_PAGE } from "@/constants/pages";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import Link from "next/link";

/**
 * Project section listing the projects I have worked on.
 * Each card shows the name, description and a link to the GitHub repository.
 * Some cards also show a link to the live site.
 * There is also an image of the projects.
 * @returns Projects section
 */
const ProjectsSection = () => {
  const basePath: string = PROJECTS_PAGE.path;

  /**
   * Only projects matching these slugs will be shown.
   * In other words, only these projects will be displayed on the home page.
   */
  const displayedProjects: string[] = [
    ProjectDatabaseKeys.CircusDiscussions,
    ProjectDatabaseKeys.MagicianAI,
    ProjectDatabaseKeys.HandWrittenDigitClassifier,
  ];

  return (
    <section id="projects" className="home-section-wrapper">
      <HeadingTwo title="Projects" />

      <div className="flex flex-col space-y-14 md:space-y-20 mt-6 md:mt-14">
        {displayedProjects.map((slug, idx) => (
          <div key={slug}>
            <SlideUp offset="-150px 0px -150px 0px">
              <ProjectItem projectKey={slug} subtitle={"category"} />
            </SlideUp>
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
