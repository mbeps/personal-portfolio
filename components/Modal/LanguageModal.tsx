"use client";

import isSkillAssociatedWithMaterial from "@/actions/material/isSkillAssociatedWithMaterial";
import groupSkills, {
  GroupByOptions,
} from "@/actions/skills/group/groupSkills";
import Tag from "@/components/Tags/Tag";
import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import SkillTag from "../Tags/SkillTag";

interface LanguageTagWithModalProps {
  languageIdentifier: SkillDatabaseKeys;
}

/**
 * Displays a tag for each language.
 * Uses Drawer on mobile and Dialog on desktop for responsive behaviour.
 * If the language has skills or repositories, a modal is displayed when the tag is clicked.
 * The modal displays the skills and repositories for the language.
 * If the language does not have any skills or repositories, the modal cannot be opened.
 *
 * @param languageIdentifier Identifier of the language
 * @returns Language tag with responsive modal/drawer
 */
const LanguageModal: React.FC<LanguageTagWithModalProps> = ({
  languageIdentifier,
}) => {
  const language: SkillInterface = skillDatabaseMap[languageIdentifier];
  const [isOpen, setIsOpen] = useState(false);
  const [groupedBy, setGroupedBy] = useState("category");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  /**
   * Utility function to filter for main skills excluding a specific category.
   *
   * @param skillSlugs List of skill slugs to filter
   * @param skillsHashmap Hashmap of skills
   * @param excludedCategory Category to exclude
   * @returns Filtered list of skill slugs
   */
  function filterMainSkillsExcludingCategory(
    skillSlugs: SkillDatabaseKeys[],
    skillsHashmap: Database<SkillInterface>,
    excludedCategory: SkillCategoriesEnum
  ): SkillDatabaseKeys[] {
    return skillSlugs.filter((slug) => {
      const skill: SkillInterface = skillsHashmap[slug];
      return skill.category !== excludedCategory;
    });
  }

  const languageSkillsSlug: SkillDatabaseKeys[] =
    filterMainSkillsExcludingCategory(
      language.relatedSkills || [],
      skillDatabaseMap,
      SkillCategoriesEnum.ProgrammingLanguages
    );

  const shouldOpenModal: boolean | undefined =
    language?.relatedSkills && language.relatedSkills.length > 0;

  const groupedSkills: SkillsCategoryInterface[] = groupSkills(
    groupedBy as GroupByOptions,
    languageSkillsSlug,
    skillDatabaseMap,
    [SkillTypesEnum.Technical, SkillTypesEnum.Soft]
  );

  const hasMaterial: boolean =
    isSkillAssociatedWithMaterial(languageIdentifier);

  const options: FilterOption[] = [
    { slug: "category", entryName: "Category" },
    { slug: "none", entryName: "None" },
  ];

  const currentGroupedName: string =
    options.find((option) => option.slug === groupedBy)?.entryName ||
    "Category";

  /**
   * Shared content component used by both Dialog and Drawer
   */
  const ModalContent = () => (
    <>
      <div className="w-full pt-6 px-6">
        <h2>{language.name}</h2>
      </div>

      <ScrollArea className="h-full w-full grow">
        <div className="px-6 pb-4">
          {/* Grouping Dropdown */}
          <div className="flex mt-4">
            <div className="grow mr-2 mt-2.5 text-right text-neutral-700 dark:text-neutral-300">
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
          <div className="space-y-16">
            {groupedSkills.map((categoryData, index) => (
              <div key={index} className="text-center md:text-left">
                <h3>{categoryData.skillCategoryName}</h3>
                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                  {categoryData.skills.map((skillKey, index) => (
                    <SkillTag key={index} skillKey={skillKey} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Links */}
      {hasMaterial && (
        <div className="w-full mt-auto px-6 pb-4">
          <Link href={`/skills/${languageIdentifier as string}`}>
            <Button variant="gradient" className="w-full">
              {`All ${language.name} Material`}
            </Button>
          </Link>
        </div>
      )}
    </>
  );

  const TriggerButton = () => (
    <Tag onClick={shouldOpenModal ? () => setIsOpen(true) : undefined}>
      {language.name}
    </Tag>
  );

  return (
    <>
      {isDesktop ? (
        // Desktop Dialog (md and above)
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <TriggerButton />
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`View technologies related to ${language.name}`}</p>
            </TooltipContent>
          </Tooltip>
          <DialogContent className="flex flex-col justify-start h-full">
            <ModalContent />
          </DialogContent>
        </Dialog>
      ) : (
        // Mobile Drawer (below md)
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DrawerTrigger asChild>
                <TriggerButton />
              </DrawerTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`View technologies related to ${language.name}`}</p>
            </TooltipContent>
          </Tooltip>
          <DrawerContent className="flex flex-col justify-start h-[75vh]">
            <ModalContent />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default LanguageModal;
