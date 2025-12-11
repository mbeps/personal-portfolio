import React from "react";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

interface NextSectionButton {
  section: string;
}

/**
 * Animated anchor used on the homepage sections to encourage scrolling to the next section.
 *
 * @param section Target section ID.
 * @returns Bouncing arrow linking to the hash anchor.
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
