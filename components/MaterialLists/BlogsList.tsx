import stringToSlug from "@/actions/stringToSlug";
import BlogItem from "@/components/MaterialItems/BlogItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import Grid from "@/components/UI/Grid";
import MaterialListProps from "@/interfaces/props/MaterialListProps";

/**
 * List of blogs grouped by category to be displayed section by section.
 * Each section contains a title and a list of blogs.
 * If there are no blogs to display, a message is shown.
 *
 * @param groupedBlogs List of blogs grouped by category to be displayed section by section
 * @returns A list of blogs grouped by category
 */
const BlogsList: React.FC<MaterialListProps> = ({
  groupedMaterial: groupedBlogs,
}) => {
  return (
    <div className="material-page-wrapper">
      {groupedBlogs.length > 0 ? (
        groupedBlogs.map(
          (group) =>
            group.groupName !== "All" && (
              <section key={group.groupName} id={stringToSlug(group.groupName)}>
                <div className="flex flex-col space-y-5">
                  {groupedBlogs.length > 1 && (
                    <>
                      <div className="border-b border-gray-200 dark:border-neutral-600 pb-1" />
                      <HeadingTwo title={group.groupName} />
                    </>
                  )}
                  <Grid
                    items={group.materialsKeys.map((blogKey) => (
                      <div
                        key={blogKey}
                        className="animate-slideUpCubiBezier animation-delay-1"
                      >
                        <BlogItem key={blogKey} blogKey={blogKey} />
                      </div>
                    ))}
                  />
                </div>
              </section>
            )
        )
      ) : (
        <div className="flex justify-center min-w-full mt-8">
          <h2 className="text-2xl font-bold">No Matching Blogs</h2>
        </div>
      )}
    </div>
  );
};

export default BlogsList;
