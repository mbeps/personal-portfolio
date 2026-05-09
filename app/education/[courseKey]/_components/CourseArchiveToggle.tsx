"use client";

import { ArchiveToggle } from "@/components/filters/ArchiveToggle";
import { parseAsBoolean, useQueryState } from "nuqs";

/**
 * Client wrapper that manages archive visibility for the course modules list via nuqs.
 * Exists because the parent course page is a server component and cannot call hooks directly.
 */
const CourseArchiveToggle: React.FC = () => {
  const [showArchived, setShowArchived] = useQueryState(
    "archived",
    parseAsBoolean
      .withDefault(false)
      .withOptions({ shallow: false, clearOnDefault: true }),
  );

  return (
    <ArchiveToggle
      showArchived={showArchived}
      onToggle={() => setShowArchived(!showArchived)}
    />
  );
};

export default CourseArchiveToggle;
