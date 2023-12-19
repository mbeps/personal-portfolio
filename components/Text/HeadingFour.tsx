import React from "react";

interface HeadingFourProps {
  title: string;
}

/**
 * Heading 4 text component shown under heading 3.
 *
 * @param title (string): heading to be displayed for each section
 * @returns (JSX.Element): subheading component
 */
const HeadingFour: React.FC<HeadingFourProps> = ({ title }) => {
  return (
    <h4
      className="
				font-bold text-lg 
				mb-2 
				text-neutral-500 dark:text-neutral-400"
    >
      {title}
    </h4>
  );
};

export default HeadingFour;
