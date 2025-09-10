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
 * Page displaying all the pages the user can navigate to.
 * Some pages are not shown in the navbar and can only be accessed through this page.
 *
 * @param props Props for the page.
 * @returns Page to navigate all pages.
 */
export default function MorePage() {
  const ignoredPages: Array<NavigationItemInterface> = [HOME_PAGE, MORE_PAGE];

  return (
    <main>
      <section id="pages">
        <div className="animate-fade-in animation-delay-2 w-full">
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
