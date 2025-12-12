import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { BLOG_PAGE } from "@/constants/pages";
import type { Metadata } from "next";
import { BlogsView } from "./_components/BlogsView";
import blogsDatabaseMap from "@/database/blogs/BlogsDatabaseMap";

/**
 * Static metadata for the blogs archive, using the blog database to keep keywords aligned with the current articles.
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
 * Blog archive shell that hands control to `BlogsView`, keeping the shared hero copy and SEO keywords scoped to this route.
 *
 * @returns Page content framing the reusable filter/search view.
 */
export default function BlogPage() {
  return (
    <main>
      <section id="blogs">
        <div className="w-full">
          <h1>{BLOG_PAGE.label}</h1>
          <PageDescription description={BLOG_PAGE.description} />
          <BlogsView />
        </div>
      </section>
    </main>
  );
}
