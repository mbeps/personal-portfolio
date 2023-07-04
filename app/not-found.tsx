"use client";

import { useRouter } from "next/navigation";

export const revalidate = 0; // page will not be cached

/**
 * Rendered when the user navigates to a page that does not exist.
 * Displays a 404 error message saying that the page does not exist.
 *
 * @returns (React.FC): PageMessage component with a 404 error message
 */
export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 text-center min-h-[85vh]">
      <h1 className="text-5xl font-semibold text-red-500 dark:text-red-700 my-6">
        404: Page does not exist
      </h1>
      <h2 className="text-neutral-900 dark:text-neutral-100 transition-colors duration-500 text-2xl font-medium">
        This page does not seem to exist. Navigate back to the home page.
      </h2>
      <button
        onClick={() => router.push("/")}
        className="mt-10 px-6 py-2 text-neutral-100 font-semibold rounded-lg cursor-pointer bg-red-500  hover:bg-red-400 dark:bg-red-800  dark:hover:bg-red-900 transition-colors duration-500"
      >
        Go to Home Page
      </button>
    </div>
  );
}
