import ProjectItem from "@/components/Content/ProjectSection/ProjectItem";
import Title from "@/components/Title";
import { webdevProjects, machineLearningProjects } from "@/types/projects";

/**
 * Projects page displaying multiple types of projects that I worked on.
 * @returns (JSX.Element): Projects page
 */
const ProjectsSection = () => {
  return (
    <section id="projects">
      <Title title="Projects" />

      <div className="flex flex-col space-y-20 mt-14">
        <Title title="Web Development" />
        {webdevProjects.map((project, idx) => (
          <div key={idx}>
            <ProjectItem
              name={project.name}
              description={project.description}
              imageURL={project.imageURL}
              projectURL={project.projectURL}
              siteURL={project.siteURL}
            />
          </div>
        ))}

        <Title title="Machine Learning Assignments" />
        {machineLearningProjects.map((project, idx) => (
          <div key={idx}>
            <ProjectItem
              name={project.name}
              description={project.description}
              imageURL={project.imageURL}
              projectURL={project.projectURL}
              siteURL={project.siteURL}
            />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-lg">
          You can find more of my projects and assignments, including those on
          machine learning, on my GitHub.
        </p>
        <a
          href="https://github.com/stars/mbeps/lists/good"
          className="text-red-500 dark:text-red-800 font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check them out here!
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
