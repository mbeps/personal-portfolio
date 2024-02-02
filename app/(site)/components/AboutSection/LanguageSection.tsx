"use client";

import isSkillAssociatedWithMaterial from "@/actions/material/isSkillAssociatedWithMaterial";
import filterSkillsByType from "@/actions/skills/filterSkillsByType";
import getAssociatedSkills from "@/actions/skills/getAssociatedSkills";
import groupSkills from "@/actions/skills/groupSkills";
import SkillTag from "@/components/Tags/SkillTag";
import Tag from "@/components/Tags/Tag";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import blogs from "@/database/blogs";
import allCertificates from "@/database/certificates";
import allProjects from "@/database/projects";
import { languages } from "@/database/skills/languages";
import allSkills from "@/database/skills/skills";
import useIsMounted from "@/hooks/useIsMounted";
import FilterOption from "@/interfaces/filters/FilterOption";
import BlogInterface from "@/interfaces/material/BlogInterface";
import CertificateInterface from "@/interfaces/material/CertificateInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

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
  language: SkillInterface;
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

  const languageSkills =
    getAssociatedSkills(
      filterSkillsByType(allSkills, "hard"),
      language,
      "hard",
    ) || [];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const shouldOpenModal = languageSkills && languageSkills.length > 0;

  const [groupedBy, setGroupedBy] = useState("category");
  // Adjusted filtering based on the merged skills field
  const filteredSkills = (languageSkills || []).filter(
    (skill) => skill.isMainSkill,
  );
  const groupedSkills = groupSkills(groupedBy, languageSkills || []);

  const projects: ProjectInterface[] = allProjects;
  const certificates: CertificateInterface[] = allCertificates;
  const allBlogs: BlogInterface[] = blogs;
  const allMaterial: MaterialInterface[] = [...projects, ...certificates, ...allBlogs];

  const hasMaterial = isSkillAssociatedWithMaterial(language, allMaterial);

  const options: FilterOption[] = [
    { slug: "category", entryName: "Category" },
    { slug: "none", entryName: "None" },
  ];

  const currentGroupedName =
    options.find((option) => option.slug === groupedBy)?.entryName ||
    "Category";

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Tooltip>
            <TooltipTrigger>
              <Tag onClick={shouldOpenModal ? handleOpenModal : undefined}>
                {language.name}
              </Tag>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`View technologies related to ${language.name}`}</p>
            </TooltipContent>
          </Tooltip>
        </DialogTrigger>
        <DialogContent>
          <div className="h-full w-full pt-6">
            <HeadingTwo title={language.name} />
          </div>
          <ScrollArea className="h-full w-full">
            <div className="px-6 pb-4">
              {/* Grouping Dropdown */}
              <div className="flex mt-4">
                <div className="flex-grow mr-2 mt-2.5 text-right text-neutral-700 dark:text-neutral-300">
                  Group by:
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-48">
                    <Button variant="default" className="w-full">
                      <div className="flex items-start justify-between space-x-2 w-full">
                        <span>{currentGroupedName}</span>
                        <BsChevronDown
                          fontSize={16}
                          className="text-neutral-700 dark:text-neutral-200 mt-1"
                        />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    {options.map((option, index) => (
                      <DropdownMenuItem
                        key={index}
                        className={`${option.slug === groupedBy ? "font-bold" : ""
                          }`}
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
                {groupedSkills.map((categoryData, index) => (
                  <div key={index} className="text-center md:text-left">
                    <HeadingThree title={categoryData.skillCategoryName} />
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                      {categoryData.skills.map((skill, skillIndex) => (
                        <SkillTag key={skillIndex} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Links */}
              {hasMaterial && (
                <>
                  <div className="text-center md:text-left">
                    <HeadingThree title="Material" />
                  </div>
                  <div
                    className="
                      flex flex-wrap flex-col
                      text-center md:text-left
                      justify-start z-10 space-y-2"
                  >
                    <Link href={`/skills/${language.slug}`}>
                      <div className="w-full">
                        <Button variant="gradient" className="w-full">
                          {`All ${language.name} Material`}
                        </Button>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};
