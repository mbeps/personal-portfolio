import Link from "next/link";
import { Switch } from "../shadcn/ui/switch";
import FilterOption from "@/types/filters/FilterOption";

interface ArchiveToggleProps {
  generateUrl: (filters: FilterOption[], basePath: string) => string;
  filterProps: FilterOption[];
  showArchived: boolean;
  basePath: string;
}

/**
 * Toggle component used for toggling between showing archived projects and not showing archived projects.
 * @param generateUrl (function) - function that generates the url for the archive toggle
 * @param showArchived (boolean) - whether or not to show archived projects
 * @param selectedType (string) - the selected project type
 * @param selectedTechnology (string) - the selected project technology
 * @param selectedLanguage (string) - the selected project language
 * @param searchTerm (string) - the search term
 * @returns (JSX.Element) - the archive toggle component (JSX.Element
 */
export const ArchiveToggle: React.FC<ArchiveToggleProps> = ({
  generateUrl,
  showArchived,
  filterProps,
  basePath,
}) => {
  // Filters with the addition of the "archived" toggle status
  const filtersWithArchive: FilterOption[] = [
    ...filterProps, // Assuming filterProps is already an array of FilterOption
    { entryName: "archived", slug: (!showArchived).toString() }, // Correctly constructing a FilterOption object
  ];

  return (
    <div className="flex justify-end items-center mt-4">
      <span className="mr-2 mb-1 text-neutral-600 dark:text-neutral-400">
        Display archived
      </span>
      <Link href={generateUrl(filtersWithArchive, basePath)}>
        <Switch checked={showArchived} />
      </Link>
    </div>
  );
};
