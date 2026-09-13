"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/shadcn/ui/button";
import { ROUTES } from "@/config/routes";

interface RootErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Root error boundary catching uncaught runtime exceptions across the app.
 */
export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    // Log error to console (or reporting service)
    console.error("Root error boundary caught exception:", error);
  }, [error]);

  return (
    <div className="my-10 flex min-h-dvh flex-col items-center justify-center space-y-8 py-16 text-center sm:py-32 md:py-48">
      <div className="space-y-4">
        <h1 className="text-5xl text-red-500 dark:text-red-700">500</h1>
        <h2 className="font-semibold text-4xl text-neutral-900 dark:text-neutral-100">
          Something went wrong!
        </h2>
      </div>
      <p className="max-w-md text-neutral-600 dark:text-neutral-400">
        An unexpected error occurred. You can try to reload the page or navigate
        back to the homepage.
      </p>
      <div className="flex w-full max-w-xs flex-col space-y-4">
        <Button onClick={() => reset()} variant="gradient" className="w-full">
          Try Again
        </Button>
        <Link href={ROUTES.HOME.path} className="w-full">
          <Button variant="ghost" className="w-full">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
