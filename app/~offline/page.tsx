import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${developerName} - Offline`,
  description:
    "You are currently offline. Please check your internet connection.",
};

/**
 * Offline fallback page served by the service worker when a navigation
 * request cannot be fulfilled from cache or network.
 *
 * @returns Branded offline message with a Home navigation CTA.
 */
export default function OfflineFallback() {
  return (
    <div
      className="
        flex flex-col
        items-center justify-center
        my-10 py-16 sm:py-32 md:py-48
        text-center
        min-h-dvh
        space-y-12
      "
    >
      <div className="space-y-4">
        <h1 className="text-5xl font-semibold text-neutral-700 dark:text-neutral-300">
          You&apos;re Offline
        </h1>
      </div>
      <h2 className="text-neutral-900 dark:text-neutral-100 transition-colors duration-500 text-2xl font-medium mb-4">
        It looks like you&apos;ve lost your internet connection. The page you
        requested isn&apos;t cached yet.
      </h2>
      <div className="flex flex-col space-y-4 w-full md:w-1/5">
        <Link href="/" className="w-full">
          <Button variant="gradient" className="px-20 w-full">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
