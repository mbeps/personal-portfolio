import getMarkdownFromFileSystem from "@/actions/getMarkdownFromFileSystem";
import Reader from "@/components/Reader/Reader";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { getBlogMetadataBySlug } from "@/actions/getBlogMetadataBySlug";
import blogs from "@/constants/blogs";

type BlogPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Metadata object for the dynamic blog page.
 * Each blog page has a unique title and description.
 * @param (BlogPageProps) - props: the content of the blog
 * @param parent (ResolvingMetadata) - parent metadata
 * @returns (Promise<Metadata>): metadata for the blog (title and description
 */
export async function generateMetadata(
  { params, searchParams }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const allBlogs = blogs;

  // Assume getBlogMetadataById function fetches metadata by slug
  const blog = getBlogMetadataBySlug(slug, allBlogs);

  return {
    title: `Maruf Bepary - Blogs: ${blog?.title}`,
    description: blog?.subtitle,
  };
}

/**
 * Generates the static paths for the blogs.
 * This means that the blog are pre-rendered and can be opened without a server.
 * This is Incremental Static Regeneration and improves the performance of the website.
 * This improves the performance of the website.
 * @returns (Array): array of blogs
 */
export const generateStaticParams = async () => {
  // get all blogs with metadata
  const allBlogs = blogs;

  // Map through all blogs and return an array of objects with the slug for each blog
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
};

/**
 * Page displaying the rendered markdown which can be read by the user.
 * @param props: the content of the blog
 * @returns (JSX.Element): content of the blog
 */
const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const slug = params.slug;
  const blog = getMarkdownFromFileSystem(`public/blogs/${slug}/blog.md`);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <div className="my-12 text-center">
        <HeadingTwo title={blog.data.title} />
        <p className="text-neutral-600 dark:text-neutral-400">
          {blog.data.subtitle}
        </p>
      </div>
      <Reader content={blog.content} />
    </div>
  );
};

export default BlogPage;
