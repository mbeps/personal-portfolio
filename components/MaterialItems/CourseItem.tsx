import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabase from "@/database/courses";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
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
  let courseData: UniversityCourseInterface = courseDatabase[courseKey];

  courseData = {
    ...courseData,
    certificate: `${basePath}/${courseKey}.jpg`,
  };

  return (
    <div
      className="
        bg-neutral-100 dark:bg-neutral-950
        p-3 lg:p-6 rounded-xl
        transition-colors duration-700
        flex flex-col
        animate-slideUpCubiBezier animation-delay-2
        h-full w-full
      "
    >
      {/* Certificate Image */}
      {courseData.certificate && (
        <Link href={`education/${courseKey}`}>
          <div
            className="
            flex justify-center
            rounded-xl
            transform md:hover:scale-105
            shadow-lg md:hover:shadow-2xl
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
        gap-8 px-4 py-4"
      >
        {/* Certificate Title */}
        <Link href={`education/${courseKey}`}>
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

        <p className="text-xl text-center leading-7 text-neutral-600 dark:text-neutral-400">
          {courseData.grade}
        </p>

        <div className="w-full flex justify-center">
          <Tag>{courseData.university}</Tag>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
