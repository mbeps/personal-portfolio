"use client";

import Tag from "@/components/Tags/Tag";
import LanguageModal from "@/components/Modal/LanguageModal";
import HeadingThree from "@/components/Text/HeadingThree";
import Skill from "@/types/skills";
import React, { useState } from "react";
import { languages } from "@/database/skills/languages";

/**
 * Displays a list of languages that I know.
 * Some of the tags can be clicked which will open a modal.
 * This modal will display the skills and repositories for the language.
 */
const LanguageSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
        {mainLanguages.map((languageData, idx) => (
          <LanguageTagWithModal
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

interface LanguageTagWithModalProps {
  language: Skill;
  repository?: string;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isModalOpen: boolean;
}

/**
 * Displays a tag for each language.
 * If the language has skills or repositories, a modal is displayed when the tag is clicked.
 * The modal displays the skills and repositories for the language.
 * If the language does not have any skills or repositories, the modal cannot be opened.
 *
 * @param language (string): name of the language
 * @param skills (Skill[]): list of skills for the language
 * @param repositories (Repository[]): list of repositories for the language
 * @returns (JSX.Element): language tag with modal (stack of the language
 */
const LanguageTagWithModal: React.FC<LanguageTagWithModalProps> = ({
  language,
  repository,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const shouldOpenModal = language.technicalHardSkills && language.technicalHardSkills.length > 0;

  return (
    <>
      <Tag onClick={shouldOpenModal ? handleOpenModal : undefined}>
        {language.name}
      </Tag>
      {shouldOpenModal && (
        <LanguageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          language={language}
          skills={language.technicalHardSkills!}
        />
      )}
    </>
  );
};
