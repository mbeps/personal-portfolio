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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import SkillTag from "@/components/tags/skill-tag";
import Tag from "@/components/tags/tag";
import { ROUTES } from "@/constants/routes";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import type SkillInterface from "@/database/skills/skill-interface";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import { useMediaQuery } from "@/hooks/use-media-query";
import type Database from "@/interfaces/database";
import type FilterOption from "@/interfaces/filters/filter-option";
import type CategorisedSkillsInterface from "@/interfaces/skills/categorised-skills-interface";
import { isSkillAssociatedWithMaterial } from "@/lib/material/skill-usage-helpers";
import groupSkills, {
  type GroupByOptions,
} from "@/lib/skills/group/group-skills";

interface LanguageTagWithModalProps {
  languageIdentifier: SkillDatabaseKeys;
}

/**
 * Interactive language tag used on the homepage to surface related skills via a responsive modal/drawer.
 * Pulls grouped skills from the static DB and offers shortcuts into the `/skills/[slug]` page when material exists.
 *
 * @param languageIdentifier Skill slug representing the language.
 * @returns Tag + modal/drawer experience showing grouped skills and material link.
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
    excludedCategory: SkillCategoriesEnum,
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
      SkillCategoriesEnum.ProgrammingLanguages,
    );

  const shouldOpenModal: boolean | undefined =
    language?.relatedSkills && language.relatedSkills.length > 0;

  const groupedSkills: CategorisedSkillsInterface[] = groupSkills(
    groupedBy as GroupByOptions,
    languageSkillsSlug,
    skillDatabaseMap,
    [SkillTypesEnum.Technical],
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
      <div className="w-full px-6 pt-6">
        <h2>{language.name}</h2>
      </div>

      <ScrollArea className="h-full w-full grow">
        <div className="px-6 pb-4">
          {/* Grouping Dropdown */}
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

          {/* List of skills */}
          <div className="space-y-16">
            {groupedSkills.map((categoryData, index) => (
              <div key={index} className="text-center md:text-left">
                <h3>{categoryData.skillCategoryName}</h3>
                <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
                  {categoryData.skills.map((skillKey) => (
                    <SkillTag key={skillKey} skillKey={skillKey} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Links */}
      {hasMaterial && (
        <div className="mt-auto w-full px-6 pb-4">
          <Link href={`${ROUTES.SKILLS.path}/${languageIdentifier as string}`}>
            <Button variant="gradient" className="w-full">
              {`All ${language.name} Material`}
            </Button>
          </Link>
        </div>
      )}
    </>
  );

  return (
    <>
      {isDesktop ? (
        // Desktop Dialog (md and above)
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <Tooltip>
            <TooltipTrigger
              render={
                <DialogTrigger
                  nativeButton={false}
                  render={
                    <Tag
                      onClick={
                        shouldOpenModal ? () => setIsOpen(true) : undefined
                      }
                    >
                      {language.name}
                    </Tag>
                  }
                />
              }
            />
            <TooltipContent>
              <p>{`View technologies related to ${language.name}`}</p>
            </TooltipContent>
          </Tooltip>
          <DialogContent className="flex h-full flex-col justify-start">
            <DialogTitle className="sr-only">{language.name}</DialogTitle>
            <ModalContent />
          </DialogContent>
        </Dialog>
      ) : (
        // Mobile Drawer (below md)
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <Tooltip>
            <TooltipTrigger
              render={
                <DrawerTrigger asChild>
                  <Tag
                    onClick={
                      shouldOpenModal ? () => setIsOpen(true) : undefined
                    }
                  >
                    {language.name}
                  </Tag>
                </DrawerTrigger>
              }
            />
            <TooltipContent>
              <p>{`View technologies related to ${language.name}`}</p>
            </TooltipContent>
          </Tooltip>
          <DrawerContent className="flex h-[75vh] flex-col justify-start">
            <ModalContent />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default LanguageModal;
