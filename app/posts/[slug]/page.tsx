import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/actions/getPostMetadata";
import Title from "@/components/Content/Text/Title";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <Title title={post.data.title} />
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose lg:prose-xl dark:prose-invert prose-img:rounded-lg">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
