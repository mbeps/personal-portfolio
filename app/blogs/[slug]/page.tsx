import getBlogMetadata from "@/actions/getBlogMetadata";
import getMarkdownFromFileSystem from "@/actions/getMarkdownFromFileSystem";
import Reader from "@/components/Reader/Reader";
import HeadingTwo from "@/components/Text/HeadingTwo";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";

/**
 * Generates the static paths for the blogs.
 * This means that the blog are pre-rendered and can be opened without a server.
 * This is Incremental Static Regeneration and improves the performance of the website.
 * This improves the performance of the website.
 * @returns (Array): array of blogs
 */
export const generateStaticParams = async () => {
  // get all blogs with metadata
  const blogs = getBlogMetadata();

  // Map through all blogs and return an array of objects with the slug for each blog
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

interface BlogPageProps {
  params: {
    slug: string;
  };
}

/**
 * Page displaying the rendered markdown which can be read by the user.
 * @param props: the content of the blog
 * @returns (JSX.Element): content of the blog
 */
const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const slug = params.slug;
  const blog = getMarkdownFromFileSystem(`public/blogs/${slug}.md`);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <div className="my-12 text-center">
        <HeadingTwo title={blog.data.title} />
      </div>
      <Reader content={blog.content} />
    </div>
  );
};

export default BlogPage;
