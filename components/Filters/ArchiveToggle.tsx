import Toggle from "@/components/Inputs/Toggle";
import FilterParams from "@/types/FilterParams";
import Link from "next/link";

interface ArchiveToggleProps {
  generateUrl: (filters: FilterParams, basePath: string) => string;
  showArchived: boolean;
  filterProps: FilterParams;
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
  return (
    <div className="flex justify-end items-center">
      <span className="mr-2 mb-1 text-neutral-600 dark:text-neutral-400">
        Display archived
      </span>
      <Link
        href={generateUrl(
          {
            ...filterProps,
            archived: !showArchived,
          },
          basePath
        )}
      >
        <Toggle checked={showArchived} />
      </Link>
    </div>
  );
};