import Link from "next/link";
import type React from "react";
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
    <div className="my-10 flex flex-row items-center justify-center text-center md:my-4">
      <Link href={`#${section}`}>
        <HiArrowDown size={35} className="slow-bounce animate-bounce" />
      </Link>
    </div>
  );
};

export default NextSectionButton;
