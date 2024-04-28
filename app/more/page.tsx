import Grid from "@/components/UI/Grid";
import PageNavigationItem from "@/components/UI/PageNavigationItem";
import developerName from "@/constants/developerName";
import NAV_ITEMS, { HOME_PAGE, MORE_PAGE } from "@/constants/pages";
import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

/**
 * Generates the metadata for the page to navigate all pages.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata = {
  title: `${developerName} - All Pages`,
  description: MORE_PAGE.description,
};

type MorePageProps = {
  params: { courseKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Page displaying all the all the pages the user can navigate to.
 * Some pages are not shown in the navbar and can only be accessed through this page.
 *
 * @returns Page to navigate all pages.
 */
const MorePage: React.FC<MorePageProps> = ({ params, searchParams }) => {
  const ignoredPages: Array<NavigationItemInterface> = [HOME_PAGE, MORE_PAGE];

  return (
    <main>
      <section id="pages">
        <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
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
};

export default MorePage;
