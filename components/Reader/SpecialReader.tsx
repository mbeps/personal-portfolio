import ContentsSection from "@/components/Reader/ContentsSection";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "../shadcn/ui/button";
import Reader from "./Reader";

type SpecialReaderProps = {
  content: string;
  previousPagePath: string;
  previousPageName: string;
};

/**
 * Enhanced markdown view used for blog posts and project reports, adding a contents summary slice plus a back button.
 *
 * @param content Markdown with optional introductory copy before the first heading.
 * @param previousPagePath Path to navigate back to (e.g., `/projects/[slug]` or `/blogs`).
 * @param previousPageName Label for the CTA.
 * @returns Layout combining the contents list and the main Reader output.
 * @see Reader
 */
const SpecialReader: React.FC<SpecialReaderProps> = ({
  content,
  previousPagePath,
  previousPageName,
}) => {
  /**
   * Splits a blog into 2 sections: contents and articles.
   * The contents section is the part of the blog before the first heading.
   * The article section is the part of the blog after the first heading.
   *
   * @param blogContent Markdown blog that needs to be split into contents and article sections
   * @returns 2 sections: contents list and articles
   */
  function splitBlogContent(blogContent: string): {
    contentsSection: string;
    articleSection: string;
  } {
    // Regular expression to find the first heading (starting with #, ##, etc.)
    const headingRegex = /^#{1,6} /m;

    // Find the index of the first heading
    const firstHeadingIndex: number = blogContent.search(headingRegex);

    // If a heading is found, split the content
    if (firstHeadingIndex !== -1) {
      const contentsSection: string = blogContent
        .slice(0, firstHeadingIndex)
        .trim();
      const articleSection: string = blogContent
        .slice(firstHeadingIndex)
        .trim();

      return { contentsSection, articleSection };
    }

    // If no heading is found, return the entire content as the articleSection, and leave contentsSection empty
    return { contentsSection: "", articleSection: blogContent.trim() };
  }

  const splitBlot = splitBlogContent(content);
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-6 space-y-2 px-0 lg:px-20">
        <Link href={previousPagePath}>
          <Button className="pl-3">
            <MdKeyboardArrowLeft size={24} className="mr-2" />
            {`Back to ${previousPageName}`}
          </Button>
        </Link>
        <ContentsSection contentSection={splitBlot.contentsSection} />
      </div>

      {/* Article */}
      <div className="px-0 lg:px-20 w-full">
        <Reader content={splitBlot.articleSection} size="lg:prose-lg" />
      </div>
    </>
  );
};

export default SpecialReader;
