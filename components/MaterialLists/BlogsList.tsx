import BlogItem from "@/components/MaterialItems/BlogItem";
import Grid from "@/components/UI/Grid";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

/**
 * Group renderer for blog cards, plumbing MaterialGroupSectionList into the shared `BlogItem` tile component.
 *
 * @param groupedMaterial Blog keys grouped by category/section.
 * @returns Sectioned grid of blog summaries.
 */
const BlogsList: React.FC<MaterialListProps> = ({ groupedMaterial }) => (
  <MaterialGroupSectionList
    groupedMaterial={groupedMaterial}
    emptyMessage="No Matching Blogs"
    sectionClassName="flex flex-col space-y-5"
    renderContent={(group, hasMultipleGroups) => (
      <>
        {hasMultipleGroups && (
          <>
            <div className="border-b border-gray-200 dark:border-neutral-600 pb-1" />
            <h2>{group.groupName}</h2>
          </>
        )}
        <Grid
          items={group.materialsKeys.map((blogKey) => (
            <div key={blogKey}>
              <BlogItem blogKey={blogKey} />
            </div>
          ))}
        />
      </>
    )}
  />
);

export default BlogsList;
