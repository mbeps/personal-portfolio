import Button from "@/components/Atoms/Button";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { webdevProjects } from "@/constants/projects";

/**
 * Project section listing the projects I have worked on.
 * Each card shows the name, description and a link to the GitHub repository.
 * Some cards also show a link to the live site.
 * There is also an image of the projects.
 * @returns (JSX.Element): Projects section
 */
const ProjectsSection = () => {
  return (
    <section id="projects" className="wrapper ">
      <div className="my-12 pb-12 md:pt-16 ">
        <HeadingTwo title="Projects" />

        <div className="flex flex-col space-y-20 mt-14">
          {webdevProjects.map((project, idx) => (
            <div key={idx}>
              <ProjectItem
                name={project.name}
                slug={project.slug}
                description={project.description}
                imageURL={project.imageURL}
                repoURL={project.repoURL}
                siteURL={project.siteURL}
                programmingLanguage={project.programmingLanguage}
                technologies={project.technologies}
                type={project.type}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outlined" onClick={"/projects"}>
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;