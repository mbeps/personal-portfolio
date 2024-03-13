import updateProjectImages from "@/actions/file-system/updateProjectImages";
import validateSlugsWithContent from "@/actions/material/validateSlugsWithContent";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import SlideUp from "@/components/UI/Slideup";
import { Button } from "@/components/shadcn/ui/button";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabase from "@/database/projects";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import Link from "next/link";

/**
 * Project section listing the projects I have worked on.
 * Each card shows the name, description and a link to the GitHub repository.
 * Some cards also show a link to the live site.
 * There is also an image of the projects.
 * @returns (JSX.Element): Projects section
 */
const ProjectsSection = () => {
  const basePath = PROJECTS_PAGE.path;

  /**
   * Only projects matching these slugs will be shown.
   */
  const allowedSlugs = [
    "circus-discussions",
    "ringmaster-messaging",
    "magician-ai",
  ];

  // Validate the slugs
  if (
    !validateSlugsWithContent<ProjectInterface>(allowedSlugs, projectDatabase)
  ) {
    console.error("Some slugs in allowedSlugs are not valid.");
    return null;
  }

  return (
    <section id="projects" className="home-section-wrapper">
      <HeadingTwo title="Projects" />

      <div className="flex flex-col space-y-20 mt-14">
        {Object.entries(updateProjectImages(projectDatabase))
          .filter(([key, _]) => allowedSlugs.includes(key))
          .map(([key, project], idx) => (
            <div key={key}>
              {" "}
              {/* Use the project's key as the unique key instead of idx */}
              <SlideUp offset="-150px 0px -150px 0px">
                <ProjectItem project={project} path={key} />
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
