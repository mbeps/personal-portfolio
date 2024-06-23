import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadingFourProps {
  title: string;
  className?: string;
}

/**
 * Heading 4 text component shown under heading 3.
 *
 * @param title Heading to be displayed for each section
 * @param className Custom styles for the component
 * @returns Subheading component
 */
const HeadingFour: React.FC<HeadingFourProps> = ({ title, className }) => {
  const combinedClassName: string = twMerge(
    `font-bold text-lg 
				mb-2 
				text-neutral-700 dark:text-neutral-200`,
    className
  );

  return <h4 className={combinedClassName}>{title}</h4>;
};

export default HeadingFour;
