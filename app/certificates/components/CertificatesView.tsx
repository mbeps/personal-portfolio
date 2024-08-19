"use client";

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
import CertificateDatabaseKeys from "@/database/Certificates/CertificateDatabaseKeys";
import certificateDatabaseMap from "@/database/Certificates/CertificateDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import useFuseMaterialSearch from "@/hooks/useFuseSearch/useFuseMaterialSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import CertificateInterface from "@/database/Certificates/CertificateInterface";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

/**
 * Displays a list of all certificates that I have.
 * Also allows the user to search and filter the certificates.
 * These certificates are displayed into categories.
 * Because this uses hooks, it is a client-side only component.
 *
 * @returns Components with all the grouped certificates and controls to filter them.
 */
const CertificatesView: React.FC = () => {
  //^ Hooks
  const searchParams = useSearchParams();
  const basePath: string = usePathname();

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

  let filteredCertificateSlugArray: CertificateDatabaseKeys[] =
    useFuseMaterialSearch(
      certificateDatabaseMap,
      searchTerm,
      searchOptions
    ) as CertificateDatabaseKeys[];

  //^ Filtering Logic
  // Filter by issuer
  if (selectedIssuer !== "all") {
    filteredCertificateSlugArray = filterCertificatesByIssuer(
      selectedIssuer,
      filteredCertificateSlugArray,
      certificateDatabaseMap
    ) as CertificateDatabaseKeys[];
  }

  // Filter by certificate category
  if (selectedCategory !== "all") {
    filteredCertificateSlugArray =
      filterMaterialByCategory<CertificateInterface>(
        stringToSlug(selectedCategory),
        filteredCertificateSlugArray,
        certificateDatabaseMap
      ) as CertificateDatabaseKeys[];
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredCertificateSlugArray =
      filterMaterialBySkillCategory<CertificateInterface>(
        filteredCertificateSlugArray,
        certificateDatabaseMap,
        stringToSlug(selectedSkillCategory),
        skillDatabaseMap
      ) as CertificateDatabaseKeys[];
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedTechnicalSkill as SkillDatabaseKeys,
      filteredCertificateSlugArray,
      certificateDatabaseMap
    ) as CertificateDatabaseKeys[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedGeneralSkill as SkillDatabaseKeys,
      filteredCertificateSlugArray,
      certificateDatabaseMap
    ) as CertificateDatabaseKeys[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredCertificateSlugArray = filterMaterialBySkill<CertificateInterface>(
      selectedSoftSkill as SkillDatabaseKeys,
      filteredCertificateSlugArray,
      certificateDatabaseMap
    ) as CertificateDatabaseKeys[];
  }

  // Filter by archived status
  filteredCertificateSlugArray =
    filterMaterialByArchivedStatus<CertificateInterface>(
      showArchived,
      filteredCertificateSlugArray,
      certificateDatabaseMap
    ) as CertificateDatabaseKeys[];

  const groupedCertificates: MaterialGroupInterface[] =
    groupMaterialsByCategory(
      filteredCertificateSlugArray,
      certificateDatabaseMap
    );

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
      options: generateIssuerFilterOptions(certificateDatabaseMap),
    },
    {
      sectionName: "Category",
      urlParam: certificateSectionParamName,
      selectedValue: selectedCategory,
      options: generateFilterOptionsByCategory<CertificateInterface>(
        certificateDatabaseMap
      ),
    },
    {
      sectionName: "Skill Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: generateFilterOptionsBySkillCategories<CertificateInterface>(
        certificateDatabaseMap,
        skillDatabaseMap
      ),
    },
    {
      sectionName: "Technical Skill",
      urlParam: technicalSkillParamName,
      selectedValue: selectedTechnicalSkill,
      options: generateFilterOptionsBySkillType<CertificateInterface>(
        certificateDatabaseMap,
        skillDatabaseMap,
        SkillTypesEnum.Technology
      ),
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generateFilterOptionsBySkillType<CertificateInterface>(
        certificateDatabaseMap,
        skillDatabaseMap,
        SkillTypesEnum.Technical
      ),
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: generateFilterOptionsBySkillType<CertificateInterface>(
        certificateDatabaseMap,
        skillDatabaseMap,
        SkillTypesEnum.Soft
      ),
    },
  ];

  return (
    <>
      <FilterSection
        name={CERTIFICATES_PAGE.label}
        basePath={basePath}
        searchFilter={{
          searchTerm: searchTerm,
          searchParamName: searchParamName,
        }}
        filterCategories={filterCategories}
        areFiltersApplied={areFiltersApplied}
        archiveFilter={{
          paramName: archivedParamName,
          showArchived: showArchived,
          hasArchivedMaterials: checkForArchivedMaterials(
            certificateDatabaseMap
          ),
        }}
      />

      {/* List of certificates */}
      <CertificatesList groupedMaterial={groupedCertificates} />
    </>
  );
};
export default CertificatesView;
