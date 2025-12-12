import Grid from "@/components/ui/Grid";
import PageNavigationItem from "@/app/more/_components/PageNavigationItem";
import developerName from "@/constants/developerName";
import NAV_ITEMS, { HOME_PAGE, MORE_PAGE } from "@/constants/pages";
import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

/**
 * Static metadata for the all-pages directory so the discovery grid matches the route’s head tags.
 */
export const metadata = {
  title: `${developerName} - All Pages`,
  description: MORE_PAGE.description,
};

/**
 * Directory of every public route so anything omitted from the navbar can still be discovered through a visual grid.
 * Pulls from the shared `NAV_ITEMS` constant to stay in sync with command palette destinations.
 *
 * @returns Grid of navigation cards excluding the current page and home.
 */
export default function MorePage() {
  const ignoredPages: Array<NavigationItemInterface> = [HOME_PAGE, MORE_PAGE];

  return (
    <main>
      <section id="pages">
        <div className="w-full">
          <Grid
            items={NAV_ITEMS.filter((item) => !ignoredPages.includes(item)).map(
              (item) => (
                <PageNavigationItem key={item.label} item={item} />
              )
            )}
          />
        </div>
      </section>
    </main>
  );
}
