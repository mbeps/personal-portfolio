"use client";

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
import { languages } from "@/database/skills/languages";
import { technologies } from "@/database/skills/skills";
import FilterOption from "@/types/filters/FilterOption";
import Skill from "@/types/skills";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import SkillTag from "../Tags/SkillTag";
import Tag from "../Tags/Tag";
import HeadingThree from "../Text/HeadingThree";
import HeadingTwo from "../Text/HeadingTwo";
import { Button } from "../shadcn/ui/button";
import groupSkills from "@/actions/skills/groupSkills";
import useIsMounted from "@/hooks/useIsMounted";

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
const SkillsModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMounted = useIsMounted();
  const [groupedBy, setGroupedBy] = useState("category");

  if (!isMounted) {
    return null;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const displayedSkills: Skill[] = [...languages, ...technologies].filter(
    (skill) => skill.isMainSkill,
  );

  const options: FilterOption[] = [
    { slug: "category", entryName: "Category" },
    { slug: "language", entryName: "Language" },
    { slug: "none", entryName: "None" },
  ];

  const groupedSkills = groupSkills(groupedBy, displayedSkills, [
    "general",
    "soft",
  ]);

  return (
    <Dialog>
      <DialogTrigger>
        <Tag onClick={handleOpenModal}>...</Tag>
      </DialogTrigger>
      <DialogContent>
        <HeadingTwo title="Technologies" />
        <div className="flex mt-4">
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

        {Object.entries(groupedSkills).map(([group, skills], index) => (
          <div key={index} className="mt-4 text-center md:text-left">
            <HeadingThree title={group} />
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}

        {/* separator */}
        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-700 my-8" />

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
      </DialogContent>
    </Dialog>
  );
};

export default SkillsModal;
