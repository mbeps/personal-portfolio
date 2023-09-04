import Button from "@/components/Atoms/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maruf Bepary - Page Not Found",
  description:
    "The page you are looking for does not exist. Navigate back to the home page",
};

export const revalidate = 0; // page will not be cached

/**
 * Rendered when the user navigates to a page that does not exist.
 * Displays a 404 error message saying that the page does not exist.
 *
 * @returns (React.FC): PageMessage component with a 404 error message
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
      "
    >
      <h1 className="text-5xl font-semibold text-red-500 dark:text-red-700 my-6">
        404: Page does not exist
      </h1>
      <h2 className="text-neutral-900 dark:text-neutral-100 transition-colors duration-500 text-2xl font-medium mb-4">
        This page does not seem to exist. Navigate back to the home page.
      </h2>
      <Button onClick={"/"} variant="filled">
        Home
      </Button>
    </div>
  );
}
