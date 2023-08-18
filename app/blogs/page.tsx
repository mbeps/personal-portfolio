import getBlogMetadata from "@/actions/getBlogMetadata";
import { BlogList } from "@/components/Blogs/BlogList";
import HeadingOne from "@/components/Text/HeadingOne";

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to search for blogs.
 * @returns (JSX.Element): page with all blogs
 */
export default function BlogPage() {
  let blogMetadata = getBlogMetadata();

  return (
    <main>
      <section id="blogs">
        <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2">
          <HeadingOne title="Blog" />

          <BlogList blogs={blogMetadata} />
        </div>
      </section>
    </main>
  );
}
