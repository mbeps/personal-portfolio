import Grid from "@/components/UI/Grid";
import PageNavigationItem from "@/components/UI/PageNavigationItem";
import developerName from "@/constants/developerName";
import NAV_ITEMS, { HOME_PAGE, MORE_PAGE } from "@/constants/pages";
import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

/**
 * Generates the metadata for the page to navigate all pages.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
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
