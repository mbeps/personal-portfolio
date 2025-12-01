import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import CourseInterface from "@/database/Courses/CourseInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";
import Tag from "../Tags/Tag";

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
  const basePath: string = EDUCATION_PAGE.path;
  let courseData: CourseInterface = courseDatabaseMap[courseKey];

  return (
    <div
      className="
        bg-neutral-100 dark:bg-neutral-800
        border border-neutral-300 dark:border-neutral-700
        shadow-md
        p-3 lg:p-6 rounded-xl
        transition-colors duration-700
        flex flex-col
        
        h-full w-full
      "
    >
      {/* Certificate Image */}
      {courseData.logo && (
        <div
          className="
            flex justify-center
            mb-6
            w-full
          "
        >
          <Link href={`${basePath}/${courseKey}`}>
            <Image
              key={courseKey}
              src={courseData.logo}
              alt={`${courseData.name} logo`}
              width={160}
              height={160}
              quality={60}
              loading="lazy"
              className="
                rounded-full
                cursor-pointer
                transform md:hover:scale-105
                shadow-md md:hover:shadow-xl
                transition-all duration-500 ease-in-out
              "
            />
          </Link>
        </div>
      )}

      <div
        className="
        flex flex-col 
        gap-5 px-4 py-4"
      >
        {/* Certificate Title */}
        <Link href={`${basePath}/${courseKey}`}>
          <h1
            className="
              text-3xl md:text-4xl font-bold text-center 
              md:hover:text-red-500 md:dark:hover:text-red-800
              transition-colors duration-700 ease-in-out
              "
          >
            {courseData.name}
          </h1>
        </Link>

        <p className="text-xl text-center leading-7 text-neutral-500 dark:text-neutral-400">
          {courseData.category}
        </p>

        <div className="w-full flex justify-center">
          <Tag>{courseData.university}</Tag>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
