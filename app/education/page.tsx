import CourseItem from "@/components/material-items/CourseItem";
import Grid from "@/components/ui/Grid";
import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { ROUTES } from "@/constants/routes";
import courseDatabaseMap, {
  courseDatabaseKeys,
} from "@/database/courses/CourseDatabaseMap";
import type { Metadata } from "next";

/**
 * Static metadata for the education index, sourcing keywords directly from the courses database to match the visible grid.
 */
export const metadata: Metadata = {
  title: `${developerName} - ${ROUTES.EDUCATION.name}`,
  description: `Educational background and qualifications of ${developerName}. 
  These include a Bachelor's degree in Computer Science (from Royal Holloway University) and a Master's degree in Artificial Intelligence (from King's College London).`,
  category: `${ROUTES.EDUCATION.name}`,
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
          <h1>{ROUTES.EDUCATION.name}</h1>
          <PageDescription description={ROUTES.EDUCATION.description} />
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
