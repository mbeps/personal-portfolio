import Link from "next/link";
import type React from "react";
import CvItemSkills from "@/app/cv/_components/CvItemSkills";
import { ROUTES } from "@/constants/routes";
import type CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import type CourseInterface from "@/database/courses/CourseInterface";
import moduleDatabaseMap from "@/database/modules/ModuleDatabaseMap";

/**
 * Props for the AllEducationItem component.
 */
interface AllEducationItemProps {
  /** The course object to render. */
  course: CourseInterface;
  /** The unique key for the course. */
  courseKey: CourseDatabaseKeys;
}

/**
 * AllEducationItem renders a course with its university, grade, years,
 * skills, and a list of modules with their learning outcomes.
 *
 * @param {AllEducationItemProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const AllEducationItem: React.FC<AllEducationItemProps> = ({
  course,
  courseKey,
}) => {
  return (
    <div className="mb-12 break-inside-avoid">
      <div className="mb-4 flex flex-col items-start justify-between md:flex-row md:items-center">
        <div>
          <h3 className="font-bold text-2xl">{course.name}</h3>
          <p className="font-semibold text-neutral-600 text-xl dark:text-neutral-400">
            {course.university}
          </p>
        </div>
        <div className="font-mono text-lg text-neutral-500 dark:text-neutral-400">
          {course.startYear} - {course.endYear}
        </div>
      </div>

      <div className="mb-4 text-lg">
        <span className="font-bold">Grade:</span> {course.grade || "N/A"}
      </div>

      <div className="mb-6">
        <CvItemSkills skills={course.skills} showArchived={true} />
      </div>

      <div className="space-y-6">
        <h4 className="mb-4 border-neutral-200 border-b-2 pb-2 font-bold text-xl uppercase tracking-wider dark:border-neutral-800">
          Modules
        </h4>
        {course.modules.map((moduleKey) => {
          const moduleData = moduleDatabaseMap[moduleKey];
          if (!moduleData) return null;

          return (
            <div
              key={moduleKey}
              className="border-neutral-200 border-l-2 pl-4 dark:border-neutral-800"
            >
              <Link
                href={ROUTES.EDUCATION.module(courseKey, moduleKey)}
                className="font-bold text-xl decoration-primary hover:underline"
              >
                {moduleData.name}
              </Link>
              {moduleData.learningOutcomes &&
                moduleData.learningOutcomes.length > 0 && (
                  <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-700 dark:text-neutral-300">
                    {moduleData.learningOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllEducationItem;
