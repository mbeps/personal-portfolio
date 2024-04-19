import FilterOption from "@/interfaces/filters/FilterOption";
import Link from "next/link";
import { Switch } from "../shadcn/ui/switch";
import generateUrl from "@/actions/generateUrl";

interface ArchiveToggleProps {
  filterProps: FilterOption[];
  showArchived: boolean;
  basePath: string;
}

/**
 * Toggle component used for toggling between showing archived material and not showing archived material.
 *
 * @param generateUrl Function to generate the URL with the new filter options
 * @param showArchived If the archived material should be shown
 * @param filterProps The current filter options
 * @param basePath The base path for the URL
 * @returns Toggle component to show archived material
 * @see Switch https://ui.shadcn.com/docs/components/switch
 */
export const ArchiveToggle: React.FC<ArchiveToggleProps> = ({
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
      <Link href={generateUrl(filtersWithArchive, basePath)} scroll={false}>
        <Switch checked={showArchived} />
      </Link>
    </div>
  );
};
