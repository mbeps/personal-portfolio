import ProjectItem from "@/components/Content/ProjectSection/ProjectItem";
import HeadingOne from "@/components/Content/Text/HeadingOne";
import HeadingTwo from "@/components/Content/Text/HeadingTwo";
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
        <HeadingOne title="Projects" />
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

        <div className="mt-24 border-t border-gray-200 dark:border-neutral-600">
          <p className="text-lg mt-5">
            You can find more of my projects and assignments, including those on
            machine learning, on my GitHub.
          </p>
          <a
            href="https://github.com/mbeps?tab=repositories"
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

/**
 * Displays a list of projects with a title for the section.
 * @param title (string): title of the project section
 * @param projects (Project[]): list of projects to be displayed
 * @returns (JSX.Element): project section (title and list of projects
 */
const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => {
  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 pb-20" />
      <HeadingTwo title={title} />
      {projects.map((project, idx) => (
        <div key={idx}>
          <ProjectItem
            name={project.name}
            description={project.description}
            imageURL={project.imageURL}
            repoURL={project.repoURL}
            siteURL={project.siteURL}
          />
        </div>
      ))}
    </>
  );
};
