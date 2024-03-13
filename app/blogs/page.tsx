import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import { BLOG_PAGE } from "@/constants/pages";
import blogs from "@/database/blogs";
import type { Metadata } from "next";
import { BlogsView } from "./components/BlogsView";
import developerName from "@/constants/developerName";

export const metadata: Metadata = {
  title: `${developerName} - ${BLOG_PAGE.label}`,
  description: BLOG_PAGE.description,
};
/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to search for blogs.
 * @returns (JSX.Element): page with all blogs
 */
export default function BlogPage() {
  let blogMetadata = blogs;

  return (
    <main>
      <section id="blogs">
        <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title={BLOG_PAGE.label} />
          <PageDescription description={BLOG_PAGE.description} />

          <BlogsView blogs={blogMetadata} />
        </div>
      </section>
    </main>
  );
}
