import ProjectItem from "@/components/Content/ProjectSection/ProjectItem";
import SubTitle from "@/components/Content/Text/SubTitle";
import Title from "@/components/Content/Text/Title";
import Project, {
  webdevProjects,
  machineLearningProjects,
  extraWebDevProjects,
} from "@/types/projects";

/**
 * Projects page displaying multiple types of projects that I worked on.
 * @returns (JSX.Element): Projects page
 */
const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-8 md:pb-48">
        <Title title="Projects" />
        <div className="flex flex-col space-y-20 mt-14">
          <ProjectSection
            title="Main Web Development"
            projects={webdevProjects}
          />
          <ProjectSection
            title="Extra Web Development"
            projects={extraWebDevProjects}
          />
          <ProjectSection
            title="Machine Learning"
            projects={machineLearningProjects}
          />
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
      </div>
    </section>
  );
};

export default ProjectsSection;

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => {
  return (
    <>
      <SubTitle subTitle={title} />
      {projects.map((project, idx) => (
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
    </>
  );
};
