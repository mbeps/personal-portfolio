import React from "react";

interface HeadingFourProps {
  title: string;
}

/**
 * Heading 4 text component shown under heading 3.
 *
 * @param title Heading to be displayed for each section
 * @returns Subheading component
 */
const HeadingFour: React.FC<HeadingFourProps> = ({ title }) => {
  return (
    <h4
      className="
				font-bold text-lg 
				mb-2 
				text-neutral-700 dark:text-neutral-200"
    >
      {title}
    </h4>
  );
};

export default HeadingFour;
