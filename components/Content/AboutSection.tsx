"use client";

import Tag from "@/components/Atoms/Tag";

import React, { useState } from "react";
import LanguageModal from "../Modal/LanguageModal";
import SkillsModal from "../Modal/SkillsModal";
import TechnologiesModal from "../Modal/TechnologiesModal";
import HeadingThree from "../Text/HeadingThree";
import { Skill, languages, Repository } from "@/types/languages";
import { technologies } from "@/types/technologies";

/**
 * About section component.
 * Split into two sections: left and right.
 * Left section contains a short description of myself.
 * Right section contains a list of skills, languages and technologies.
 * On mobile, the sections are stacked on top of each other.
 *
 * The skills, languages and technologies are displayed as tags.
 * Some of these tags can be clicked which will open a modal.
 * There is also a view more button that opens a modal to show more skills, languages or technologies.
 * @returns (JSX.Element): About section
 */
const AboutSection = () => {
  return (
    <section id="about" className="min-h-[85vh] ">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* Left section */}
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 mt-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello there! I&#39;m Maruf, a{" "}
              <span className="font-bold">software engineer</span> fueled by{" "}
              <span className="font-bold">
                curiosity, innovation, and an insatiable desire to explore the
                depths of technology
              </span>
              . Currently, I am pursuing my BS in Computer Science at Royal
              Holloway University, London.
            </p>
            <br />
            <p>
              Software engineering for me is akin to conducting an orchestra - a
              <span className="font-bold"> symphony of codes</span> that come
              together to create something remarkable. From developing APIs to
              building intricate front-end architectures, I&#39;ve dabbled in
              all parts of the{" "}
              <span className="font-bold">software development lifecycle</span>.
            </p>
            <br />
            <p>
              My technical interest extends beyond full-stack development to{" "}
              <span className="font-bold">Machine Learning</span> and{" "}
              <span className="font-bold">Mathematics</span>. To further my
              knowledge, I&#39;m currently delving into advanced Machine
              Learning techniques.
            </p>
            <br />
            <p>
              Additionally, my passion for{" "}
              <span className="font-bold">efficiency</span> and streamlining
              operations has drawn me to{" "}
              <span className="font-bold">DevOps</span>. I&#39;m currently
              engaging with the principles of continuous integration, testing,
              deployment, and monitoring through Udemy.
            </p>
            <br />
            <p>
              When I step away from the computer, I engage in a multitude of
              hobbies. From football and badminton to immersing myself in
              science-based literature and traveling, I believe in{" "}
              <span className="font-bold">
                seizing the day and living life to the fullest
              </span>
              .
            </p>
          </div>

          {/* Right section */}
          <div className="text-center md:w-1/2 md:text-left">
            <LanguageSection />
            <SkillSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

/**
 * Displays a list of languages that I know.
 */
const LanguageSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
            repositories={languageData.repositories || []}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            isModalOpen={isModalOpen}
          />
        ))}
      </div>
    </>
  );
};

interface LanguageTagWithModalProps {
  language: string;
  skills: Skill[];
  repositories: Repository[];
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
  repositories,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const shouldOpenModal = skills.length > 0 || repositories.length > 0;

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
          repositories={repositories}
        />
      )}
    </>
  );
};

/**
 * Displays a list of skills that I have.
 * @returns (JSX.Element): skill section (list of skills)
 */
const SkillSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const allLanguageSkills: Skill[] = languages.reduce((acc, language) => {
    if (language.skills) {
      return acc.concat(language.skills);
    }
    return acc;
  }, [] as Skill[]);

  const allSkills: Skill[] = allLanguageSkills.concat(technologies);

  const firstNSkills = (limit: number) => {
    const skillNames = Array.from(
      new Set(allSkills.map((skill) => skill.skill))
    ).slice(0, limit);
    return skillNames;
  };

  const firstNSkillsPerCategory = (limitPerCategory: number) => {
    // Categorize the skills
    const categories: Record<string, Skill[]> = allSkills.reduce(
      (acc, skill) => {
        const category = skill.category || "Other";
        if (!acc[category]) acc[category] = [];
        acc[category].push(skill);
        return acc;
      },
      {} as Record<string, Skill[]>
    );

    // Take the first 'limitPerCategory' skills from each category, extract skill names, and flatten
    let skillNames: string[] = [];
    Object.values(categories).forEach((categorySkills) => {
      const names = categorySkills
        .slice(0, limitPerCategory)
        .map((skill) => skill.skill);
      skillNames = Array.from(new Set(skillNames.concat(names))); // Merge with existing names, removing duplicates
    });
    return skillNames;
  };

  const handleDisplaySkills = () => {
    return firstNSkillsPerCategory(100);
    return firstNSkills(100);
  };

  return (
    <>
      <HeadingThree title="Language Skills" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
        {handleDisplaySkills().map((item, idx) => (
          <Tag key={idx}>{item}</Tag>
        ))}
        <Tag onClick={handleOpenModal}>...</Tag>
        <SkillsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          languages={languages}
        />
      </div>
    </>
  );
};
