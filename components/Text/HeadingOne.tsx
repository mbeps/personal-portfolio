import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadingOneProps {
  title: string;
  className?: string;
}

/**
 * Heading 1 text component shown at the top of each section but under main headings.
 *
 * @param title Heading to be displayed for each section
 * @param className Custom styles for the component
 * @returns Subheading component
 */
const HeadingOne: React.FC<HeadingOneProps> = ({ title, className }) => {
  const combinedClassName: string = twMerge(
    `text-5xl md:text-7xl 
      font-sans font-bold mt-6 
      md:mt-0 
      text-center`,
    className
  );

  return <h1 className={combinedClassName}>{title}</h1>;
};

export default HeadingOne;
