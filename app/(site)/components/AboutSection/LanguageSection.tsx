"use client";

import LanguageModal from "@/components/Modal/LanguageModal";
import HeadingThree from "@/components/Text/HeadingThree";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import useIsMounted from "@/hooks/useIsMounted";
import React from "react";

/**
 * Displays a list of languages that I know.
 * The tags can be clicked which will open a modal where technologies about the language are displayed.
 * There is also a view more button that redirects to a page showing all the materials (projects, certifications, etc.) related to the language.
 * This modal will display the skills and repositories for the language.
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
      <HeadingThree title="Languages" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start -mt-2">
        {mainLanguages.map((languageData, idx) => (
          <LanguageModal key={idx} languageIdentifier={languageData} />
        ))}
      </div>
    </>
  );
};

export default LanguageSection;
