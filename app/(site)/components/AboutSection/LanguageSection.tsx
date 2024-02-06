"use client";

import LanguageModal from "@/components/Modal/LanguageModal";
import HeadingThree from "@/components/Text/HeadingThree";
import { languages } from "@/database/skills/languages";
import useIsMounted from "@/hooks/useIsMounted";
import React, { useState } from "react";

/**
 * Displays a list of languages that I know.
 * Some of the tags can be clicked which will open a modal.
 * This modal will display the skills and repositories for the language.
 */
const LanguageSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const mainLanguages = languages.filter((lang) => lang.isMainSkill);

  return (
    <>
      <HeadingThree title="Languages" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start -mt-2">
        {mainLanguages.map((languageData, idx) => (
          <LanguageModal
            key={idx}
            language={languageData}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            isModalOpen={isModalOpen}
          />
        ))}
      </div>
    </>
  );
};

export default LanguageSection;
