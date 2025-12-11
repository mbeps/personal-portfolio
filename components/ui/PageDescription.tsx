import React from "react";

type PageDescriptionProps = {
  description: string;
};

/**
 * Lightweight helper that renders the descriptive copy defined in `constants/pages`, keeping headings clean across sections.
 *
 * @param description Text to display under the page title.
 * @returns Paragraph styled as the standard page subtitle.
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
