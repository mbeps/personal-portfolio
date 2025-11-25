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
 * Shared toggle that flips the `archived` query parameter so archived items can be surfaced alongside active work.
 * Wrapped in a Link so Next routing handles the update without custom handlers.
 *
 * @param showArchived Whether archived material is currently shown.
 * @param filterProps Existing filter params to preserve when toggling.
 * @param basePath Route base used for the generated URL.
 * @returns Switch + label that links to the next archive state.
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
