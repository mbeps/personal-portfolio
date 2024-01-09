"use client";

import generateUrl from "@/actions/generateUrl";
import groupSkills from "@/actions/skills/groupSkills";
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
import { cn } from "@/lib/utils";
import FilterOption from "@/types/filters/FilterOption";
import Skill from "@/types/skills";
import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const [isOpen, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const basePath = "/skills";
  const router = useRouter();

  const gap = "w-4 h-4 mr-2";

  const groupParamName = "group";
  const hardSkillParamName = "hard";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";
  const noMaterialParamName = "no-material";

  const selectedGroup = searchParams.get(groupParamName) || "category";
  const excludeHardSkills = searchParams.get(hardSkillParamName) === "true";
  const excludeGeneralSkills =
    searchParams.get(generalSkillParamName) === "true";
  const excludeSoftSkills = searchParams.get(softSkillParamName) === "true";
  const excludeNoMaterial = searchParams.get(noMaterialParamName) === "true";

  const options = [
    { slug: "category", entryName: "Category" },
    { slug: "skill-type", entryName: "Skill Type" },
    { slug: "language", entryName: "Language" },
    { slug: "none", entryName: "None" },
  ];

  const excludedSkillTypes: ("hard" | "general" | "soft")[] = [];

  if (excludeHardSkills) excludedSkillTypes.push("hard");
  if (excludeGeneralSkills) excludedSkillTypes.push("general");
  if (excludeSoftSkills) excludedSkillTypes.push("soft");

  // Group skills with the exclusion list
  const groupedSkills = groupSkills(selectedGroup, skills, excludedSkillTypes);

  function handleSelect(value: string) {
    // Construct the array of FilterOption objects including all current search parameters
    const params: FilterOption[] = [
      { entryName: groupParamName, slug: value }, // Updating the group
      // Include the current state of all filters
      {
        entryName: hardSkillParamName,
        slug: excludeHardSkills ? "true" : "false",
      },
      {
        entryName: generalSkillParamName,
        slug: excludeGeneralSkills ? "true" : "false",
      },
      {
        entryName: softSkillParamName,
        slug: excludeSoftSkills ? "true" : "false",
      },
      {
        entryName: noMaterialParamName,
        slug: excludeNoMaterial ? "true" : "false",
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
      value: excludeHardSkills ? "false" : "true",
      selected: excludeHardSkills,
    },
    {
      entryName: "General Skills",
      urlParamName: generalSkillParamName,
      value: excludeGeneralSkills ? "false" : "true",
      selected: excludeGeneralSkills,
    },
    {
      entryName: "Soft Skills",
      urlParamName: softSkillParamName,
      value: excludeSoftSkills ? "false" : "true",
      selected: excludeSoftSkills,
    },
    {
      entryName: "No Material",
      urlParamName: noMaterialParamName,
      value: excludeNoMaterial ? "false" : "true",
      selected: excludeNoMaterial,
    },
  ];

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
                <span>Exclude Skills</span>
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
                            slug: excludeHardSkills ? "true" : "false",
                          },
                          {
                            entryName: generalSkillParamName,
                            slug: excludeGeneralSkills ? "true" : "false",
                          },
                          {
                            entryName: softSkillParamName,
                            slug: excludeSoftSkills ? "true" : "false",
                          },
                          {
                            entryName: noMaterialParamName,
                            slug: excludeNoMaterial ? "true" : "false",
                          },
                          // Toggle current filter
                          {
                            entryName: filter.urlParamName,
                            slug: filter.selected ? "false" : "true",
                          },
                        ],
                        basePath,
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
        {Object.keys(groupedSkills).length > 0 ? (
          Object.keys(groupedSkills).map((group) => (
            <div key={group}>
              <HeadingThree title={group[0].toUpperCase() + group.slice(1)} />
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {groupedSkills[group].map((skill, index) => (
                  <SkillTag
                    key={index}
                    skill={skill}
                    hide={excludeNoMaterial}
                  />
                ))}
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
