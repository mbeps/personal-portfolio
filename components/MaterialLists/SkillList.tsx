"use client";

import generateUrl from "@/actions/generateUrl";
import countMaterialsAttributedToSkill from "@/actions/material/countMaterialsAttributedToSkill";
import groupSkills, {
  GroupByOptions,
} from "@/actions/skills/group/groupSkills";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import { Button } from "@/components/shadcn/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/shadcn/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import { SKILL_PAGE } from "@/constants/pages";
import materialDatabase from "@/database/material";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import FilterOption from "@/interfaces/filters/FilterOption";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface SkillListProps {
  skills: SkillKeysEnum[];
}

/**
 * Component displaying all the skills that I have learned and worked with.
 * These skills can be grouped into categories and certain type skills can be ignored.
 * Skills can also be filtered by the number of materials attributed to them.
 *
 * @returns List of skills grouped by category and controls to filter them
 */
const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const [isOpen, setOpen] = useState(false);

  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const basePath: string = SKILL_PAGE.path;
  const router: AppRouterInstance = useRouter();

  const gap = "w-4 h-4 mr-2";

  const groupParamName = "group";
  const hardSkillParamName = "hard";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";
  const noMaterialParamName = "no-material";

  const selectedGroup: string = searchParams.get(groupParamName) || "category";
  const includeHardSkills: boolean =
    searchParams.get(hardSkillParamName) === "true";
  const includeGeneralSkills: boolean =
    searchParams.get(generalSkillParamName) === "true";
  const includeSoftSkills: boolean =
    searchParams.get(softSkillParamName) === "true";
  const includeNoMaterial: boolean =
    searchParams.get(noMaterialParamName) === "true"; // false by default

  //^ LOGIC FOR DISPLAYING FILTERED SKILLS
  const options: FilterOption[] = [
    { slug: "category", entryName: "Category" },
    { slug: "skill-type", entryName: "Skill Type" },
    { slug: "language", entryName: "Language" },
    { slug: "none", entryName: "None" },
  ];

  const includeSkillTypes: SkillTypesEnum[] = [];

  if (includeHardSkills) includeSkillTypes.push(SkillTypesEnum.Technology);
  if (includeGeneralSkills) includeSkillTypes.push(SkillTypesEnum.Technical);
  if (includeSoftSkills) includeSkillTypes.push(SkillTypesEnum.Soft);

  // Group skills with the inclusion list
  const groupedSkills: SkillsCategoryInterface[] = groupSkills(
    selectedGroup as GroupByOptions,
    skills,
    skillDatabase,
    includeSkillTypes
  );

  //^ LOGIC FOR HANDLING FILTERS
  function handleSelect(value: string) {
    // Construct the array of FilterOption objects including all current search parameters
    const params: FilterOption[] = [
      { entryName: groupParamName, slug: value }, // Updating the group
      // Include the current state of all filters
      {
        entryName: hardSkillParamName,
        slug: includeHardSkills ? "true" : "false",
      },
      {
        entryName: generalSkillParamName,
        slug: includeGeneralSkills ? "true" : "false",
      },
      {
        entryName: softSkillParamName,
        slug: includeSoftSkills ? "true" : "false",
      },
      {
        entryName: noMaterialParamName,
        slug: includeNoMaterial ? "true" : "false",
      },
    ];

    // Generate the URL with all parameters and navigate
    router.push(generateUrl(params, basePath));
  }

  interface FilterParams {
    entryName: string;
    urlParamName: string;
    value: string;
    selected: boolean;
  }

  const filterParams: FilterParams[] = [
    {
      entryName: "Hard Skills",
      urlParamName: hardSkillParamName,
      value: includeHardSkills ? "false" : "true",
      selected: includeHardSkills,
    },
    {
      entryName: "General Skills",
      urlParamName: generalSkillParamName,
      value: includeGeneralSkills ? "false" : "true",
      selected: includeGeneralSkills,
    },
    {
      entryName: "Soft Skills",
      urlParamName: softSkillParamName,
      value: includeSoftSkills ? "false" : "true",
      selected: includeSoftSkills,
    },
    {
      entryName: "No Material",
      urlParamName: noMaterialParamName,
      value: includeNoMaterial ? "false" : "true",
      selected: includeNoMaterial,
    },
  ];

  // currently selected group from the dropdown
  const currentGroupName =
    options.find((option) => option.slug === selectedGroup)?.entryName ||
    "Category";

  return (
    <div>
      <div className="flex mt-4 justify-end w-full">
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-1/2">
          {/* Group By */}
          <div className="flex flex-row gap-3 text-right text-neutral-700 dark:text-neutral-300 w-full">
            <p className="mt-3 w-auto md:w-2/5 whitespace-nowrap">Group by:</p>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full">
                <Button variant="default" className="w-full">
                  <div className="flex items-start justify-between space-x-2 w-full">
                    <span>{currentGroupName}</span>
                    <BsChevronDown
                      fontSize={16}
                      className="text-neutral-700 dark:text-neutral-200 mt-1"
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 md:w-48 ">
                {options.map((option, index) => (
                  <DropdownMenuItem
                    key={index}
                    className={`
                  ${option.slug === selectedGroup ? "font-bold" : ""}`}
                    onSelect={() => handleSelect(option.slug)}
                  >
                    {option.entryName}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Filter */}
          <Popover open={isOpen} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                role="combobox"
                onClick={() => setOpen(!isOpen)}
                className="
                  w-full 
                  justify-between
                  "
              >
                <span>Include Skills</span>
                <BsChevronDown
                  fontSize={16}
                  className="text-neutral-700 dark:text-neutral-200 mt-1"
                />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[24rem] md:w-[20rem] p-0">
              <Command className="w-full border-1 border-neutral-200 dark:border-neutral-950">
                <CommandInput placeholder="Search Filter..." />
                <CommandEmpty>No Filter Found.</CommandEmpty>

                <CommandGroup className="w-full">
                  {filterParams.map((filter, i) => (
                    <Link
                      key={i}
                      href={generateUrl(
                        [
                          // Include the current state of all filters
                          { entryName: groupParamName, slug: selectedGroup },
                          {
                            entryName: hardSkillParamName,
                            slug: includeHardSkills ? "true" : "false",
                          },
                          {
                            entryName: generalSkillParamName,
                            slug: includeGeneralSkills ? "true" : "false",
                          },
                          {
                            entryName: softSkillParamName,
                            slug: includeSoftSkills ? "true" : "false",
                          },
                          {
                            entryName: noMaterialParamName,
                            slug: includeNoMaterial ? "true" : "false",
                          },
                          // Toggle current filter
                          {
                            entryName: filter.urlParamName,
                            slug: filter.selected ? "false" : "true",
                          },
                        ],
                        basePath
                      )}
                      className="w-full"
                    >
                      <CommandItem
                        key={filter.urlParamName}
                        value={filter.urlParamName}
                        className="w-full"
                      >
                        {!filter.selected ? (
                          <Check className={cn(gap, "text-red-500")} />
                        ) : (
                          <div className={gap}></div>
                        )}
                        {filter.entryName}
                      </CommandItem>
                    </Link>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* List of Skills */}
      <div className="mt-4 text-center md:text-left">
        {groupedSkills.length > 0 ? (
          groupedSkills.map((categoryData) => (
            <div key={categoryData.skillCategoryName}>
              <HeadingThree
                title={
                  categoryData.skillCategoryName[0].toUpperCase() +
                  categoryData.skillCategoryName.slice(1)
                }
              />
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {Object.entries(categoryData.skills).map(
                  ([skillKey, skill], index) => (
                    <SkillTag
                      key={skillKey} // Use skillKey as the key for better React key usage
                      skillKey={skill}
                      hide={
                        !(
                          countMaterialsAttributedToSkill(
                            skillKey as SkillKeysEnum,
                            skillDatabase,
                            materialDatabase
                          ) >= 5
                        ) && includeNoMaterial
                      }
                    />
                  )
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center min-w-full mt-8">
            <h2 className="text-2xl font-bold">No Matching Skills</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillList;
