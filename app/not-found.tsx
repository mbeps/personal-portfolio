import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { MORE_PAGE } from "@/constants/pages";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${developerName} - Page Not Found`,
  description:
    "The page you are looking for does not exist. Navigate back to the home page",
};

export const revalidate = 0; // page will not be cached

/**
 * Rendered when the user navigates to a page that does not exist.
 * Displays a 404 error message saying that the page does not exist.
 *
 * @returns PageMessage component with a 404 error message
 */
export default function NotFound() {
  return (
    <div
      className="
        flex flex-col
        items-center justify-center 
        animate-fadeIn animation-delay-2 
        my-10 py-16 sm:py-32 md:py-48 
        text-center 
        min-h-[85vh]
        space-y-12
      "
    >
      <div className="space-y-4">
        <h1 className="text-5xl text-red-500 dark:text-red-700 ">404</h1>
        <h1 className="text-5xl font-semibold text-red-500 dark:text-red-700">
          Page Does Not Exist
        </h1>
      </div>
      <h2 className="text-neutral-900 dark:text-neutral-100 transition-colors duration-500 text-2xl font-medium mb-4">
        This page does not seem to exist. Navigate back to the home page or view
        all pages.
      </h2>
      <div
        className="
          flex flex-col
          space-y-4
          w-full md:w-1/5
          "
      >
        <Link href={"/"} className="w-full">
          <Button variant="gradient" className="px-20 w-full">
            Home
          </Button>
        </Link>

        <Link href={MORE_PAGE.path} className="w-full">
          <Button variant="ghost" className="px-20 w-full">
            All Pages
          </Button>
        </Link>
      </div>
    </div>
  );
}
