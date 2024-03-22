"use client";

import isSkillAssociatedWithMaterial from "@/actions/material/isSkillAssociatedWithMaterial";
import filterSkillsByType from "@/actions/skills/filterSkillsByType";
import getAssociatedSkillsHashmap from "@/actions/skills/getAssociatedSkills";
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
import materialDatabase from "@/database/material";
import skillsHashmap from "@/database/skills/skills";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import FilterOption from "@/interfaces/filters/FilterOption";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface LanguageTagWithModalProps {
  languageIdentifier: SkillSlugEnum;
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
const LanguageModal: React.FC<LanguageTagWithModalProps> = ({
  languageIdentifier,
}) => {
  const language: SkillInterface = skillsHashmap[languageIdentifier];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const languageSkills: {
    [key: string]: SkillInterface;
  } = getAssociatedSkillsHashmap(
    skillsHashmap,
    languageIdentifier,
    SkillTypesEnum.Hard
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const shouldOpenModal =
    language.relatedSkills && language.relatedSkills.length > 0;

  const [groupedBy, setGroupedBy] = useState("category");

  const groupedSkills = groupSkills(groupedBy, languageSkills || []);

  const hasMaterial = isSkillAssociatedWithMaterial(language, materialDatabase);

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
          <div className="w-full pt-6">
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
                        className={`${
                          option.slug === groupedBy ? "font-bold" : ""
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
                      {Object.entries(categoryData.skills).map(
                        ([skillKey, skill], index) => (
                          <SkillTag key={skillKey} skill={skill} />
                        )
                      )}
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
                    <Link href={`/skills/${languageIdentifier as string}`}>
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

export default LanguageModal;
