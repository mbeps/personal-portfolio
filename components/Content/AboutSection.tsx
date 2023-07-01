"use client";

import Tag from "@/components/Atoms/Tag";
import {
  Repository,
  Skill,
  languages,
  technologies,
} from "@/types/languagesSkillsTechnologies";
import React, { useState } from "react";
import LanguageModal from "../Modal/LanguageModal";
import SkillsModal from "../Modal/SkillsModal";
import TechnologiesModal from "../Modal/TechnologiesModal";
import HeadingThree from "./Text/HeadingThree";

/**
 * About section component.
 * Split into two sections: left and right.
 * Left section contains a short description of myself.
 * Right section contains a list of skills, languages and technologies.
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
            <TechnologiesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

interface SectionProps {
  title: string;
  data: string[];
}

/**
 * Displays a list of items (skills, languages, technologies) with a title for the section.
 * Each section is separated by a heading.
 * Skills, languages and technologies are displayed as tags.
 *
 * @param title (string): title of the section
 * @param data (string[]): list of items to be displayed
 * @returns (JSX.Element): section displaying a list of items with a title
 */
const Section: React.FC<SectionProps> = ({ title, data }) => (
  <>
    <HeadingThree title={title} />
    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
      {data.map((item, idx) => (
        <Tag key={idx}>{item}</Tag>
      ))}
    </div>
  </>
);

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

  /**
   * Creates a list of skills from the languages array (which has metadata).
   * It does not include duplicate skills.
   * It limits the number of skills per language to a configurable number.
   * @param skill_limit_category (number): number of skills to be displayed per language
   * @returns (string[]): list of all skills
   */
  const firstNSkillsPerCategory = (skill_limit_category: number) => {
    let allSkills = languages.reduce((accumulator, language) => {
      if (language.skills) {
        // Get the first 'SKILL_LIMIT_PER_LANGUAGE' skills for each language
        let limitedSkills = language.skills.slice(0, skill_limit_category); // Get the first 'SKILL_LIMIT_PER_LANGUAGE' skills for each language
        return accumulator.concat(limitedSkills.map((skill) => skill.skill)); // Get all skills for each language
      } else {
        return accumulator; // If language does not have any skills, return accumulator
      }
    }, [] as string[]);

    let uniqueSkills = Array.from(new Set(allSkills)); // Remove duplicate skills
    return uniqueSkills; // Return all skills
  };

  /**
   * Creates a list of all skills from the languages array (which has metadata).
   * It does not include duplicate skills.
   * It limits the number of skills to a configurable number.
   * @param skill_limit (number): number of skills to be displayed
   * @returns (string[]): list of all skills
   */
  const firstNSkills = (skill_limit: number) => {
    let allSkills = languages.reduce((accumulator, language) => {
      if (language.skills) {
        return accumulator.concat(language.skills.map((skill) => skill.skill)); // Get all skills for each language
      } else {
        return accumulator; // If language does not have any skills, return accumulator
      }
    }, [] as string[]);

    let uniqueSkills = Array.from(new Set(allSkills)); // Remove duplicate skills

    // Return first 'SKILL_LIMIT' skills
    return uniqueSkills.slice(0, skill_limit); // Get the first 'SKILL_LIMIT' skills
  };

  /**
   * Creates a list of skills from the languages array (which has metadata).
   * It does not include duplicate skills.
   * It limits the number of skills per language to a configurable number.
   * @param skill_limit (number): number of skills to be displayed per language (default: 3
   * @returns (string[]): list of skills (first 'skill_limit' skills for each language
   */
  const firstNSkillsPerLanguage = (skill_limit: number) => {
    let skillsByLanguage: { [key: string]: string[] } = {};

    languages.forEach((language) => {
      if (language.skills) {
        // Get the first 'skill_limit' skills for each language
        skillsByLanguage[language.language] = language.skills
          .slice(0, skill_limit)
          .map((skill) => skill.skill);
      }
    });

    // Flatten the array and remove duplicates
    let allSkills = Object.values(skillsByLanguage).flat();
    let uniqueSkills = Array.from(new Set(allSkills));
    return uniqueSkills;
  };

  /**
   * Displays a list of skills.
   */
  const handleDisplaySkills = () => {
    return firstNSkills(11);
    return firstNSkillsPerLanguage(5);
    return firstNSkillsPerCategory(3);
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

/**
 * Displays a list of technologies that I have used.
 * @returns (JSX.Element): technologies section (list of technologies)
 */
const TechnologiesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /**
   * Function to display a limited number of technology names for each category.
   * It does not include duplicate technologies.
   * It limits the number of technologies per category to a configurable number.
   * @param tech_limit_category (number): number of technologies to be displayed per category
   * @returns (string[]): list of N technology names for each category
   */
  const firstNTechPerCategory = (tech_limit_category: number) => {
    let techByCategory: { [key: string]: string[] } = {};

    // Organize technologies by category
    technologies.forEach((tech) => {
      if (tech.category) {
        // If tech has a category
        if (!techByCategory[tech.category]) techByCategory[tech.category] = []; // If category does not exist, create it
        techByCategory[tech.category].push(tech.name); // Add tech to category
      }
    });

    // Get first 'TECH_LIMIT' tech for each category
    for (let category in techByCategory) {
      // For each category
      techByCategory[category] = Array.from(
        // Remove duplicate tech
        new Set(techByCategory[category]) // Remove duplicate tech
      ).slice(0, tech_limit_category); // Get the first 'TECH_LIMIT' tech
    }

    // Flatten the array and return
    return Object.values(techByCategory).flat();
  };

  /**
   * Function to display a limited number of technology names from all categories.
   * It does not include duplicate technologies.
   * @returns (string[]): list of N technology names from all categories
   */
  const firstNTech = (tech_limit: number) => {
    let allTech = technologies.map((tech) => tech.name);
    let uniqueTech = Array.from(new Set(allTech)); // Remove duplicate tech

    // Return first 'TECH_LIMIT' tech
    return uniqueTech.slice(0, tech_limit); // Get the first 'TECH_LIMIT' tech
  };

  /**
   * Function to handle the display of technologies.
   */
  const handleDisplayTech = () => {
    return firstNTechPerCategory(2);
    return firstNTech(20);
  };

  return (
    <>
      <HeadingThree title="Technologies" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
        {handleDisplayTech().map((item, idx) => (
          <Tag key={idx}>{item}</Tag>
        ))}
        <Tag onClick={handleOpenModal}>...</Tag>
        <TechnologiesModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          technologies={technologies}
        />
      </div>
    </>
  );
};
