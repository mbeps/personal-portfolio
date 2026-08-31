"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import FilterSection from "@/components/filters/filter-section";
import CertificatesList from "@/components/material-lists/certificates-list";
import { ROUTES } from "@/constants/routes";
import type CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import certificateDatabaseMap from "@/database/certificates/certificate-database-map";
import type CertificateInterface from "@/database/certificates/certificate-interface";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import useMaterialFilterState from "@/hooks/use-material-filter-state";
import checkForArchivedMaterials from "@/lib/material/check-for-archived-materials";
import filterCertificatesByIssuer from "@/lib/material/filter/filter-certificates-by-issuer";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filter-material-by-archived-status";
import filterMaterialByCategory from "@/lib/material/filter/filter-material-by-category";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import filterMaterialBySkillCategory from "@/lib/material/filter/filter-material-by-skill-category";
import generateFilterOptionsByCategory from "@/lib/material/filter-options/generate-filter-options-by-category";
import { generateFilterOptionsBySkillCategories } from "@/lib/material/filter-options/generate-filter-options-by-skill-categories";
import generateFilterOptionsBySkillType from "@/lib/material/filter-options/generate-filter-options-by-skill-type";
import generateIssuerFilterOptions from "@/lib/material/filter-options/generate-issuer-filter-options";
import stringToSlug from "@/lib/string-to-slug";

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
  const archivedParamName = "archived";
  const searchParamName = "search";

  const searchOptions: string[] = ["name", "category", "issuer", "skills"];

  const {
    searchTerm,
    setSearchTerm,
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
            certificateDatabaseMap,
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "Category",
        urlParam: certificateSectionParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsByCategory<CertificateInterface>(
          certificateDatabaseMap,
        ),
        applyFilter: (value, keys) =>
          filterMaterialByCategory<CertificateInterface>(
            value,
            keys,
            certificateDatabaseMap,
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "Skill Category",
        urlParam: skillCategoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsBySkillCategories<CertificateInterface>(
          certificateDatabaseMap,
          skillDatabaseMap,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkillCategory<CertificateInterface>(
            keys,
            certificateDatabaseMap,
            value,
            skillDatabaseMap,
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "Technical Skill",
        urlParam: technicalSkillParamName,
        options: generateFilterOptionsBySkillType<CertificateInterface>(
          certificateDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technology,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<CertificateInterface>(
            value as SkillDatabaseKeys,
            keys,
            certificateDatabaseMap,
          ) as CertificateDatabaseKeys[],
      },
      {
        sectionName: "General Skill",
        urlParam: generalSkillParamName,
        options: generateFilterOptionsBySkillType<CertificateInterface>(
          certificateDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technical,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<CertificateInterface>(
            value as SkillDatabaseKeys,
            keys,
            certificateDatabaseMap,
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
          certificateDatabaseMap,
        ) as CertificateDatabaseKeys[],
    },
  });

  return (
    <>
      <FilterSection
        name={ROUTES.CERTIFICATES.name}
        basePath={basePath}
        searchFilter={{
          searchTerm: searchTerm,
          onChange: setSearchTerm,
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
