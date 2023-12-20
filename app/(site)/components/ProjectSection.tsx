import validateSlugs from "@/actions/validateSlug";
import Button from "@/components/Atoms/Button";
import SlideUp from "@/components/Atoms/Slideup";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import allProjects from "@/constants/projects";
import Link from "next/link";

/**
 * Project section listing the projects I have worked on.
 * Each card shows the name, description and a link to the GitHub repository.
 * Some cards also show a link to the live site.
 * There is also an image of the projects.
 * @returns (JSX.Element): Projects section
 */
const ProjectsSection = () => {
  /**
   * Only projects matching these slugs will be shown.
   */
  const allowedSlugs = [
    "circus-discussions",
    "ringmaster-messaging",
    "magician-ai",
  ];

  // Validate the slugs
  if (!validateSlugs(allowedSlugs, allProjects)) {
    console.error("Some slugs in allowedSlugs are not valid.");
    return null;
  }

  return (
    <section id="projects" className="wrapper ">
      <div className="my-12 pb-12 md:pt-16 ">
        <HeadingTwo title="Projects" />

        <div className="flex flex-col space-y-20 mt-14">
          {allProjects
            .filter((project) => allowedSlugs.includes(project.slug))
            .map((project, idx) => (
              <div key={idx}>
                <SlideUp offset="-150px 0px -150px 0px">
                  <ProjectItem project={project} />
                </SlideUp>
              </div>
            ))}
        </div>

        <Link href="/projects" className="flex justify-center mt-10">
          <Button variant="outlined">View All Projects</Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
