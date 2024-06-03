import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { BLOG_PAGE } from "@/constants/pages";
import type { Metadata } from "next";
import { BlogsView } from "./components/BlogsView";
import blogsDatabaseMap from "@/database/Blogs/BlogsDatabaseMap";

/**
 * Generates the metadata for the blog page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the blog page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  title: `${developerName} - ${BLOG_PAGE.label}`,
  description: BLOG_PAGE.description,
};

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to search and filter the blogs.
 * These blogs are displayed into categories.
 *
 * A list of all blogs along with their subtitles are added to the page for SEO purposes.
 * This is not visible to the user.
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

          {/* Invisible divs for SEO */}
          {Object.values(blogsDatabaseMap).map((blog) => (
            <div key={blog.name} className="sr-only">
              {blog.name}: {blog.subtitle}
            </div>
          ))}

          <PageDescription description={BLOG_PAGE.description} />
          <BlogsView />
        </div>
      </section>
    </main>
  );
}
