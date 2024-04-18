"use client";

import generateUrl from "@/actions/generateUrl";
import checkForArchivedMaterials from "@/actions/material/checkForArchivedMaterials";
import filterCertificatesByIssuer from "@/actions/material/filter/filterCertificatesByIssuer";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/actions/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/actions/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/actions/material/filterOptions/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/actions/material/filterOptions/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/filterOptions/generateFilterOptionsBySkillType";
import generateIssuerFilterOptions from "@/actions/material/filterOptions/generateIssuerFilterOptions";
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import stringToSlug from "@/actions/stringToSlug";
import FilterSection from "@/components/Filters/FilterSection";
import CertificatesList from "@/components/MaterialLists/CertificatesList";
import { CERTIFICATES_PAGE } from "@/constants/pages";
import certificateDatabase from "@/database/certificates";
import skillDatabase from "@/database/skills";
import CertificateKeysEnum from "@/enums/DatabaseKeysEnums/CertificateKeysEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import useFuseSearch from "@/hooks/useFuseSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import CertificateInterface from "@/interfaces/material/CertificateInterface";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

/**
 * Displays a list of all certificates that I have.
 * Also allows the user to search and filter the certificates.
 * These certificates are displayed into categories.
 * Because this uses hooks, it is a client-side only component.
 *
 * @returns Page with all certificates
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
  function handleToggleFilter() {
    setIsFilterOpen(!isFilterOpen);
  }

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

  let filteredCertificateSlugArray: CertificateKeysEnum[] = useFuseSearch(
    certificateDatabase,
    searchTerm,
    searchOptions
  ) as CertificateKeysEnum[];

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
    ) as CertificateKeysEnum[];
  }

  // Filter by certificate category
  if (selectedCategory !== "all") {
    filteredCertificateSlugArray =
      filterMaterialByCategory<CertificateInterface>(
        stringToSlug(selectedCategory),
        filteredCertificateSlugArray,
        certificateDatabase
      ) as CertificateKeysEnum[];
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredCertificateSlugArray =
      filterMaterialBySkillCategory<CertificateInterface>(
        filteredCertificateSlugArray,
        certificateDatabase,
        stringToSlug(selectedSkillCategory),
        skillDatabase
      ) as CertificateKeysEnum[];
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedTechnicalSkill as SkillKeysEnum,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateKeysEnum[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedGeneralSkill as SkillKeysEnum,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateKeysEnum[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedSoftSkill as SkillKeysEnum,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateKeysEnum[];
  }

  // Filter by archived status
  filteredCertificateSlugArray =
    filterMaterialByArchivedStatus<CertificateInterface>(
      showArchived,
      filteredCertificateSlugArray,
      certificateDatabase
    ) as CertificateKeysEnum[];

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
      <FilterSection
        name={CERTIFICATES_PAGE.label}
        basePath={basePath}
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        handleToggleFilter={handleToggleFilter}
        isFilterOpen={isFilterOpen}
        filterCategories={filterCategories}
        showArchived={showArchived}
        generateUrl={generateUrl}
        areFiltersApplied={areFiltersApplied}
        hasArchivedMaterials={checkForArchivedMaterials(certificateDatabase)}
      />

      {/* List of certificates */}
      <CertificatesList groupedMaterial={groupedCertificates} />
    </>
  );
};
export default CertificatesView;
