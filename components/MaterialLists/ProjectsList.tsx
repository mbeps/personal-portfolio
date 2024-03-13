import stringToSlug from "@/actions/stringToSlug";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import MaterialListProps from "@/interfaces/props/MaterialListProps";

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
                <div className="flex flex-col space-y-10">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  <HeadingTwo title={group.groupName} />
                  <div className="space-y-20">
                    {Object.entries(group.materials).map(([key, project]) => (
                      <div key={key}>
                        <ProjectItem
                          path={key}
                          project={project as ProjectInterface}
                        />
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
