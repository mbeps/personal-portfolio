import type React from "react";

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
    <div className="mt-8 py-2 md:py-4">
      <p className="text-center text-lg text-neutral-500 md:text-xl">
        {description}
      </p>
    </div>
  );
};

export default PageDescription;
