import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadingTwoProps {
  title: string;
  className?: string;
}

/**
 * Heading 2 text component shown at the top of each section.
 *
 * @param title Heading to be displayed for each section
 * @param className Custom styles for the component
 * @returns Title component
 */
const HeadingTwo: React.FC<HeadingTwoProps> = ({ title, className }) => {
  const combinedClassName: string = twMerge(
    `text-center font-bold text-4xl`,
    className
  );

  return (
    <h1 className={combinedClassName}>
      {title}
      <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded" />
    </h1>
  );
};

export default HeadingTwo;
