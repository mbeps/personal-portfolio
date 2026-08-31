import type React from "react";
import type CourseInterface from "@/database/courses/course-interface";

interface CvEducationItemProps {
  course: CourseInterface;
}

const CvEducationItem: React.FC<CvEducationItemProps> = ({ course }) => {
  return (
    <div className="mb-6 break-inside-avoid">
      <div className="mb-1 flex flex-col items-start justify-between md:flex-row md:items-center">
        <div>
          <h3 className="font-bold text-2xl">{course.name}</h3>
          <p className="font-semibold text-neutral-600 text-xl dark:text-neutral-400">
            {course.university}
          </p>
        </div>
        {/* <div className="text-lg text-neutral-500 dark:text-neutral-400 font-mono">
          {course.startYear} - {course.endYear}
        </div> */}
      </div>
      {course.grade && (
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          <span className="font-semibold">Grade:</span> {course.grade}
        </p>
      )}
    </div>
  );
};

export default CvEducationItem;
