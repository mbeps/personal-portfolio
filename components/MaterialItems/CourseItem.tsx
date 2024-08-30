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

const CourseItem: React.FC<CourseItemProps> = ({ courseKey }) => {
  const basePath: string = EDUCATION_PAGE.path;
  let courseData: CourseInterface = courseDatabaseMap[courseKey];

  courseData = {
    ...courseData,
    certificate: `${basePath}/${courseKey}.jpg`,
  };

  return (
    <div
      className="
        bg-neutral-100 dark:bg-neutral-800
        border border-neutral-300 dark:border-neutral-700
        shadow-md
        p-3 rounded-xl
        transition-colors duration-700
        flex flex-col lg:grid lg:grid-cols-3
        animate-slideUpCubiBezier animation-delay-2
        h-full w-full
      "
    >
      {/* Certificate Image */}
      {courseData.certificate && (
        <Link href={`education/${courseKey}`} className="lg:col-span-1">
          <div
            className="
              flex justify-center
              rounded-xl
              transform md:hover:scale-105
              shadow-sm md:hover:shadow-lg
              transition-all duration-500 ease-in-out
              mb-6
              w-full
              overflow-hidden
            "
          >
            <AspectRatio ratio={1 / 1.4} className="overflow-hidden relative">
              <Image
                key={courseKey}
                src={courseData.certificate}
                alt={`${courseData.name} certificate image`}
                fill={true}
                quality={20}
                loading="lazy"
                className="
                  rounded-xl
                  cursor-pointer
                  object-cover
                "
              />
            </AspectRatio>
          </div>
        </Link>
      )}

      <div
        className="
          flex flex-col 
          gap-5 px-4 py-4
          lg:col-span-2
          space-y-4
        "
      >
        <div className="lg:w-full lg:text-left">
          {/* Certificate Title */}
          <Link href={`education/${courseKey}`}>
            <h1
              className="
                text-3xl md:text-4xl font-bold text-center lg:text-left
                md:hover:text-red-500 md:dark:hover:text-red-800
                transition-colors duration-700 ease-in-out
              "
            >
              {courseData.name}
            </h1>
          </Link>

          <p className="text-xl text-center lg:text-left leading-7 text-neutral-600 dark:text-neutral-400">
            {courseData.grade}
          </p>

          <div className="w-full flex justify-center lg:justify-start">
            <Tag>{courseData.university}</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
