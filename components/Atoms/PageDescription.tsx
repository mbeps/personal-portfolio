import React from "react";

type PageDescriptionProps = {
  description: string;
};

/**
 * Component used for displaying a description of the page.
 * @param description (string): description of the page
 * @returns (JSX.Element): description of the page
 */
const PageDescription: React.FC<PageDescriptionProps> = ({ description }) => {
  return (
    <div className="py-2 md:py-4 mt-8">
      <p
        className="
				text-lg md:text-xl text-center 
				text-neutral-500 "
      >
        {description}
      </p>
    </div>
  );
};
export default PageDescription;
