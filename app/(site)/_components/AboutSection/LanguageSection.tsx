"use client";

import LanguageModal from "@/components/modal/LanguageModal";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import useIsMounted from "@/hooks/useIsMounted";
import React from "react";

/**
 * Client-only teaser for the Language modal so the homepage can open the richer skill drill-down without duplicating data.
 * Keeps the list tight to the main languages defined in the skill DB while reusing the modal component shared elsewhere.
 */
const LanguageSection: React.FC = () => {
  const isMounted: boolean = useIsMounted();

  // If the component is not mounted, do not display anything.
  if (!isMounted) {
    return null;
  }

  /**
   * The list of main languages that will be displayed.
   */
  const mainLanguages: SkillDatabaseKeys[] = [
    SkillDatabaseKeys.Python,
    SkillDatabaseKeys.JavaScript,
    SkillDatabaseKeys.TypeScript,
    SkillDatabaseKeys.Java,
  ];

  return (
    <>
      <h3>Languages</h3>
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start -mt-2">
        {mainLanguages.map((languageData, idx) => (
          <LanguageModal key={idx} languageIdentifier={languageData} />
        ))}
      </div>
    </>
  );
};

export default LanguageSection;
