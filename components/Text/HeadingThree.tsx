import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadingThreeProps {
  title: string;
  className?: string;
}

/**
 * Heading 3 text component shown at the top of each section but under main headings.
 *
 * @param title Heading to be displayed for each section
 * @returns Subheading component
 */
const HeadingThree: React.FC<HeadingThreeProps> = ({ title, className }) => {
  const combinedClassName: string = twMerge(
    `text-2xl font-bold mb-6 mt-6`,
    className
  );
  return <h2 className={combinedClassName}>{title}</h2>;
};

export default HeadingThree;
