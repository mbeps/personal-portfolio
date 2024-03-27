import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { BLOG_PAGE } from "@/constants/pages";
import type { Metadata } from "next";
import { BlogsView } from "./components/BlogsView";

export const metadata: Metadata = {
  title: `${developerName} - ${BLOG_PAGE.label}`,
  description: BLOG_PAGE.description,
};

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to search and filter the blogs.
 * These blogs are displayed into categories.
 *
 * @returns Page with all blogs
 * @requires {@link BlogsView} component to display the blogs and filter/search them
 */
export default function BlogPage() {
  return (
    <main>
      <section id="blogs">
        <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title={BLOG_PAGE.label} />
          <PageDescription description={BLOG_PAGE.description} />

          <BlogsView />
        </div>
      </section>
    </main>
  );
}
