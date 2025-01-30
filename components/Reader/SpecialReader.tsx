import ContentsSection from "@/components/Reader/ContentsSection";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "../shadcn/ui/button";
import Reader from "./Reader";

type SpecialReaderProps = {
  content: string;
  previousPage: string;
};

/**
 * Component that renders a special reader with a contents section and a back button.
 * This is an extension of the Reader component.
 *
 * @param content The markdown content to render
 * @param previousPage The URL of the previous page to link back to
 * @returns Rendered Markdown content with a contents section and a back button
 * @see Reader
 */
const SpecialReader: React.FC<SpecialReaderProps> = ({
  content,
  previousPage,
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
        <Link href={previousPage}>
          <Button className="pl-3">
            <MdKeyboardArrowLeft size={24} className="mr-2" />
            Back to Blogs
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
