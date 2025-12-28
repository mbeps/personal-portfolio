import React from "react";
import CourseInterface from "@/database/courses/CourseInterface";

interface CvEducationItemProps {
  course: CourseInterface;
}

const CvEducationItem: React.FC<CvEducationItemProps> = ({ course }) => {
  return (
    <div className="mb-6 break-inside-avoid">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
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
      {course.grade && (
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          <span className="font-semibold">Grade:</span> {course.grade}
        </p>
      )}
    </div>
  );
};

export default CvEducationItem;
