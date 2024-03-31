import React from "react";

interface HeadingOneProps {
  title: string;
}

/**
 * Heading 1 text component shown at the top of each section but under main headings.
 *
 * @param title Heading to be displayed for each section
 * @returns Subheading component
 */
const HeadingOne: React.FC<HeadingOneProps> = ({ title }) => {
  return (
    <h1
      className="
      text-5xl md:text-7xl 
      font-bold mt-6 
      md:mt-0 
      text-center 
      "
    >
      {title}
    </h1>
  );
};

export default HeadingOne;
