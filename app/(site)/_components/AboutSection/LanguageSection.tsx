"use client";

import type React from "react";
import LanguageModal from "@/app/(site)/_components/AboutSection/modal/LanguageModal";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import useIsMounted from "@/hooks/useIsMounted";

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
      <div className="z-10 -mt-2 flex flex-row flex-wrap justify-center md:justify-start">
        {mainLanguages.map((languageData, idx) => (
          <LanguageModal key={idx} languageIdentifier={languageData} />
        ))}
      </div>
    </>
  );
};

export default LanguageSection;
