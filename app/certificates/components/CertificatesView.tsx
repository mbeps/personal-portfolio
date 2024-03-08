"use client";

import generateUrl from "@/actions/generateUrl";
import filterCertificatesByIssuer from "@/actions/material/certificates/filterCertificatesByIssuer";
import generateIssuerFilterOptions from "@/actions/material/certificates/generateIssuerFilterOptions";
import filterMaterialByArchivedStatus, {
  filterMaterialByCategory,
  filterMaterialBySkill,
  filterMaterialBySkillCategory,
} from "@/actions/material/filterMaterials";
import generateFilterOptionsByCategory from "@/actions/material/generateFilterOptionsByCategory";
import generateFilterOptionsBySkillCategories from "@/actions/material/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/generateFilterOptionsBySkillType";
import groupMaterialsByCategory from "@/actions/material/groupMaterialsByCategory";
import stringToSlug from "@/actions/stringToSlug";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterOverlay from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import CertificatesList from "@/components/MaterialLists/CertificatesList";
import { Button } from "@/components/shadcn/ui/button";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import CertificateInterface from "@/interfaces/material/CertificateInterface";
import { SkillTypesEnum } from "@/interfaces/skills/SkillInterface";
import Fuse from "fuse.js";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";

type CertificatesListListProps = {
  allCertificates: CertificateInterface[];
};

/**
 * Displays a list of all certificates.
 * The user can filter the certificates by category and issuer.
 * The user can also search for certificates by name, issuer, tags, skills, and category.
 * @param allCertificates (Certificate[]): list of all certificates
 * @returns (JSX.Element): list of all certificates
 */
const CertificatesView: React.FC<CertificatesListListProps> = ({
  allCertificates,
}) => {
  //^ Hooks
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const basePath = usePathname();
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
  const selectedIssuer = decodeURIComponent(
    searchParams.get(issuerParamName) || "all"
  );
  const selectedCategory = decodeURIComponent(
    searchParams.get(certificateSectionParamName) || "all"
  );
  const selectedSkillCategory = decodeURIComponent(
    searchParams.get(skillCategoryParamName) || "all"
  );
  const selectedTechnicalSkill = decodeURIComponent(
    searchParams.get(technicalSkillParamName) || "all"
  );
  const selectedGeneralSkill = decodeURIComponent(
    searchParams.get(generalSkillParamName) || "all"
  );
  const selectedSoftSkill = decodeURIComponent(
    searchParams.get(softSkillParamName) || "all"
  );
  const searchTerm = decodeURIComponent(
    searchParams.get(searchParamName) || ""
  );
  const showArchived =
    decodeURIComponent(searchParams.get(archivedParamName) || "false") ===
    "true";

  //^ Modal Controls
  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  //^ Search Settings
  const searchOptions = {
    keys: [
      "name",
      "category",
      "issuer",
      "skills.name",
      "skills.category",
      "skills.relatedSkills.name",
      "skills.relatedSkills.category",
    ], // Only search these properties
    threshold: 0.3, // Lower threshold means more results
  };

  const fuse = new Fuse(allCertificates, searchOptions);

  const searchedCertificates = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : allCertificates;

  //^ Filter Options List
  const certificateCategories: FilterOption[] =
    generateFilterOptionsByCategory<CertificateInterface>(allCertificates);

  const certificateIssuers = generateIssuerFilterOptions(allCertificates);

  const skillCategories: FilterOption[] =
    generateFilterOptionsBySkillCategories<CertificateInterface>(
      allCertificates
    );

  const hardSkills: FilterOption[] =
    generateFilterOptionsBySkillType<CertificateInterface>(
      allCertificates,
      SkillTypesEnum.Hard
    );

  const generalSkills: FilterOption[] =
    generateFilterOptionsBySkillType<CertificateInterface>(
      allCertificates,
      SkillTypesEnum.General
    );

  const softSkills: FilterOption[] =
    generateFilterOptionsBySkillType<CertificateInterface>(
      allCertificates,
      SkillTypesEnum.Soft
    );

  //^ Filtering Logic
  const updateSearchTerm = (newSearchTerm: string) => {
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
  };

  let filteredCertificates = searchedCertificates;

  // Filter by issuer
  if (selectedIssuer !== "all") {
    filteredCertificates = filterCertificatesByIssuer(
      selectedIssuer,
      filteredCertificates
    );
  }

  // Filter by certificate category
  if (selectedCategory !== "all") {
    filteredCertificates = filterMaterialByCategory<CertificateInterface>(
      stringToSlug(selectedCategory),
      filteredCertificates
    );
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredCertificates = filterMaterialBySkillCategory<CertificateInterface>(
      stringToSlug(selectedSkillCategory),
      filteredCertificates
    );
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredCertificates = filterMaterialBySkill<CertificateInterface>(
      selectedTechnicalSkill,
      filteredCertificates,
      SkillTypesEnum.Hard
    );
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredCertificates = filterMaterialBySkill<CertificateInterface>(
      selectedGeneralSkill,
      filteredCertificates,
      SkillTypesEnum.General
    );
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredCertificates = filterMaterialBySkill<CertificateInterface>(
      selectedSoftSkill,
      filteredCertificates,
      SkillTypesEnum.Soft
    );
  }

  // Filter by archived status
  filteredCertificates = filterMaterialByArchivedStatus<CertificateInterface>(
    showArchived,
    filteredCertificates
  );

  const groupedCertificates = groupMaterialsByCategory(filteredCertificates);

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
      options: certificateIssuers,
      selectedValue: selectedIssuer,
    },
    {
      sectionName: "Category",
      urlParam: certificateSectionParamName,
      options: certificateCategories,
      selectedValue: selectedCategory,
    },
    {
      sectionName: "Skill Category",
      urlParam: skillCategoryParamName,
      options: skillCategories,
      selectedValue: selectedSkillCategory,
    },
    {
      sectionName: "Technical Skill",
      urlParam: technicalSkillParamName,
      options: hardSkills,
      selectedValue: selectedTechnicalSkill,
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      options: generalSkills,
      selectedValue: selectedGeneralSkill,
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      options: softSkills,
      selectedValue: selectedSoftSkill,
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
