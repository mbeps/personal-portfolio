import ProjectInterface from "@/interfaces/ProjectInterface";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import stringToSlug from "@/actions/stringToSlug";

interface ProjectsListSectionProps {
  groupedProjects: Record<string, ProjectInterface[]>;
}

/**
 * Section for displaying projects.
 * @param groupedProjects (Record<string, Project[]>) - object of projects grouped by type
 * @returns (JSX.Element) - section for displaying projects
 */
const ProjectsList: React.FC<ProjectsListSectionProps> = ({
  groupedProjects,
}) => {
  return (
    <div className="material-page-wrapper">
      {/* Each Section */}
      {Object.keys(groupedProjects).length > 0 ? (
        // Each Project
        Object.keys(groupedProjects).map(
          (type) =>
            type !== "All" && (
              <section key={type} id={stringToSlug(type)}>
                <div className="flex flex-col space-y-10">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  <HeadingTwo title={type} />
                  <div className="space-y-20">
                    {groupedProjects[type].map((project, idx) => (
                      <div key={idx}>
                        <ProjectItem project={project} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ),
        )
      ) : (
        <div className="flex justify-center min-w-full mt-8">
          <h2 className="text-2xl font-bold">No Matching Projects</h2>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
