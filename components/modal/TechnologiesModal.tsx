"use client";

import filterCategoriesFromSkills from "@/actions/skills/filter/filterCategoriesFromSkills";
import groupSkills, {
  GroupByOptions,
} from "@/actions/skills/group/groupSkills";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/shadcn/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import useIsMounted from "@/hooks/useIsMounted";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import SkillTag from "../tags/SkillTag";
import Tag from "../tags/Tag";
import { Button } from "../shadcn/ui/button";
import { ScrollArea } from "../shadcn/ui/scroll-area";

/**
 * Expands the homepage “Technologies” tag list into a full modal/drawer so visitors can browse grouped skills without leaving the page.
 * Shares grouping logic with the skills directory and offers a CTA into `/skills`.
 *
 * @returns Responsive modal that lists technologies grouped by the chosen strategy.
 */
const TechnologiesModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMounted: boolean = useIsMounted();
  const [groupedBy, setGroupedBy] = useState("category");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isMounted) {
    return null;
  }

  function handleOpenModal(): void {
    setIsModalOpen(true);
  }

  const options: FilterOption[] = [
    { slug: "category", entryName: "Category" },
    { slug: "language", entryName: "Language" },
    { slug: "none", entryName: "None" },
  ];

  const mainSkillsHashMap: Database<SkillInterface> = {};

  (
    Object.entries(skillDatabaseMap) as [SkillDatabaseKeys, SkillInterface][]
  ).forEach(([key, skill]) => {
    // if (skill.isMainSkill) {
    mainSkillsHashMap[key] = skill;
    // }
  });

  /**
   * Ignored categories which are not displayed in the modal.
   * The programming languages are not displayed when the skills are grouped by language.
   * However, the programming languages are displayed when the skills are grouped by category.
   * This is because if the programming languages are ignored, their sub-skills will not be displayed.
   * However, when the skills are grouped by category, the programming languages are displayed which is not needed.
   */
  const ignoredCategories: SkillCategoriesEnum[] = [
    SkillCategoriesEnum.CloudComputing,
    SkillCategoriesEnum.Testing,
    ...(groupedBy !== "language"
      ? [SkillCategoriesEnum.ProgrammingLanguages]
      : []),
  ];

  /**
   * Only technologies (hard skills) are displayed.
   * Skills from programming languages are not displayed.
   */
  const skillsToDisplay: SkillDatabaseKeys[] = filterCategoriesFromSkills(
    mainSkillsHashMap,
    ignoredCategories
  );

  /**
   * Skill groups which are then displayed.
   */
  const groupedSkills: SkillsCategoryInterface[] = groupSkills(
    groupedBy as GroupByOptions,
    skillsToDisplay,
    skillDatabaseMap,
    [SkillTypesEnum.Technical, SkillTypesEnum.Soft]
  );

  const currentGroupedName: string =
    options.find((option) => option.slug === groupedBy)?.entryName ||
    "Category";

  /**
   * Shared content component used by both Dialog and Drawer
   */
  const ModalContent = () => (
    <>
      <div className="w-full pt-6 px-6">
        <h2>Technologies</h2>
      </div>

      <ScrollArea className="h-full w-full grow">
        <div className="px-6 pb-4">
          <div className="flex mt-4">
            <div className="grow mr-2 mt-2.5 text-right text-neutral-700 dark:text-neutral-300">
              Group by:
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="w-48">
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
                {options.map((option) => (
                  <DropdownMenuItem
                    key={option.slug}
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
          <div className="mt-4 text-center md:text-left space-y-16">
            {groupedSkills.map((categoryData, index) => (
              <div key={index}>
                <h3>{categoryData.skillCategoryName}</h3>
                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                  {categoryData.skills.map((skillSlug) => (
                    <SkillTag key={skillSlug} skillKey={skillSlug} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="py-12" />

          {/* All Material Button */}
          <div className="flex flex-wrap flex-col text-center md:text-left justify-start">
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
    </>
  );

  const TriggerButton = () => <Tag onClick={handleOpenModal}>...</Tag>;

  return (
    <>
      {isDesktop ? (
        // Desktop Dialog (md and above)
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <TriggerButton />
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="sr-only">Technologies</DialogTitle>
            <ModalContent />
          </DialogContent>
        </Dialog>
      ) : (
        // Mobile Drawer (below md)
        <Drawer open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DrawerTrigger asChild>
            <TriggerButton />
          </DrawerTrigger>
          <DrawerContent className="flex flex-col justify-start h-[75vh]">
            <ModalContent />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default TechnologiesModal;
