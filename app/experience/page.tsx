import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { EXPERIENCE_PAGE } from "@/constants/pages";
import type { Metadata } from "next";

/**
 * Generates the metadata for the work experience page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the work experience page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the blog page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  title: `${developerName} - ${EXPERIENCE_PAGE.label}`,
  description: EXPERIENCE_PAGE.description,
};

/**
 * Displays a list of all work experience that can be opened.
 * Also allows the user to search and filter the work experience.
 * These blogs are displayed into categories.
 *
 * @returns Page with all work experiences
 * @requires {@link BlogsView} component to display the work experience and filter/search them
 */
export default function BlogPage() {
  return (
    <main>
      <section id="blogs">
        <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title={EXPERIENCE_PAGE.label} />
          <PageDescription description={EXPERIENCE_PAGE.description} />
        </div>
      </section>
    </main>
  );
}
