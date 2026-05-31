import Grid from "@/components/ui/Grid";
import PageNavigationItem from "@/app/more/_components/PageNavigationItem";
import developerName from "@/constants/developerName";
import { ROUTES, NAV_ITEMS } from "@/constants/routes";

/**
 * Static metadata for the all-pages directory so the discovery grid matches the route’s head tags.
 */
export const metadata = {
  title: `${developerName} - All Pages`,
  description: ROUTES.MORE.description,
};

/**
 * Directory of every public route so anything omitted from the navbar can still be discovered through a visual grid.
 * Pulls from the shared `NAV_ITEMS` constant to stay in sync with command palette destinations.
 *
 * @returns Grid of navigation cards excluding the current page and home.
 */
export default function MorePage() {
  const ignoredPaths: string[] = [ROUTES.HOME.path, ROUTES.MORE.path];

  return (
    <main>
      <section id="pages">
        <div className="w-full">
          <Grid
            items={NAV_ITEMS.filter(
              (item) => !ignoredPaths.includes(item.path),
            ).map((item) => (
              <PageNavigationItem key={item.label} item={item} />
            ))}
          />
        </div>
      </section>
    </main>
  );
}
