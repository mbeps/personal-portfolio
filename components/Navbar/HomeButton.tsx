"use client";

import Link from "next/link";

/**
 * Home button component.
 * It displays the logo and links to the home page.
 * @returns (JSX.Element): Home button component
 */
const HomeButton: React.FC = () => {
  return (
    <Link href="/">
      <div className="container flex items-center space-x-2 cursor-pointer">
        <h2
          className="
          text-2xl font-bold
          hover:text-red-500 dark:hover:text-red-800
          transition-colors duration-700 ease-in-out
          "
        >
          Maruf Bepary
        </h2>
      </div>
    </Link>
  );
};

export default HomeButton;
