import Grid from "@/components/UI/Grid";
import BlogItem from "@/components/Blogs/BlogItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import stringToSlug from "@/actions/stringToSlug";
import BlogInterface from "@/interfaces/BlogInterface";

interface BlogListSectionProps {
  groupedBlogs: Record<string, BlogInterface[]>;
}

/**
 * Displays a list of blogs grouped by category.
 * @param groupedBlogs (Record<string, Blog[]>) - blogs grouped by category
 * @returns (JSX.Element) - list of blogs grouped by category
 */
const BlogsList: React.FC<BlogListSectionProps> = ({ groupedBlogs }) => {
  return (
    <div className="material-page-wrapper">
      {Object.keys(groupedBlogs).length > 0 ? (
        Object.keys(groupedBlogs).map(
          (category) =>
            category !== "All" && (
              <section key={category} id={stringToSlug(category)}>
                <div className="flex flex-col space-y-10">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  {/* Assuming HeadingTwo is a component you have for rendering titles */}
                  <HeadingTwo title={category} />
                  <Grid
                    items={groupedBlogs[category].map((blog, idx) => (
                      <BlogItem key={idx} {...blog} />
                    ))}
                  />
                </div>
              </section>
            ),
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