"use client";

import groupSkills from "@/actions/skills/groupSkills";
import isSkillAssociatedWithBlogs from "@/actions/skills/isSkillAssociatedWithBlogs";
import isSkillAssociatedWithCertificate from "@/actions/skills/isSkillAssociatedWithCertificate";
import isSkillAssociatedWithProject from "@/actions/skills/isSkillAssociatedWithProject";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import SkillTag from "@/components/Tags/SkillTag";
import Tag from "@/components/Tags/Tag";
import HeadingThree from "@/components/Text/HeadingThree";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import blogs from "@/database/blogs";
import allCertificates from "@/database/certificates";
import allProjects from "@/database/projects";
import { languages } from "@/database/skills/languages";
import FilterOption from "@/types/filters/FilterOption";
import Skill from "@/types/skills";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import HeadingTwo from "@/components/Text/HeadingTwo";

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
  const skills = language.technicalHardSkills || [];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const shouldOpenModal =
    language.technicalHardSkills && language.technicalHardSkills.length > 0;

  const [groupedBy, setGroupedBy] = useState("category");
  const filteredSkills = (language.technicalHardSkills || []).filter(
    (skill) => skill.isMainSkill,
  );
  const groupedSkills = groupSkills(
    groupedBy,
    language.technicalHardSkills || [],
  );

  const projects = allProjects;
  const certificates = allCertificates;
  const allBlogs = blogs;

  const hasProjects = isSkillAssociatedWithProject(language, projects);
  const hasCertificates = isSkillAssociatedWithCertificate(
    language,
    certificates,
  );
  const hasBlogs = isSkillAssociatedWithBlogs(language, allBlogs);
  const hasMaterial = hasProjects || hasCertificates || hasBlogs;

  const options: FilterOption[] = [
    { slug: "category", entryName: "Category" },
    { slug: "none", entryName: "None" },
  ];

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Tag onClick={shouldOpenModal ? handleOpenModal : undefined}>
            {language.name}
          </Tag>
        </DialogTrigger>
        <DialogContent>
          <HeadingTwo title={language.name} />
          <div className="flex mt-4">
            <div className="flex-grow mr-2 mt-2.5 text-right text-neutral-700 dark:text-neutral-300">
              Group by:
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-48">
                <Button
                  variant="outlined"
                  className={`
                    px-3 py-2 w-full
                    flex
                    text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize md:hover:text-neutral-700 dark:md:hover:text-neutral-200
                    rounded-xl
                    shadow-md md:hover:shadow-lg focus:shadow-lg
                    bg-neutral-100 dark:bg-neutral-800
                    md:hover:bg-neutral-100 dark:md:hover:bg-neutral-800
                    border-2 border-transparent dark:border-transparent
                    md:hover:border-red-500 dark:md:hover:border-red-800
                    transition-all duration-500 ease-in-out
                  `}
                >
                  <div className="flex items-start justify-between space-x-2 w-full">
                    <span>Category</span>
                    <BsChevronDown
                      fontSize={16}
                      className="text-neutral-700 dark:text-neutral-200 mt-1"
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 ">
                {options.map((option, index) => (
                  <DropdownMenuItem
                    key={index}
                    className={`
                ${option.slug === groupedBy ? "font-bold" : ""}`}
                    onSelect={() => setGroupedBy(option.slug)}
                  >
                    {option.entryName}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* List of skills */}
          <div className="space-y-1">
            {Object.entries(groupedSkills).map(([category, skills], index) => (
              <div key={index} className="text-center md:text-left">
                <HeadingThree title={category} />
                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                  {skills.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Links */}
          {hasMaterial && (
            <div className="text-center md:text-left">
              <HeadingThree title="Material" />
            </div>
          )}
          {hasMaterial && (
            <>
              <div
                className="
                  flex flex-wrap flex-col
                  text-center md:text-left
                  justify-start z-10 mt-5 space-y-2"
              >
                <Link
                  href={`
                    /skills/${language.slug}
              `}
                >
                  <div className="w-full">
                    <Button variant="gradient" className="w-full">
                      {`All ${language.name} Material`}
                    </Button>
                  </div>
                </Link>
              </div>
            </>
          )}
          {hasProjects && (
            <div
              className="
                flex flex-wrap flex-col
                text-center md:text-left
                justify-start z-10 mt-5 space-y-2"
            >
              <Link href={`/projects?archived=true&language=${language.slug}`}>
                <div className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full"
                  >{`${language.name} Projects`}</Button>
                </div>
              </Link>
            </div>
          )}

          {hasCertificates && (
            <div
              className="
                flex flex-wrap flex-col
                text-center md:text-left
                justify-start z-10 mt-5 space-y-2"
            >
              <Link
                href={`
                  /credentials?archived=true&technical=${language.slug}
              `}
              >
                <div className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full"
                  >{`${language.name} Certificates`}</Button>
                </div>
              </Link>
            </div>
          )}

          {hasBlogs && (
            <div
              className="
                flex flex-wrap flex-col
                text-center md:text-left
                justify-start z-10 mt-5 space-y-2"
            >
              <Link
                href={`
              /blogs?technical=${language.slug}
              `}
              >
                <div className="w-full">
                  <Button variant="ghost" className="w-full">
                    {`${language.name} Blogs`}
                  </Button>
                </div>
              </Link>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
