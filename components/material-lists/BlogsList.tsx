import BlogItem from "@/components/material-items/BlogItem";
import Grid from "@/components/ui/Grid";
import type BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import type MaterialGroupListInterface from "@/interfaces/material/MaterialGroupListInterface";
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
            <div className="border-gray-200 border-b pb-1 dark:border-neutral-600" />
            <h2>{group.groupName}</h2>
          </>
        )}
        <Grid
          items={group.materialsKeys.map((blogKey) => (
            <div key={blogKey}>
              <BlogItem blogKey={blogKey as BlogDatabaseKeys} />
            </div>
          ))}
        />
      </>
    )}
  />
);

export default BlogsList;
