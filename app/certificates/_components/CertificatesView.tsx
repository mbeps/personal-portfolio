"use client";

import checkForArchivedMaterials from "@/actions/material/checkForArchivedMaterials";
import filterCertificatesByIssuer from "@/actions/material/filter/filterCertificatesByIssuer";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/actions/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/actions/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/actions/material/filter-options/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/actions/material/filter-options/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/filter-options/generateFilterOptionsBySkillType";
import generateIssuerFilterOptions from "@/actions/material/filter-options/generateIssuerFilterOptions";
import stringToSlug from "@/actions/stringToSlug";
import FilterSection from "@/components/filters/FilterSection";
import CertificatesList from "@/components/material-lists/CertificatesList";
import { CERTIFICATES_PAGE } from "@/constants/pages";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import certificateDatabaseMap from "@/database/certificates/CertificateDatabaseMap";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import CertificateInterface from "@/database/certificates/CertificateInterface";
import { usePathname } from "next/navigation";
import React from "react";
import useMaterialFilterState from "@/hooks/useMaterialFilterState";

/**
 * Client-side controller for the certificates archive that plugs the shared filter hook into the `CertificatesList`.
 * Coordinates issuer, category, and skill filters with search + archive state so copies of this list render identical behavior.
 *
 * @returns Filter UI plus grouped certificate cards.
 */
const CertificatesView: React.FC = () => {
  const basePath: string = usePathname();

  const issuerParamName = "issuer";
  const certificateSectionParamName = "section";
  const skillCategoryParamName = "category";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";
  const archivedParamName = "archived";
  const searchParamName = "search";

  const searchOptions: string[] = [
    "name",
    "category",
    "issuer",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
  ];

  const {
    searchTerm,
    groupedMaterials,
    filterCategories,
    archiveFilter,
    areFiltersApplied,
  } = useMaterialFilterState<CertificateDatabaseKeys, CertificateInterface>({
    databaseMap: certificateDatabaseMap,
    searchParamName,
    searchKeys: searchOptions,
    filterCategories: [
      {
        sectionName: "Issuer",
        urlParam: issuerParamName,
        valueParser: stringToSlug,
        options: generateIssuerFilterOptions(certificateDatabaseMap),
        applyFilter: (value, keys) =>
          filterCertificatesByIssuer(
            value,
            keys,
            certificateDatabaseMap
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "Category",
        urlParam: certificateSectionParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsByCategory<CertificateInterface>(
          certificateDatabaseMap
        ),
        applyFilter: (value, keys) =>
          filterMaterialByCategory<CertificateInterface>(
            value,
            keys,
            certificateDatabaseMap
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "Skill Category",
        urlParam: skillCategoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsBySkillCategories<CertificateInterface>(
          certificateDatabaseMap,
          skillDatabaseMap
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkillCategory<CertificateInterface>(
            keys,
            certificateDatabaseMap,
            value,
            skillDatabaseMap
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "Technical Skill",
        urlParam: technicalSkillParamName,
        options: generateFilterOptionsBySkillType<CertificateInterface>(
          certificateDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technology
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<CertificateInterface>(
            value as SkillDatabaseKeys,
            keys,
            certificateDatabaseMap
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "General Skill",
        urlParam: generalSkillParamName,
        options: generateFilterOptionsBySkillType<CertificateInterface>(
          certificateDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technical
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<CertificateInterface>(
            value as SkillDatabaseKeys,
            keys,
            certificateDatabaseMap
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "Soft Skill",
        urlParam: softSkillParamName,
        options: generateFilterOptionsBySkillType<CertificateInterface>(
          certificateDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Soft
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<CertificateInterface>(
            value as SkillDatabaseKeys,
            keys,
            certificateDatabaseMap
          ) as CertificateDatabaseKeys[],
      },
    ],
    archiveFilter: {
      paramName: archivedParamName,
      hasArchivedMaterials: checkForArchivedMaterials(certificateDatabaseMap),
      applyFilter: (showArchived, keys) =>
        filterMaterialByArchivedStatus<CertificateInterface>(
          showArchived,
          keys,
          certificateDatabaseMap
        ) as CertificateDatabaseKeys[],
    },
  });

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
        archiveFilter={archiveFilter}
      />

      {/* List of certificates */}
      <CertificatesList groupedMaterial={groupedMaterials} />
    </>
  );
};
export default CertificatesView;
