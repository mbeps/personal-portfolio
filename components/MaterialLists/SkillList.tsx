"use client";

import generateUrl from "@/actions/generateUrl";
import groupSkills, {
  GroupByOptions,
} from "@/actions/skills/group/groupSkills";
import SkillTag from "@/components/Tags/SkillTag";
import { Button } from "@/components/shadcn/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { SKILL_PAGE } from "@/constants/pages";
import materialDatabaseMap from "@/database/Materials/MaterialDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
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
import skillHasMaterial from "@/actions/material/skillHasMaterial";
import SearchInput from "../Inputs/SearchInput";
import useFuseSkillSearch from "@/hooks/useFuseSearch/useFuseSkillSearch";
import { MdOutlineClear, MdOutlineManageSearch } from "react-icons/md";

interface SkillListProps {
  skills: SkillDatabaseKeys[];
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
  const searchParamName = "search";

  const searchTerm: string = searchParams.get(searchParamName) || "";

  const searchOptions: string[] = [
    "name",
    "category",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
  ];

  // Use the search hook to filter skills based on the search term
  const filteredSkillIds: string[] = useFuseSkillSearch(
    skillDatabaseMap,
    searchTerm,
    searchOptions
  );

  // Filter the original skills array to include only those skills that match the search results
  const filteredSkills = skills.filter((skillKey) =>
    filteredSkillIds.includes(skillKey)
  );

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

  // Group skills with the inclusion list, using the filtered skills
  const groupedSkills: SkillsCategoryInterface[] = groupSkills(
    selectedGroup as GroupByOptions,
    filteredSkills,
    skillDatabaseMap,
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
      entryName: "With No Material",
      urlParamName: noMaterialParamName,
      value: includeNoMaterial ? "false" : "true",
      selected: includeNoMaterial,
    },
  ];

  // currently selected group from the dropdown
  const currentGroupName: string =
    options.find((option) => option.slug === selectedGroup)?.entryName ||
    "Category";

  const isFilterApplied: boolean =
    includeHardSkills ||
    includeGeneralSkills ||
    includeSoftSkills ||
    includeNoMaterial;
  const isSearchApplied: boolean = searchTerm !== "";
  const isCategoryApplied: boolean = selectedGroup !== "category";

  const isAnyFilterApplied: boolean =
    isFilterApplied || isSearchApplied || isCategoryApplied;

  return (
    <div>
      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center space-x-3">
              <MdOutlineManageSearch
                size={28}
                className="text-neutral-600 dark:text-neutral-400"
              />
              <p
                className="
                  text-lg 
                  text-neutral-600 dark:text-neutral-400
                  font-semibold
                  "
              >
                {`Search & Filter Skills`}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex mt-4 justify-end w-full">
              <div className="flex flex-col md:flex-row w-full md:space-x-4 space-y-3 md:space-y-0">
                {/* Search Component */}
                <div className="w-full md:w-2/5">
                  <SearchInput
                    searchTerm={searchTerm}
                    updateSearchTerm={(newTerm) => {
                      const params = new URLSearchParams(
                        searchParams.toString()
                      );
                      params.set(searchParamName, newTerm);
                      router.push(`${basePath}?${params.toString()}`);
                    }}
                    placeholder={`Search for skills...`}
                  />
                </div>

                {/* Dropdowns Container */}
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-3/5 items-center">
                  {/* Group By */}
                  <div className="flex flex-row gap-3 text-right text-neutral-700 dark:text-neutral-300 w-full items-center">
                    <p className="whitespace-nowrap">Group by:</p>
                    <div className="grow">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="w-full">
                          <Button variant="default" className="w-full">
                            <div className="flex items-center justify-between w-full">
                              <span className="text-left">
                                {currentGroupName}
                              </span>
                              <BsChevronDown
                                fontSize={16}
                                className="text-neutral-700 dark:text-neutral-200 mt-1"
                              />
                            </div>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-80 md:w-48">
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
                  </div>

                  <div className="flex flex-row w-full space-x-3">
                    {/* Filter */}
                    <div className="w-full">
                      <Popover open={isOpen} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="default"
                            role="combobox"
                            onClick={() => setOpen(!isOpen)}
                            className="w-full justify-between"
                          >
                            <span>Include Skills</span>
                            <BsChevronDown
                              fontSize={16}
                              className="text-neutral-700 dark:text-neutral-200 mt-1"
                            />
                          </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-[24rem] md:w-[20rem] p-0">
                          <Command className="w-full border border-neutral-200 dark:border-neutral-950">
                            <CommandInput placeholder="Search Filter..." />
                            <CommandEmpty>No Filter Found.</CommandEmpty>

                            <CommandGroup className="w-full">
                              {filterParams.map((filter, i) => (
                                <Link
                                  key={i}
                                  href={generateUrl(
                                    [
                                      // Include the current state of all filters
                                      {
                                        entryName: groupParamName,
                                        slug: selectedGroup,
                                      },
                                      {
                                        entryName: hardSkillParamName,
                                        slug: includeHardSkills
                                          ? "true"
                                          : "false",
                                      },
                                      {
                                        entryName: generalSkillParamName,
                                        slug: includeGeneralSkills
                                          ? "true"
                                          : "false",
                                      },
                                      {
                                        entryName: softSkillParamName,
                                        slug: includeSoftSkills
                                          ? "true"
                                          : "false",
                                      },
                                      {
                                        entryName: noMaterialParamName,
                                        slug: includeNoMaterial
                                          ? "true"
                                          : "false",
                                      },
                                      // Toggle current filter
                                      {
                                        entryName: filter.urlParamName,
                                        slug: filter.selected
                                          ? "false"
                                          : "true",
                                      },
                                    ],
                                    basePath
                                  )}
                                  className="w-full"
                                >
                                  <CommandList>
                                    <CommandItem
                                      key={filter.urlParamName}
                                      value={filter.urlParamName}
                                      className="w-full"
                                    >
                                      {!filter.selected ? (
                                        <Check
                                          className={cn(gap, "text-red-500")}
                                        />
                                      ) : (
                                        <div className={gap}></div>
                                      )}
                                      {filter.entryName}
                                    </CommandItem>
                                  </CommandList>
                                </Link>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Clear Button */}
                    <Link href={SKILL_PAGE.path} className="w-full">
                      <Button
                        variant="default"
                        disabled={!isAnyFilterApplied}
                        className="w-full flex justify-center"
                      >
                        <MdOutlineClear size={22} className="mr-2" />
                        <p className="mt-0.5">Clear</p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* List of Skills */}
      <div className="mt-4 text-center md:text-left space-y-20">
        {groupedSkills.length > 0 ? (
          groupedSkills.map((categoryData) => (
            <div key={categoryData.skillCategoryName}>
              <h3>
                {categoryData.skillCategoryName[0].toUpperCase() +
                  categoryData.skillCategoryName.slice(1)}
              </h3>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {Object.entries(categoryData.skills).map(
                  ([count, skillKey], index) => (
                    <SkillTag
                      key={count}
                      skillKey={skillKey}
                      hide={
                        !skillHasMaterial(skillKey, materialDatabaseMap) &&
                        includeNoMaterial
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
