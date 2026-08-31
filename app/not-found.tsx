import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: `${developerName} - Page Not Found`,
  description:
    "The page you are looking for does not exist. Navigate back to the home page",
};

export const revalidate = 0; // page will not be cached

/**
 * App Router 404 boundary that funnels users back to the homepage or More index while keeping brand styling intact.
 *
 * @returns Full height stack with failure copy and navigation CTAs.
 */
export default function NotFound() {
  return (
    <div className="my-10 flex min-h-dvh flex-col items-center justify-center space-y-12 py-16 text-center sm:py-32 md:py-48">
      <div className="space-y-4">
        <h1 className="text-5xl text-red-500 dark:text-red-700">404</h1>
        <h1 className="font-semibold text-5xl text-red-500 dark:text-red-700">
          Page Does Not Exist
        </h1>
      </div>
      <h2 className="mb-4 font-medium text-2xl text-neutral-900 transition-colors duration-500 dark:text-neutral-100">
        This page does not seem to exist. Navigate back to the home page or view
        all pages.
      </h2>
      <div className="flex w-full flex-col space-y-4 md:w-1/5">
        <Link href={ROUTES.HOME.path} className="w-full">
          <Button variant="gradient" className="w-full px-20">
            Home
          </Button>
        </Link>

        <Link href={ROUTES.MORE.path} className="w-full">
          <Button variant="ghost" className="w-full px-20">
            All Pages
          </Button>
        </Link>
      </div>
    </div>
  );
}
