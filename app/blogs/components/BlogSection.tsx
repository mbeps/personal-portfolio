import BlogItem from "@/components/Blogs/BlogItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { BlogMetadata } from "@/types/blog";

interface BlogSectionProps {
  title: string;
  blogs: BlogMetadata[];
}

/**
 * Displays a list of blogs with a title for the section.
 * @param title (string): title of the blog section
 * @param blogs (BlogMetadata[]): list of blogs to be displayed
 * @returns (JSX.Element): blog section (title and list of blogs)
 */
const BlogSection: React.FC<BlogSectionProps> = ({ title, blogs }) => {
  return (
    <section id={title.toLowerCase().replace(/\s+/g, "-")}>
      <div className="flex flex-col space-y-20">
        <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
        <HeadingTwo title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogs.map((blog, idx) => (
            <BlogItem key={idx} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
