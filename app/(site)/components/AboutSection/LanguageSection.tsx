"use client";

import LanguageModal from "@/components/Modal/LanguageModal";
import HeadingThree from "@/components/Text/HeadingThree";
import skillsDatabase from "@/database/skills/skills";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import useIsMounted from "@/hooks/useIsMounted";
import React, { useState } from "react";

/**
 * Displays a list of languages that I know.
 * Some of the tags can be clicked which will open a modal.
 * This modal will display the skills and repositories for the language.
 */
const LanguageSection: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  const mainLanguages: SkillSlugEnum[] = [
    SkillSlugEnum.Python,
    SkillSlugEnum.JavaScript,
    SkillSlugEnum.TypeScript,
    SkillSlugEnum.Java,
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
