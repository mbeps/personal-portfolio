import React from "react";
import CourseInterface from "@/database/courses/CourseInterface";
import moduleDatabaseMap from "@/database/modules/ModuleDatabaseMap";
import { ROUTES } from "@/constants/routes";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import CvItemSkills from "@/app/cv/_components/CvItemSkills";
import Link from "next/link";

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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h3 className="text-2xl font-bold">{course.name}</h3>
          <p className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">
            {course.university}
          </p>
        </div>
        <div className="text-lg text-neutral-500 dark:text-neutral-400 font-mono">
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
        <h4 className="text-xl font-bold border-b-2 border-neutral-200 dark:border-neutral-800 pb-2 mb-4 uppercase tracking-wider">
          Modules
        </h4>
        {course.modules.map((moduleKey) => {
          const moduleData = moduleDatabaseMap[moduleKey];
          if (!moduleData) return null;

          return (
            <div
              key={moduleKey}
              className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-800"
            >
              <Link
                href={ROUTES.EDUCATION.module(courseKey, moduleKey)}
                className="text-xl font-bold hover:underline decoration-primary"
              >
                {moduleData.name}
              </Link>
              {moduleData.learningOutcomes &&
                moduleData.learningOutcomes.length > 0 && (
                  <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-700 dark:text-neutral-300">
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
