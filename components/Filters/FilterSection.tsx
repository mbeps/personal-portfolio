"use client";

import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterPanel from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import { Button } from "@/components/shadcn/ui/button";
import { ButtonGroup } from "@/components/shadcn/ui/button-group";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import SearchFilter from "@/interfaces/filters/SearchFilter";
import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import generateUrl from "@/actions/generateUrl";
import { useRouter } from "next/navigation";
import { MdOutlineManageSearch } from "react-icons/md";

interface FilterSectionProps {
  name: string;
  basePath: string;
  filterCategories: FilterCategory[];
  areFiltersApplied: boolean;
  searchFilter: SearchFilter;
  archiveFilter: ArchiveFilter;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  name,
  basePath,
  searchFilter,
  filterCategories,
  areFiltersApplied,
  archiveFilter,
}) => {
  const router = useRouter();

  const filterProps: FilterOption[] = filterCategories.map(
    (category): FilterOption => ({
      entryName: category.urlParam,
      slug: category.selectedValue,
    })
  );

  filterProps.push({
    entryName: searchFilter.searchParamName,
    slug: searchFilter.searchTerm,
  });

  filterProps.push({
    entryName: archiveFilter.paramName,
    slug: archiveFilter.showArchived.toString(),
  });

  function updateSearchTerm(newSearchTerm: string) {
    const updatedFilterProps: FilterOption[] = filterProps.map((filterProp) => {
      if (filterProp.entryName === searchFilter.searchParamName) {
        return { ...filterProp, slug: newSearchTerm };
      }
      if (filterProp.entryName === archiveFilter.paramName) {
        return { ...filterProp, slug: true.toString() };
      }
      return filterProp;
    });

    const newUrl: string = generateUrl(updatedFilterProps, basePath);
    router.push(newUrl);
  }

  const message: string = archiveFilter.hasArchivedMaterials
    ? `Search, Filter and View Archived ${name}`
    : `Search & Filter ${name}`;

  const [isFilterOpen, setIsFilterModalOpen] = useState(false);
  function handleToggleFilter() {
    setIsFilterModalOpen(!isFilterOpen);
  }

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center space-x-3">
              <MdOutlineManageSearch
                size={28}
                className="text-neutral-600 dark:text-neutral-400"
              />
              <p className="text-lg text-neutral-600 dark:text-neutral-400 font-semibold">
                {message}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row items-center w-full py-2 gap-4">
                {/* Search input */}
                <div className="w-full md:flex-1">
                  <SearchInput
                    searchTerm={searchFilter.searchTerm}
                    updateSearchTerm={updateSearchTerm}
                    placeholder={`Search for ${name} name or metadata`}
                  />
                </div>

                {/* Button Group */}
                <div className="w-full md:flex-1">
                  <ButtonGroup className="w-full">
                    <Button
                      variant="default"
                      onClick={handleToggleFilter}
                      className="flex-1 shadow-xs hover:shadow-md"
                    >
                      <div className="flex items-center space-x-2">
                        <BsFilterLeft
                          fontSize={24}
                          className="text-neutral-700 dark:text-neutral-200"
                        />
                        <span>Filters</span>
                      </div>
                    </Button>

                    <Button
                      variant="default"
                      disabled={!areFiltersApplied}
                      asChild
                      className="flex-1 shadow-xs hover:shadow-md"
                    >
                      <Link href={basePath} scroll={false}>
                        <div className="flex items-center space-x-2">
                          <AiOutlineClear
                            fontSize={24}
                            className="text-neutral-700 dark:text-neutral-200"
                          />
                          <span>Clear All</span>
                        </div>
                      </Link>
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              {/* Archive Toggle */}
              {archiveFilter.hasArchivedMaterials && (
                <ArchiveToggle
                  showArchived={archiveFilter.showArchived}
                  filterProps={filterProps}
                  basePath={basePath}
                />
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Filter Modal */}
      <FilterPanel
        isOpen={isFilterOpen}
        toggle={handleToggleFilter}
        filterCategories={filterCategories}
        basePath={basePath}
        archiveFilter={{
          paramName: archiveFilter.paramName,
          showArchived: archiveFilter.showArchived,
          hasArchivedMaterials: archiveFilter.hasArchivedMaterials,
        }}
        areFiltersApplied={areFiltersApplied}
        searchFilter={searchFilter}
      />
    </>
  );
};

export default FilterSection;
