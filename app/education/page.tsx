import CourseItem from "@/components/material-items/CourseItem";
import Grid from "@/components/ui/Grid";
import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabaseMap, {
  courseDatabaseKeys,
} from "@/database/courses/CourseDatabaseMap";
import type { Metadata } from "next";

/**
 * Static metadata for the education index, sourcing keywords directly from the courses database to match the visible grid.
 */
export const metadata: Metadata = {
  title: `${developerName} - ${EDUCATION_PAGE.label}`,
  description: `Educational background and qualifications of ${developerName}. 
  These include a Bachelor's degree in Computer Science (from Royal Holloway University) and a Master's degree in Artificial Intelligence (from King's College London).`,
  category: `${EDUCATION_PAGE.label}`,
  creator: developerName,
  keywords: Object.values(courseDatabaseMap).map((course) => course.name),
};

/**
 * Education landing page that renders every course card through the shared `CourseItem` component.
 * Gives visitors a quick overview before diving into course detail routes.
 *
 * @returns Grid of course cards plus the page description copy.
 */
export default function EducationPage() {
  return (
    <main>
      <section id="education">
        <div className="w-full">
          <h1>{EDUCATION_PAGE.label}</h1>
          <PageDescription description={EDUCATION_PAGE.description} />
          {/* List of courses and qualifications */}
          <div className="py-8">
            <Grid
              items={courseDatabaseKeys.map((courseKey) => (
                <CourseItem key={courseKey} courseKey={courseKey} />
              ))}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
