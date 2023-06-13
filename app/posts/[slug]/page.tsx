import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/actions/getPostMetadata";
import HeadingTwo from "@/components/Content/Text/HeadingTwo";

/**
 * Gets the content of a post.
 * @param slug (string): the slug of the post
 * @returns (matter.GrayMatterFile<string>): the post content
 */
const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

/**
 * Generates the static paths for the posts.
 * This means that the post are pre-rendered and can be opened without a server.
 * @returns (Array): array of posts
 */
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

/**
 * Page displaying the rendered markdown which can be read by the user.
 * @param props: the content of the post
 * @returns (JSX.Element): content of the post
 */
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <HeadingTwo title={post.data.title} />
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose lg:prose-xl dark:prose-invert prose-img:rounded-lg">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
