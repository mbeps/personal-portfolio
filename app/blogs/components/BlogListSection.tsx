import BlogItem from "@/components/Blogs/BlogItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { BlogMetadata } from "@/types/blog";

interface BlogListSectionProps {
  groupedBlogs: Record<string, BlogMetadata[]>;
}

/**
 * Displays a list of blogs grouped by category.
 * @param groupedBlogs (Record<string, BlogMetadata[]>) - blogs grouped by category
 * @returns (JSX.Element) - list of blogs grouped by category
 */
const BlogListSection: React.FC<BlogListSectionProps> = ({ groupedBlogs }) => {
  return (
    <div className="my-12 pb-12 md:pt-2 md:pb-36 space-y-4 md:space-y-10">
      {Object.keys(groupedBlogs).length > 0 ? (
        Object.keys(groupedBlogs).map(
          (category) =>
            category !== "All" && (
              <section
                key={category}
                id={category.toLowerCase().replace(/\s+/g, "-")}
              >
                <div className="flex flex-col space-y-20">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  {/* Assuming HeadingTwo is a component you have for rendering titles */}
                  <HeadingTwo title={category} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {groupedBlogs[category].map((blog, idx) => (
                      <BlogItem key={idx} {...blog} />
                    ))}
                  </div>
                </div>
              </section>
            )
        )
      ) : (
        <div className="flex justify-center min-w-full mt-14">
          <h2 className="text-2xl font-bold">No blogs found</h2>
        </div>
      )}
    </div>
  );
};

export default BlogListSection;
