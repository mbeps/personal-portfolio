import Grid from "@/components/UI/Grid";
import BlogItem from "@/components/Blogs/BlogItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import stringToSlug from "@/actions/stringToSlug";
import BlogInterface from "@/interfaces/material/BlogInterface";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";

interface BlogListSectionProps {
  groupedBlogs: MaterialGroupInterface[];
}

const BlogsList: React.FC<BlogListSectionProps> = ({ groupedBlogs }) => {
  return (
    <div className="material-page-wrapper">
      {groupedBlogs.length > 0 ? (
        groupedBlogs.map(
          (group) =>
            group.groupName !== "All" && (
              <section key={group.groupName} id={stringToSlug(group.groupName)}>
                <div className="flex flex-col space-y-10">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  {/* Assuming HeadingTwo is a component you have for rendering titles */}
                  <HeadingTwo title={group.groupName} />
                  <Grid
                    items={group.materials.map((blog, idx) => (
                      <BlogItem key={idx} {...(blog as BlogInterface)} />
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
