import BlogItem from "@/components/material-items/blog-item";
import Grid from "@/components/ui/grid";
import type BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import type MaterialGroupListInterface from "@/interfaces/material/material-group-list-interface";
import MaterialGroupSectionList from "./material-group-section-list";

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
