import NavigationItemInterface from "@/interfaces/NavigationItemInterface";
import Link from "next/link";
import React from "react";

interface PageNavigationItemProps {
  item: NavigationItemInterface;
}

/**
 * Displays a navigation item for the page which allows the user to navigate to the page.
 * This is used in the more page to display all the pages the user can navigate to.
 *
 * @param item The navigation item to display.
 * @returns The navigation item for the page.
 */
const PageNavigationItem: React.FC<PageNavigationItemProps> = ({ item }) => {
  return (
    <>
      <Link href={item.path}>
        <div
          className="
						flex flex-col
						min-h-[180px] h-full max-h-[280px]
						cursor-pointer
						bg-neutral-100 dark:bg-neutral-800
						md:hover:bg-neutral-200 md:dark:hover:bg-red-950
						p-4
						border border-neutral-200 dark:border-neutral-800
						rounded-xl
						shadow-md md:hover:shadow-lg
						transform md:hover:scale-105
						transition-all duration-500 ease-in-out"
        >
          <h2 className=" text-3xl font-bold  mb-4 text-neutral-900 dark:text-neutral-100">
            {item.label}
          </h2>
          <p
            className="
        		text-neutral-700 dark:text-neutral-300"
          >
            {item.description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default PageNavigationItem;
