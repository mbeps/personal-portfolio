import HeadingOne from "@/components/Text/HeadingOne";
import { BlogsView } from "./components/BlogsView";
import type { Metadata } from "next";
import PageDescription from "@/components/UI/PageDescription";
import blogs from "@/database/blogs";

const description = `
  Explore my collection of blogs on various topics. 
  Use the search bar to find specific blogs or filter them by category.
`;

export const metadata: Metadata = {
  title: "Maruf Bepary - Blogs",
  description: description,
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
          <HeadingOne title="Blog" />
          <PageDescription description={description} />

          <BlogsView blogs={blogMetadata} />
        </div>
      </section>
    </main>
  );
}
