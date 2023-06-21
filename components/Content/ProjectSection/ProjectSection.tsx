import Button from "@/components/Atoms/Button";
import HeadingTwo from "../Text/HeadingTwo";
import ProjectItem from "./ProjectItem";
import { webdevProjects, machineLearningProjects } from "@/types/projects";

/**
 * Project section listing the projects I have worked on.
 * Each card shows the name, description and a link to the GitHub repository.
 * Some cards also show a link to the live site.
 * There is also an image of the projects.
 * @returns (JSX.Element): Projects section
 */
const ProjectsSection = () => {
  return (
    <section id="projects">
      <HeadingTwo title="Projects" />

      <div className="flex flex-col space-y-20 mt-14">
        {webdevProjects.map((project, idx) => (
          <div key={idx}>
            <ProjectItem
              name={project.name}
              description={project.description}
              imageURL={project.imageURL}
              repoURL={project.repoURL}
              siteURL={project.siteURL}
              articleURL={project.articleURL}
              programmingLanguage={project.programmingLanguage}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button variant="outlined" action="/projects">
          View More Projects
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
