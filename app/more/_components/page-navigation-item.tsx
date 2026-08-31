import Link from "next/link";
import type React from "react";
import type NavigationItemInterface from "@/interfaces/navigation-item-interface";

interface PageNavigationItemProps {
  item: NavigationItemInterface;
}

/**
 * Card representation of a `NAV_ITEMS` entry used on the `/more` index to surface hidden routes.
 *
 * @param item Navigation metadata describing path + copy.
 * @returns Clickable card styled like other listing tiles.
 */
const PageNavigationItem: React.FC<PageNavigationItemProps> = ({ item }) => {
  return (
    <Link href={item.path}>
      <div className="flex h-full max-h-70 min-h-35 transform cursor-pointer flex-col rounded-xl border border-neutral-200 bg-neutral-100 p-4 shadow-sm transition-all duration-500 ease-in-out hover:border-neutral-400 md:hover:scale-103 md:hover:bg-neutral-200 md:hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-red-500 md:dark:hover:bg-red-950">
        <h2 className="mb-4 font-bold text-3xl text-neutral-900 dark:text-neutral-100">
          {item.label}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          {item.description}
        </p>
      </div>
    </Link>
  );
};

export default PageNavigationItem;
