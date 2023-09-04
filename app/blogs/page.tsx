import getBlogMetadata from "@/actions/getBlogMetadata";
import HeadingOne from "@/components/Text/HeadingOne";
import { BlogList } from "./components/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maruf Bepary - Blogs",
  description:
    "This is the blog page for my personal website. It contains all the blogs I have written. ",
};
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
        <div className="my-12 md:pt-8 animate-fadeIn animation-delay-2">
          <HeadingOne title="Blog" />

          <BlogList blogs={blogMetadata} />
        </div>
      </section>
    </main>
  );
}
