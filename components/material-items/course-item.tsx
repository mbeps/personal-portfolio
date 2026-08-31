import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { ROUTES } from "@/constants/routes";
import courseDatabaseMap from "@/database/courses/course-database-map";
import type CourseInterface from "@/database/courses/course-interface";
import Tag from "../tags/tag";

interface CourseItemProps {
  courseKey: string;
}

/**
 * Course overview tile shown on the education landing page and related sections, exposing quick access to the course detail route.
 *
 * @param courseKey Course slug from the static database.
 * @returns Card with logo, name, category, and university tag.
 */
const CourseItem: React.FC<CourseItemProps> = ({ courseKey }) => {
  const basePath: string = ROUTES.EDUCATION.path;
  const courseData: CourseInterface = courseDatabaseMap[courseKey];

  return (
    <div className="flex h-full w-full flex-col rounded-xl border border-neutral-300 bg-neutral-100 p-3 shadow-sm transition-colors duration-700 lg:p-6 dark:border-neutral-700 dark:bg-neutral-800">
      {/* Certificate Image */}
      {courseData.logo && (
        <div className="mb-6 flex w-full justify-center">
          <Link href={`${basePath}/${courseKey}`}>
            <Image
              key={courseKey}
              src={courseData.logo}
              alt={`${courseData.name} logo`}
              width={160}
              height={160}
              quality={60}
              loading="lazy"
              className="transform cursor-pointer rounded-full shadow-md transition-all duration-500 ease-in-out md:hover:scale-105 md:hover:shadow-xl"
            />
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-5 px-4 py-4">
        {/* Certificate Title */}
        <Link href={`${basePath}/${courseKey}`}>
          <h1 className="text-center font-bold text-3xl transition-colors duration-700 ease-in-out md:text-4xl md:hover:text-red-500 md:dark:hover:text-red-800">
            {courseData.name}
          </h1>
        </Link>

        <p className="text-center text-neutral-500 text-xl leading-7 dark:text-neutral-400">
          {courseData.category}
        </p>

        <div className="flex w-full justify-center">
          <Tag>{courseData.university}</Tag>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
