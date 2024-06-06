import stringToSlug from "@/actions/stringToSlug";
import ProjectItem from "@/components/MaterialItems/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import MaterialListProps from "@/interfaces/props/MaterialListProps";

/**
 * List of projects grouped by category to be displayed section by section.
 * Each section contains a title and a list of projects.
 * If there are no projects to display, a message is shown.
 *
 * @param groupedProjects List of projects grouped by category to be displayed section by section
 * @returns A list of projects grouped by category
 */
const ProjectsList: React.FC<MaterialListProps> = ({
  groupedMaterial: groupedProjects,
}) => {
  return (
    <div className="material-page-wrapper">
      {groupedProjects.length > 0 ? (
        groupedProjects.map(
          (group) =>
            group.groupName !== "All" && (
              <section key={group.groupName} id={stringToSlug(group.groupName)}>
                <div className="flex flex-col space-y-6">
                  {groupedProjects.length > 1 && (
                    <>
                      <div className="border-b border-gray-200 dark:border-neutral-600 pb-1" />
                      <HeadingTwo title={group.groupName} />
                    </>
                  )}
                  <div className="space-y-14 md:space-y-20">
                    {group.materialsKeys.map((projectKey) => (
                      <div
                        key={projectKey}
                        className="animate-slideUpCubiBezier animation-delay-1"
                      >
                        <ProjectItem projectKey={projectKey} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )
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
