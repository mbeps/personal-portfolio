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
  description: `A list of all blogs and articles written by ${developerName}. 
  Topics include web development, software engineering, Artificial Intelligence, Machine Learning and more.`,
  category: `${BLOG_PAGE.label}`,
  creator: developerName,
  keywords: Object.values(blogsDatabaseMap).map((blog) => blog.name),
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
        <div className="w-full">
          <HeadingOne title={BLOG_PAGE.label} />
          <PageDescription description={BLOG_PAGE.description} />
          <BlogsView />
        </div>
      </section>
    </main>
  );
}
