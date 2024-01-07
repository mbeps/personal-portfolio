import Link from "next/link";
import { Switch } from "../shadcn/ui/switch";

interface ArchiveToggleProps {
  generateUrl: (filters: [string, string][], basePath: string) => string;
  filterProps: [string, string][];
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
  // Explicitly define filtersWithArchive as an array of [string, string] tuples
  const filtersWithArchive: [string, string][] = [
    ...filterProps,
    ["archived", (!showArchived).toString()], // Correctly inferred as [string, string]
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
