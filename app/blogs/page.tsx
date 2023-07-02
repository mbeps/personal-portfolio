import getBlogMetadata from "@/actions/getBlogMetadata";
import HeadingOne from "@/components/Content/Text/HeadingOne";
import BlogItem from "@/components/Blogs/BlogItem";

/**
 * Displays a list of all blogs that can be opened.
 * @returns (JSX.Element): page with all blogs
 */
export default function Blog() {
  let blogMetadata = getBlogMetadata();

  // Filter blogs where display is 'true' or undefined
  blogMetadata = blogMetadata.filter(
    (blog) => blog.display === "true" || blog.display === undefined
  );

  return (
    <main>
      <section id="blogs">
        <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2">
          <HeadingOne title="Blog" />
          <div className="border-b border-gray-200 dark:border-neutral-600 mt-16" />
          <div className="my-12 pb-12 md:pt-2 md:pb-36">
            {/* Blog List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 ">
              {blogMetadata.length > 0 ? (
                blogMetadata.map((blog) => (
                  <BlogItem key={blog.slug} {...blog} />
                ))
              ) : (
                <div className="flex items-center justify-center h-screen">
                  <h2 className="text-2xl font-bold">No blogs</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
