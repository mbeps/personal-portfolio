import BlogItem from "@/components/MaterialItems/BlogItem";
import Grid from "@/components/UI/Grid";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

/**
 * List of blogs grouped by category to be displayed section by section.
 * Each section contains a title and a list of blogs.
 * If there are no blogs to display, a message is shown.
 *
 * @param groupedBlogs List of blogs grouped by category to be displayed section by section
 * @returns A list of blogs grouped by category
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
