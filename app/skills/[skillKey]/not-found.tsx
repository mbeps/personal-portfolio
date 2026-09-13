import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import { ROUTES } from "@/config/routes";

/**
 * Route-level 404 boundary for skills when a skillKey is not found.
 */
export default function SkillNotFound() {
  return (
    <div className="my-10 flex min-h-dvh flex-col items-center justify-center space-y-8 py-16 text-center sm:py-32 md:py-48">
      <div className="space-y-4">
        <h1 className="text-5xl text-red-500 dark:text-red-700">404</h1>
        <h2 className="font-semibold text-3xl text-neutral-900 dark:text-neutral-100">
          Skill Not Found
        </h2>
      </div>
      <p className="max-w-md text-neutral-600 dark:text-neutral-400">
        The skill you are looking for does not exist or may have been removed.
      </p>
      <div className="flex w-full max-w-xs flex-col space-y-4">
        <Link href={ROUTES.SKILLS.path} className="w-full">
          <Button variant="gradient" className="w-full">
            All Skills
          </Button>
        </Link>
        <Link href={ROUTES.HOME.path} className="w-full">
          <Button variant="ghost" className="w-full">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
