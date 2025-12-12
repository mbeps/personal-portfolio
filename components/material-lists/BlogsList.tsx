import BlogItem from "@/components/material-items/BlogItem";
import Grid from "@/components/ui/Grid";
import MaterialGroupListInterface from "@/interfaces/material/MaterialGroupListInterface";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

/**
 * Group renderer for blog cards, plumbing MaterialGroupSectionList into the shared `BlogItem` tile component.
 *
 * @param groupedMaterial Blog keys grouped by category/section.
 * @returns Sectioned grid of blog summaries.
 */
const BlogsList: React.FC<MaterialGroupListInterface> = ({
  groupedMaterial,
}) => (
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
