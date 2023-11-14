"use client";

import Tag from "@/components/Atoms/Tag";
import LanguageModal from "@/components/Modal/LanguageModal";
import HeadingThree from "@/components/Text/HeadingThree";
import { languages } from "@/constants/languages";
import { Skill } from "@/types/skills";
import React, { useState } from "react";

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

  /**
   * Gets the list of skills for a language if it exists.
   * Languages that do not have skills are not clickable.
   * @param languageName (string): name of the language to get the skills for
   * @returns (Skill[]): list of skills for the language (empty array if the language does not exist)
   */
  const getSkillsByLanguage = (languageName: string): Skill[] => {
    const language = languages.find((lang) => lang.language === languageName);
    return language && language.skills ? language.skills : [];
  };

  return (
    <>
      <HeadingThree title="Languages" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
        {languages.map((languageData, idx) => (
          <LanguageTagWithModal
            key={idx}
            language={languageData.language}
            skills={getSkillsByLanguage(languageData.language)}
            repository={languageData.repository}
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
  language: string;
  skills: Skill[];
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
  skills,
  repository,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const shouldOpenModal = skills.length > 0 || repository;

  return (
    <>
      <Tag onClick={shouldOpenModal ? handleOpenModal : undefined}>
        {language}
      </Tag>
      {shouldOpenModal && (
        <LanguageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          language={language}
          skills={skills}
          repository={repository}
        />
      )}
    </>
  );
};
