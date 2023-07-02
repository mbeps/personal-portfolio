import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import HeadingTwo from "@/components/Content/Text/HeadingTwo";
import getBlogMetadata from "@/actions/getBlogMetadata";

/**
 * Gets the content of a blog.
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
 * @returns (Array): array of blogs
 */
export const generateStaticParams = async () => {
  const blogs = getBlogMetadata();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

/**
 * Page displaying the rendered markdown which can be read by the user.
 * @param props: the content of the blog
 * @returns (JSX.Element): content of the blog
 */
const BlogPage = (props: any) => {
  const slug = props.params.slug;
  const blog = getBlogContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <HeadingTwo title={blog.data.title} />
        <p className="text-slate-400 mt-2">{blog.data.date}</p>
      </div>

      <article className="prose lg:prose-xl dark:prose-invert prose-img:rounded-lg">
        <Markdown>{blog.content}</Markdown>
      </article>
    </div>
  );
};

export default BlogPage;
