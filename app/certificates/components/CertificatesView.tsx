"use client";

import generateUrl from "@/actions/generateUrl";
import generateIssuerFilterOptions from "@/actions/material/filterOptions/generateIssuerFilterOptions";
import generateFilterOptionsByCategory from "@/actions/material/filterOptions/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/actions/material/filterOptions/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/filterOptions/generateFilterOptionsBySkillType";
import groupMaterialsByCategory from "@/actions/material/groupMaterialsByCategory";
import stringToSlug from "@/actions/stringToSlug";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterOverlay from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import CertificatesList from "@/components/MaterialLists/CertificatesList";
import { Button } from "@/components/shadcn/ui/button";
import certificateDatabase from "@/database/certificates";
import skillDatabase from "@/database/skills";
import CertificateSlugEnum from "@/enums/MaterialSlugEnums/CertificateSlugEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import useFuseSearch from "@/hooks/useFuseSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import CertificateInterface from "@/interfaces/material/CertificateInterface";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import filterMaterialByCategory from "@/actions/material/filter/filterMaterialByCategory";
import filterMaterialBySkillCategory from "@/actions/material/filter/filterMaterialBySkillCategory";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import filterCertificatesByIssuer from "@/actions/material/filter/filterCertificatesByIssuer";

/**
 * Displays a list of all certificates.
 * The user can filter the certificates by category and issuer.
 * The user can also search for certificates by name, issuer, tags, skills, and category.
 * @param certificates (Certificate[]): list of all certificates
 * @returns (JSX.Element): list of all certificates
 */
