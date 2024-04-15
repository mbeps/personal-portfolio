import CourseItem from "@/components/MaterialItems/CourseItem";
import HeadingOne from "@/components/Text/HeadingOne";
import Grid from "@/components/UI/Grid";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import { courseKeys } from "@/database/courses";
import type { Metadata } from "next";

/**
 * Generates the metadata for the education page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the blog page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  title: `${developerName} - ${EDUCATION_PAGE.label}`,
  description: EDUCATION_PAGE.description,
};

/**
 * Displays a list of all education history and qualifications.
 * User can open an entry and view more details about the qualification such as the modules studied.
 *
 * @returns Page with education history and qualifications
 */
export default function EducationPage() {
  return (
    <main>
      <section id="blogs">
        <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title={EDUCATION_PAGE.label} />
          <PageDescription description={EDUCATION_PAGE.description} />

          <div className="py-8">
            <Grid
              items={courseKeys.map((courseKey) => (
                <CourseItem key={courseKey} courseKey={courseKey} />
              ))}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
