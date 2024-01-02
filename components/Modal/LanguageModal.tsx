"use client";

import groupSkills from "@/actions/skills/groupSkills";
import isSkillAssociatedWithBlogs from "@/actions/skills/isSkillAssociatedWithBlogs";
import isSkillAssociatedWithCertificate from "@/actions/skills/isSkillAssociatedWithCertificate";
import isSkillAssociatedWithProject from "@/actions/skills/isSkillAssociatedWithProject";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import blogs from "@/database/blogs";
import allCertificates from "@/database/certificates";
import allProjects from "@/database/projects";
import FilterOption from "@/types/filters/FilterOption";
import Skill from "@/types/skills";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Button from "../Button/Button";
import SkillTag from "../Tags/SkillTag";
import HeadingThree from "../Text/HeadingThree";
import Modal from "./Modal";

interface ProjectModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
  language: Skill;
  skills: Skill[];
}

/**
 * Displays a modal for each language.
 * The modal displays the skills and repositories for the language.
 * If the language does not have any skills or repositories, the modal cannot be opened.
 * It also displays buttons to open the repositories.
 * The skills are organized by category.
 * @param isOpen (boolean) Whether the modal is open or not
 * @param onClose (function) Function to close the modal
 * @param language (string) The language of the modal
 * @param skills (Skill[]) The skills of the language
 * @param repositories (Repository[]) The repositories of the language
 * @returns (JSX.Element): modal component (stack of the project
 */
const LanguageModal: React.FC<ProjectModalProps> = ({
  language,
  isOpen,
  onClose,
}) => {
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
    <Modal title={language.name} isOpen={isOpen} onClose={onClose}>
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
      {Object.entries(groupedSkills).map(([category, skills], index) => (
        <div key={index} className="mt-4 text-center md:text-left">
          <HeadingThree title={category} />
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
      ))}

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
                <Button
                  variant="gradient"
                  className="w-full"
                >{`All ${language.name} Material`}</Button>
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
              <Button
                variant="ghost"
                className="w-full"
              >{`${language.name} Blogs`}</Button>
            </div>
          </Link>
        </div>
      )}
    </Modal>
  );
};

export default LanguageModal;
