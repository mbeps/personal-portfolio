import getBlogMetadata from "@/actions/getBlogMetadata";
import HeadingOne from "@/components/Text/HeadingOne";
import { BlogList } from "./components/BlogList";
import type { Metadata } from "next";
import PageDescription from "@/components/Atoms/PageDescription";

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
  let blogMetadata = getBlogMetadata();

  return (
    <main>
      <section id="blogs">
        <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title="Blog" />
          <PageDescription description={description} />

          <BlogList blogs={blogMetadata} />
        </div>
      </section>
    </main>
  );
}
