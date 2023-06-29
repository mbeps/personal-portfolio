"use client";

import Tag from "@/components/Atoms/Tag";
import React, { useState } from "react";
import HeadingThree from "./Text/HeadingThree";
import LanguageModal from "../Modal/LanguageModal";

interface Skill {
  skill: string;
}

interface Language {
  language: string;
  skills?: Skill[];
}

const JavaScriptTypeScriptSkills: Skill[] = [
  { skill: "React" },
  { skill: "Next.JS" },
  { skill: "NextAuth" },
  { skill: "Jest" },
  { skill: "Vitest" },
  { skill: "Tailwind CSS" },
  { skill: "Chakra UI" },
];

// you can now define your languages array
const languages: Language[] = [
  {
    language: "Python",
    skills: [
      { skill: "Poetry" },
      { skill: "Flask" },
      { skill: "Django" },
      { skill: "Numpy" },
      { skill: "Jupyter Notebooks" },
      { skill: "PyTest" },
    ],
  },
  {
    language: "Java",
    skills: [{ skill: "Maven" }, { skill: "JUnit" }],
  },
  {
    language: "JavaScript",
    skills: JavaScriptTypeScriptSkills,
  },
  {
    language: "TypeScript",
    skills: JavaScriptTypeScriptSkills,
  },
  {
    language: "C",
  },
  {
    language: "Haskell",
  },
  {
    language: "Shell",
  },
];

const technologies = [
  "Git",
  "SVN",
  "Firebase",
  "Supabase",
  "GitHub Actions",
  "Jenkins",
  "Docker",
  "REST",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
];

/**
 * About section component.
 * Split into two sections: left and right.
 * Left section contains a short description of myself.
 * Right section contains a list of skills, languages and technologies.
 * @returns (JSX.Element): About section
 */
const AboutSection = () => {
  /**
   * Creates a list of all languages from the languages array.
   * This does not include any skills.
   */
  const allLanguages = languages.map((language) => language.language);

  /**
   * Creates a list of all skills from the languages array.
   * Removes any duplicate skills.
   *
   * @returns (string[]): list of all skills
   */
  const allSkills = () => {
    let allSkills = languages.reduce((accumulator, language) => {
      if (language.skills) {
        return accumulator.concat(language.skills.map((skill) => skill.skill));
      } else {
        return accumulator;
      }
    }, [] as string[]);

    // Filtering to only include unique skills
    let uniqueSkills = Array.from(new Set(allSkills));
    return uniqueSkills;
  };

  return (
    <section id="about" className="min-h-[85vh]">
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
            {/* <Section title="Languages" data={allLanguages} /> */}
            <LanguageSection title="Languages" languages={languages} />
            <Section title="Skills" data={allSkills()} />
            <Section title="Technologies" data={technologies} />
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

interface LanguageSectionProps {
  title: string;
  languages: Language[];
}

const LanguageSection: React.FC<LanguageSectionProps> = ({
  title,
  languages,
}) => {
  const getSkillsByLanguage = (languageName: string): string[] => {
    const language = languages.find((lang) => lang.language === languageName);
    return language && language.skills
      ? language.skills.map((skill) => skill.skill)
      : [];
  };

  return (
    <>
      <HeadingThree title={title} />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
        {languages.map((languageData, idx) => (
          <LanguageTagWithModal
            key={idx}
            language={languageData.language}
            skills={getSkillsByLanguage(languageData.language)}
          />
        ))}
      </div>
    </>
  );
};

interface LanguageTagWithModalProps {
  language: string;
  skills: string[];
}

const LanguageTagWithModal: React.FC<LanguageTagWithModalProps> = ({
  language,
  skills,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Tag onClick={handleOpenModal}>{language}</Tag>
      <LanguageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        language={language}
        skills={skills}
      />
    </>
  );
};
