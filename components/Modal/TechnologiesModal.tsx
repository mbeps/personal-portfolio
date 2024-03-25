"use client";

import filterCategoriesFromSkills from "@/actions/skills/filter/filterCategoriesFromSkills";
import groupSkills, { GroupByOptions } from "@/actions/skills/groupSkills";
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
import skillDatabase, { skillKeys } from "@/database/skills";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import useIsMounted from "@/hooks/useIsMounted";
import FilterOption from "@/interfaces/filters/FilterOption";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import SkillTag from "../Tags/SkillTag";
import Tag from "../Tags/Tag";
import HeadingThree from "../Text/HeadingThree";
import HeadingTwo from "../Text/HeadingTwo";
import { Button } from "../shadcn/ui/button";
import { ScrollArea } from "../shadcn/ui/scroll-area";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

/**
 * Displays a modal for the skills.
 * The modal displays the skills organized by category or by language.
 * This modal displays skills from languages and technologies.
 *
 * @param languages (Language[]) The languages of the modal
 * @param isOpen (boolean) Whether the modal is open or not
 * @param onClose (function) Function to close the modal
 * @returns (JSX.Element): modal component (stack of the project
 */
const TechnologiesModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMounted: boolean = useIsMounted();
  const [groupedBy, setGroupedBy] = useState("category");

  if (!isMounted) {
    return null;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const options: FilterOption[] = [
    { slug: "category", entryName: "Category" },
    { slug: "language", entryName: "Language" },
    { slug: "none", entryName: "None" },
  ];

  const mainSkillsHashMap: Database<SkillInterface> = {};

  Object.entries(skillDatabase).forEach(([key, skill]) => {
    if (skill.isMainSkill) {
      mainSkillsHashMap[key] = skill;
    }
  });

  const ignoredCategories: SkillCategoriesEnum[] = [
    SkillCategoriesEnum.ProjectManagers,
    SkillCategoriesEnum.ObjectRelationalMappers,
    SkillCategoriesEnum.VersionControl,
    SkillCategoriesEnum.WebSockets,
    SkillCategoriesEnum.CloudComputing,
    SkillCategoriesEnum.Automation,
    ...(groupedBy !== "language"
      ? [SkillCategoriesEnum.ProgrammingLanguages]
      : []),
  ];

  /**
   * Only technologies (hard skills) are displayed.
   * Skills from programming languages are not displayed.
   */
  const skillsToDisplay: SkillSlugEnum[] = filterCategoriesFromSkills(
    mainSkillsHashMap,
    ignoredCategories
  );

  /**
   * Skill groups which are then displayed.
   */
  const groupedSkills: SkillsCategoryInterface[] = groupSkills(
    groupedBy as GroupByOptions,
    skillsToDisplay,
    skillDatabase,
    [SkillTypesEnum.General, SkillTypesEnum.Soft]
  );

  const currentGroupedName: string =
    options.find((option) => option.slug === groupedBy)?.entryName ||
    "Category";

  return (
    <Dialog>
      <DialogTrigger>
        <Tag onClick={handleOpenModal}>...</Tag>
      </DialogTrigger>
      <DialogContent>
        <div className="h-full w-full pt-6">
          <HeadingTwo title="Technologies" />
        </div>

        <ScrollArea className="h-full w-full">
          <div className="px-6 pb-4">
            <div className="flex mt-4">
              {/* Drop Down */}
              <div
                className="
                  flex-grow mr-2 mt-2.5
                  text-right text-neutral-700 dark:text-neutral-300
              "
              >
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
                <DropdownMenuContent className="w-48 ">
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

            {/* List of Skills */}
            {groupedSkills.map((categoryData, index) => (
              <div key={index} className="mt-4 text-center md:text-left">
                <HeadingThree title={categoryData.skillCategoryName} />
                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                  {categoryData.skills.map((skillSlug) => (
                    <SkillTag key={skillSlug} skillKey={skillSlug} />
                  ))}
                </div>
              </div>
            ))}

            {/* separator */}
            <div className="w-full h-px bg-neutral-200 dark:bg-neutral-700 my-8" />

            {/* All Material Button */}
            <div
              className="
                flex flex-wrap flex-col
                text-center md:text-left
                justify-start z-10 -mt-8"
            >
              <Link href={`/skills`}>
                <div className="w-full">
                  <Button variant="gradient" className="w-full">
                    {`All Technologies & Skills`}
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TechnologiesModal;