const CertificatesView: React.FC = () => {
  //^ Hooks
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const basePath: string = usePathname();
  const router = useRouter();

  //^ URL Params Strings
  const issuerParamName = "issuer";
  const certificateSectionParamName = "section";
  const skillCategoryParamName = "category";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";
  const archivedParamName = "archived";
  const searchParamName = "search";

  //^ URL Params Reader
  const selectedIssuer: string = decodeURIComponent(
    searchParams.get(issuerParamName) || "all"
  );
  const selectedCategory: string = decodeURIComponent(
    searchParams.get(certificateSectionParamName) || "all"
  );
  const selectedSkillCategory: string = decodeURIComponent(
    searchParams.get(skillCategoryParamName) || "all"
  );
  const selectedTechnicalSkill: string = decodeURIComponent(
    searchParams.get(technicalSkillParamName) || "all"
  );
  const selectedGeneralSkill: string = decodeURIComponent(
    searchParams.get(generalSkillParamName) || "all"
  );
  const selectedSoftSkill: string = decodeURIComponent(
    searchParams.get(softSkillParamName) || "all"
  );
  const searchTerm: string = decodeURIComponent(
    searchParams.get(searchParamName) || ""
  );
  const showArchived: boolean =
    decodeURIComponent(searchParams.get(archivedParamName) || "false") ===
    "true";

  //^ Modal Controls
  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  //^ Search Settings
  const searchOptions: string[] = [
    "name",
    "category",
    "issuer",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
  ];

  let filteredCertificateSlugArray: CertificateSlugEnum[] = useFuseSearch(
    certificateDatabase,
    searchTerm,
    searchOptions
  ) as CertificateSlugEnum[];

  //^ Filtering Logic
  function updateSearchTerm(newSearchTerm: string): void {
    router.push(
      generateUrl(
        [
          { entryName: issuerParamName, slug: selectedIssuer },
          { entryName: certificateSectionParamName, slug: selectedCategory },
          { entryName: skillCategoryParamName, slug: selectedSkillCategory },
          { entryName: technicalSkillParamName, slug: selectedTechnicalSkill },
          { entryName: generalSkillParamName, slug: selectedGeneralSkill },
          { entryName: softSkillParamName, slug: selectedSoftSkill },

          { entryName: searchParamName, slug: newSearchTerm },
          { entryName: archivedParamName, slug: true.toString() },
        ],
        basePath
      )
    );
  }

  // Filter by issuer
  if (selectedIssuer !== "all") {
    filteredCertificateSlugArray = filterCertificatesByIssuer(
      selectedIssuer,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateSlugEnum[];
  }

  // Filter by certificate category
  if (selectedCategory !== "all") {
    filteredCertificateSlugArray =
      filterMaterialByCategory<CertificateInterface>(
        stringToSlug(selectedCategory),
        filteredCertificateSlugArray,
        certificateDatabase
      ) as CertificateSlugEnum[];
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredCertificateSlugArray =
      filterMaterialBySkillCategory<CertificateInterface>(
        filteredCertificateSlugArray,
        certificateDatabase,
        stringToSlug(selectedSkillCategory),
        skillDatabase
      ) as CertificateSlugEnum[];
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedTechnicalSkill as SkillSlugEnum,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateSlugEnum[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedGeneralSkill as SkillSlugEnum,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateSlugEnum[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedSoftSkill as SkillSlugEnum,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateSlugEnum[];
  }

  // Filter by archived status
  filteredCertificateSlugArray =
    filterMaterialByArchivedStatus<CertificateInterface>(
      showArchived,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateSlugEnum[];

  const groupedCertificates: MaterialGroupInterface[] =
    groupMaterialsByCategory(filteredCertificateSlugArray, certificateDatabase);

  const areFiltersApplied =
    selectedIssuer !== "all" ||
    selectedCategory !== "all" ||
    selectedSkillCategory !== "all" ||
    selectedTechnicalSkill !== "all" ||
    selectedGeneralSkill !== "all" ||
    selectedSoftSkill !== "all" ||
    searchTerm !== "" ||
    showArchived;

  const filterCategories: FilterCategory[] = [
    {
      sectionName: "Issuer",
      urlParam: issuerParamName,
      selectedValue: selectedIssuer,
      options: generateIssuerFilterOptions(certificateDatabase),
    },
    {
      sectionName: "Category",
      urlParam: certificateSectionParamName,
      selectedValue: selectedCategory,
      options:
        generateFilterOptionsByCategory<CertificateInterface>(
          certificateDatabase
        ),
    },
    {
      sectionName: "Skill Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: generateFilterOptionsBySkillCategories<CertificateInterface>(
        certificateDatabase,
        skillDatabase
      ),
    },
    {
      sectionName: "Technical Skill",
      urlParam: technicalSkillParamName,
      selectedValue: selectedTechnicalSkill,
      options: generateFilterOptionsBySkillType<CertificateInterface>(
        certificateDatabase,
        skillDatabase,
        SkillTypesEnum.Hard
      ),
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generateFilterOptionsBySkillType<CertificateInterface>(
        certificateDatabase,
        skillDatabase,
        SkillTypesEnum.General
      ),
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: generateFilterOptionsBySkillType<CertificateInterface>(
        certificateDatabase,
        skillDatabase,
        SkillTypesEnum.Soft
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full mt-12 py-2 gap-4">
        {/* Search input */}
        <div className="w-full md:flex-1">
          <SearchInput
            searchTerm={searchTerm}
            updateSearchTerm={updateSearchTerm}
            placeholder="Search certificate name or metadata"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row md:flex-1 gap-2 w-full">
          {/* Filter Button */}
          <Button
            variant="default"
            onClick={handleToggleFilter}
            className="w-full flex justify-start"
          >
            <div className="flex items-center space-x-2">
              <BsFilterLeft
                fontSize={24}
                className="text-neutral-700 dark:text-neutral-200"
              />
              <span>Filters</span>
            </div>
          </Button>

          {/* Clear Button */}
          <Link href={basePath} className="w-full">
            <Button
              variant="default"
              disabled={!areFiltersApplied}
              className="w-full flex justify-start"
            >
              <div className="flex items-center space-x-2">
                <AiOutlineClear
                  fontSize={24}
                  className="text-neutral-700 dark:text-neutral-200"
                />
                <span>Clear All</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Toggle to display archived projects */}
      <ArchiveToggle
        generateUrl={generateUrl}
        showArchived={showArchived}
        filterProps={[
          { entryName: issuerParamName, slug: selectedIssuer },
          { entryName: certificateSectionParamName, slug: selectedCategory },
          { entryName: skillCategoryParamName, slug: selectedSkillCategory },
          { entryName: technicalSkillParamName, slug: selectedTechnicalSkill },
          { entryName: generalSkillParamName, slug: selectedGeneralSkill },
          { entryName: softSkillParamName, slug: selectedSoftSkill },
          { entryName: searchParamName, slug: searchTerm },
        ]}
        basePath={basePath}
      />

      {/* List of projects */}
      <CertificatesList groupedMaterial={groupedCertificates} />
      {/* Filter Modal */}
      <FilterOverlay
        isOpen={isFilterOpen}
        toggle={handleToggleFilter}
        filterCategories={filterCategories}
        basePath={basePath}
        archiveFilter={{
          paramName: archivedParamName,
          status: showArchived,
        }}
        areFiltersApplied={areFiltersApplied}
      />
    </>
  );
};
export default CertificatesView;
