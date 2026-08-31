"use client";

import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "@/components/shadcn/ui/button";
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
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";
import SkillTag from "@/components/tags/SkillTag";
import Tag from "@/components/tags/Tag";
import { ROUTES } from "@/constants/routes";
import type SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import type SkillInterface from "@/database/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import useIsMounted from "@/hooks/useIsMounted";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type Database from "@/interfaces/Database";
import type FilterOption from "@/interfaces/filters/FilterOption";
import type CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";
import filterCategoriesFromSkills from "@/lib/skills/filter/filterCategoriesFromSkills";
import groupSkills, {
  type GroupByOptions,
} from "@/lib/skills/group/groupSkills";

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
    ignoredCategories,
  );

  /**
   * Skill groups which are then displayed.
   */
  const groupedSkills: CategorisedSkillsInterface[] = groupSkills(
    groupedBy as GroupByOptions,
    skillsToDisplay,
    skillDatabaseMap,
    [SkillTypesEnum.Technical],
  );

  const currentGroupedName: string =
    options.find((option) => option.slug === groupedBy)?.entryName ||
    "Category";

  /**
   * Shared content component used by both Dialog and Drawer
   */
  const ModalContent = () => (
    <>
      <div className="w-full px-6 pt-6">
        <h2>Technologies</h2>
      </div>

      <ScrollArea className="h-full w-full grow">
        <div className="px-6 pb-4">
          <div className="mt-4 flex">
            <div className="mt-2.5 mr-2 grow text-right text-neutral-700 dark:text-neutral-300">
              Group by:
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="default" className="w-48">
                    <div className="flex w-full items-start justify-between space-x-2">
                      <span>{currentGroupedName}</span>
                      <BsChevronDown
                        fontSize={16}
                        className="mt-1 text-neutral-700 dark:text-neutral-200"
                      />
                    </div>
                  </Button>
                }
              />
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
          <div className="mt-4 space-y-16 text-center md:text-left">
            {groupedSkills.map((categoryData, index) => (
              <div key={index}>
                <h3>{categoryData.skillCategoryName}</h3>
                <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
                  {categoryData.skills.map((skillSlug) => (
                    <SkillTag key={skillSlug} skillKey={skillSlug} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="py-12" />

          {/* All Material Button */}
          <div className="flex flex-col flex-wrap justify-start text-center md:text-left">
            <Link href={ROUTES.SKILLS.path}>
              <div className="w-full">
                <Button variant="gradient" className="w-full">
                  {"All Technologies & Skills"}
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </ScrollArea>
    </>
  );

  return (
    <>
      {isDesktop ? (
        // Desktop Dialog (md and above)
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger
            nativeButton={false}
            render={<Tag onClick={handleOpenModal}>...</Tag>}
          />
          <DialogContent>
            <DialogTitle className="sr-only">Technologies</DialogTitle>
            <ModalContent />
          </DialogContent>
        </Dialog>
      ) : (
        // Mobile Drawer (below md)
        <Drawer open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DrawerTrigger asChild>
            <Tag onClick={handleOpenModal}>...</Tag>
          </DrawerTrigger>
          <DrawerContent className="flex h-[75vh] flex-col justify-start">
            <ModalContent />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default TechnologiesModal;
