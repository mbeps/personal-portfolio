import ProjectInterface from "@/interfaces/material/ProjectInterface";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import stringToSlug from "@/actions/stringToSlug";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";

interface ProjectsListSectionProps {
  groupedProjects: MaterialGroupInterface[];
}

const ProjectsList: React.FC<ProjectsListSectionProps> = ({
  groupedProjects,
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
                    {group.materials.map((project, idx) => (
                      <div key={idx}>
                        <ProjectItem project={project as ProjectInterface} />
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
