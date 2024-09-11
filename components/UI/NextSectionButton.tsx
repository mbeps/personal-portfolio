import React from "react";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

interface NextSectionButton {
  section: string;
}

/**
 * This component renders a button that links to the next section of the page.
 * It is an arrow icon that bounces.
 *
 * @param section - The section to link to
 * @returns NextSectionButton component
 */
const NextSectionButton: React.FC<NextSectionButton> = ({ section }) => {
  return (
    <div
      className="
        flex flex-row 
        items-center text-center justify-center 
        my-10 md:my-4
      "
    >
      <Link href={`#${section}`}>
        <HiArrowDown size={35} className="animate-bounce slow-bounce" />
      </Link>
    </div>
  );
};

export default NextSectionButton;
