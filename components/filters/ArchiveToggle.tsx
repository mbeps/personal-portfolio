import { Switch } from "../shadcn/ui/switch";

interface ArchiveToggleProps {
  showArchived: boolean;
  onToggle: () => void;
}

/**
 * Shared toggle that flips the archive state so archived items can be surfaced alongside active work.
 * Calls the nuqs setter directly without building URLs manually.
 *
 * @param showArchived Whether archived material is currently shown.
 * @param onToggle Setter that flips the archive state.
 * @returns Switch + label that toggles the archive state.
 */
export const ArchiveToggle: React.FC<ArchiveToggleProps> = ({
  showArchived,
  onToggle,
}) => {
  return (
    <div className="flex justify-end items-center mt-4">
      <span className="mr-2 mb-1 text-neutral-600 dark:text-neutral-400">
        Display archived
      </span>
      <Switch checked={showArchived} onCheckedChange={onToggle} />
    </div>
  );
};
