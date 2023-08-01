import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import HeadingTwo from "@/components/Text/HeadingTwo";
import getBlogMetadata from "@/actions/getBlogMetadata";

/**
 * Gets the content of a blog from the file system.
 * These are stored so that they can be displayed on the website.
 * @param slug (string): the slug of the blog
 * @returns (matter.GrayMatterFile<string>): the blog content
 */
const getBlogContent = (slug: string) => {
  const folder = "blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

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
  const blog = getBlogContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <HeadingTwo title={blog.data.title} />
      </div>
      <article className="prose lg:prose-xl dark:prose-invert prose-img:rounded-lg max-w-none">
        <Markdown>{blog.content}</Markdown>
      </article>
    </div>
  );
};

export default BlogPage;
