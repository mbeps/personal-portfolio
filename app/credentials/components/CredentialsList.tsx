"use client";

import generateUrl from "@/actions/generateUrl";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import SearchInput from "@/components/Inputs/SearchInput";
import Certificate from "@/types/certificates";
import Fuse from "fuse.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import CredentialListSection from "./CredentialListSection";

import { Skill } from "@/types/skills";
import FilterOption from "@/types/FilterOption";
import stringToSlug from "@/actions/stringToSlug";
import OpenFilterButton from "@/components/Filters/Page/OpenFilterPanelButton";
import FilterCategory from "@/types/FilterCategory";
import FilterOverlay from "@/components/Filters/FilterPanel/FilterPanel";

type CredentialsListListProps = {
  allCertificates: Certificate[];
};

/**
 * Displays a list of all certificates.
 * The user can filter the certificates by category and issuer.
 * The user can also search for certificates by name, issuer, tags, skills, and category.
 * @param allCertificates (Certificate[]): list of all certificates
 * @returns (JSX.Element): list of all certificates
 */
const CredentialsList: React.FC<CredentialsListListProps> = ({
  allCertificates,
}) => {
  //^ Hooks
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const basePath = usePathname();
  const router = useRouter();

  //^ URL Params Strings
  const issuerParamName = "issuer";
  const credentialSectionParamName = "section";
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
    searchParams.get(credentialSectionParamName) || "all"
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
  /**
   * Opens the modal to filter the projects.
   */
  const handleOpenFilterModal = () => {
    setIsFilterOpen(true);
  };

  /**
   * Closes the modals.
   * These modals are for filtering and displaying more projects.
   */
  const handleCloseModals = () => {
    setIsFilterOpen(false);
  };

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  //^ Search Settings
  const searchOptions = {
    keys: ["name", "issuer", "category", "skills.category", "skills.skill"], // Only search these properties
    threshold: 0.3, // Lower threshold means more results
  };

  const fuse = new Fuse(allCertificates, searchOptions);

  //^ Group By Category
  const groupCertificatesByCategory = (
    certificates: Certificate[]
  ): Record<string, Certificate[]> => {
    return certificates.reduce<Record<string, Certificate[]>>(
      (grouped, certificate) => {
        (grouped[certificate.category] =
          grouped[certificate.category] || []).push(certificate);
        return grouped;
      },
      {}
    );
  };

  const searchedCertificates = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : allCertificates;

  //^ Filter Options List
  const certificateCategories: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .map((certificate: Certificate) => ({
        slug: stringToSlug(certificate.category),
        entryName: certificate.category,
      }))
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.slug === value.slug) === index
      ),
  ];

  const certificateIssuers: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .map((certificate: Certificate) => ({
        slug: stringToSlug(certificate.issuer),
        entryName: certificate.issuer,
      }))
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  const skillCategories: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.skills.map((skill: Skill) => ({
          slug: stringToSlug(skill.category),
          entryName: skill.category,
        }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  const hardSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.skills
          .filter((skill: Skill) => skill.skillType === "hard")
          .map((skill: Skill) => ({
            slug: stringToSlug(skill.slug), // Convert skill name to slug
            entryName: skill.skill,
          }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  const generalSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.skills
          .filter((skill: Skill) => skill.skillType === "general")
          .map((skill: Skill) => ({
            slug: stringToSlug(skill.slug), // Convert skill name to slug
            entryName: skill.skill,
          }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  const softSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.skills
          .filter((skill: Skill) => skill.skillType === "soft")
          .map((skill: Skill) => ({
            slug: stringToSlug(skill.slug), // Convert skill name to slug
            entryName: skill.skill,
          }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  //^ Filtering Logic
  const updateSearchTerm = (newSearchTerm: string) => {
    router.push(
      generateUrl(
        {
          [issuerParamName]: selectedIssuer,
          [credentialSectionParamName]: selectedCategory,
          [skillCategoryParamName]: selectedSkillCategory,
          [technicalSkillParamName]: selectedTechnicalSkill,
          [generalSkillParamName]: selectedGeneralSkill,
          [softSkillParamName]: selectedSoftSkill,

          [searchParamName]: newSearchTerm,
          [archivedParamName]: true.toString(),
        },
        basePath
      )
    );
  };

  const filteredCertificates = searchedCertificates.filter(
    (certificate: Certificate) => {
      const matchesIssuer =
        selectedIssuer === "all" ||
        stringToSlug(certificate.issuer) === stringToSlug(selectedIssuer);
      const matchesCategory =
        selectedCategory === "all" ||
        stringToSlug(certificate.category) === stringToSlug(selectedCategory);
      const matchesArchivedStatus = showArchived || !certificate.archived;
      const matchesSkillCategory =
        selectedSkillCategory === "all" ||
        (certificate.skills || []).some(
          (skill) =>
            stringToSlug(skill.category) === stringToSlug(selectedSkillCategory)
        );
      const matchesHardSkill =
        selectedTechnicalSkill === "all" ||
        (certificate.skills || []).some(
          (skill) =>
            skill.slug === selectedTechnicalSkill && skill.skillType === "hard"
        );
      const matchesGeneralSkill =
        selectedGeneralSkill === "all" ||
        (certificate.skills || []).some(
          (skill) =>
            skill.slug === selectedGeneralSkill && skill.skillType === "general"
        );
      const matchesSoftSkill =
        selectedSoftSkill === "all" ||
        (certificate.skills || []).some(
          (skill) =>
            skill.slug === selectedSoftSkill && skill.skillType === "soft"
        );

      return (
        matchesIssuer &&
        matchesCategory &&
        matchesArchivedStatus &&
        matchesSkillCategory &&
        matchesHardSkill &&
        matchesGeneralSkill &&
        matchesSoftSkill
      );
    }
  );

  const groupedCertificates = groupCertificatesByCategory(filteredCertificates);

  const resetFilters = () => {
    router.push(
      generateUrl(
        {
          [issuerParamName]: "all",
          [credentialSectionParamName]: "all",
          [skillCategoryParamName]: "all",
          [technicalSkillParamName]: "all",
          [generalSkillParamName]: "all",
          [softSkillParamName]: "all",
          [searchParamName]: "",
          [archivedParamName]: false.toString(),
        },
        basePath
      )
    );
  };

  const areFiltersApplied =
    selectedIssuer.toLowerCase() !== "all" ||
    selectedCategory.toLowerCase() !== "all" ||
    selectedSkillCategory.toLowerCase() !== "all" ||
    selectedTechnicalSkill.toLowerCase() !== "all" ||
    selectedGeneralSkill.toLowerCase() !== "all" ||
    selectedSoftSkill.toLowerCase() !== "all" ||
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
      urlParam: credentialSectionParamName,
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
      <div className="flex flex-col md:flex-row items-center w-full mt-12 p-2 gap-4">
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
          <OpenFilterButton handleOpenFilterModal={handleOpenFilterModal} />
          {/* Clear Button */}
          <ClearAllFiltersButton
            areFiltersApplied={areFiltersApplied}
            resetFilters={resetFilters}
          />
        </div>
      </div>

      {/* Toggle to display archived projects */}
      <ArchiveToggle
        generateUrl={generateUrl}
        showArchived={showArchived}
        filterProps={{
          category: selectedCategory,
          issuer: selectedIssuer,
          search: searchTerm,
        }}
        basePath={basePath}
      />

      {/* List of projects */}
      <CredentialListSection groupedCertificates={groupedCertificates} />
      {/* Filter Modal */}
      <FilterOverlay
        isOpen={isFilterOpen}
        toggle={handleToggleFilter}
        filterCategories={filterCategories}
        generateUrl={generateUrl}
        basePath={basePath}
      />
    </>
  );
};
export default CredentialsList;
