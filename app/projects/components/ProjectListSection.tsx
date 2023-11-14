import Project from "@/types/projects";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";

interface ProjectsListSectionProps {
  groupedProjects: Record<string, Project[]>;
}

const ProjectsListSection: React.FC<ProjectsListSectionProps> = ({
  groupedProjects,
}) => {
  return (
    <div className="flex flex-col space-y-20 mt-14">
      {Object.keys(groupedProjects).length > 0 ? (
        Object.keys(groupedProjects).map(
          (type) =>
            type !== "All" && (
              <section key={type} id={type.toLowerCase().replace(/\s+/g, "-")}>
                <div className="flex flex-col space-y-20">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  {/* Assuming HeadingTwo is a component you have for rendering titles */}
                  <HeadingTwo title={type} />
                  {groupedProjects[type].map((project, idx) => (
                    <div key={idx}>
                      {/* Assuming ProjectItem is a component for individual project items */}
                      <ProjectItem
                        name={project.name}
                        slug={project.slug}
                        key={project.imageURL}
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
              </section>
            )
        )
      ) : (
        <div className="flex justify-center min-w-full mt-14">
          <h2 className="text-2xl font-bold">No projects</h2>
        </div>
      )}
    </div>
  );
};

export default ProjectsListSection;
