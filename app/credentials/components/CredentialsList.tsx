"use client";

import generateUrl from "@/actions/generateUrl";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import OpenFilterModalButton from "@/components/Filters/Page/OpenFilterModalButton";
import SearchInput from "@/components/Inputs/SearchInput";
import Certificate from "@/types/certificates";
import Fuse from "fuse.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import CredentialListSection from "./CredentialListSection";
import FilterModal, {
  FilterCategory,
} from "@/components/Filters/Modal/FIlterModal";
import { Skill } from "@/types/skills";

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
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const basePath = usePathname();
  const router = useRouter();

  //^ URL Params Strings
  const issuerParamName = "issuer";
  const credentialSectionParamName = "section";
  const skillCategoryParamName = "category";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const archivedParamName = "archived";
  const searchParamName = "search";

  //^ URL Params Reader
  const selectedIssuer = decodeURIComponent(
    (searchParams.get(issuerParamName) || "all").toLowerCase()
  );
  const selectedCategory = decodeURIComponent(
    (searchParams.get(credentialSectionParamName) || "all").toLowerCase()
  );
  const selectedSkillCategory = decodeURIComponent(
    (searchParams.get(skillCategoryParamName) || "all").toLowerCase()
  );
  const selectedTechnicalSkill = decodeURIComponent(
    (searchParams.get(technicalSkillParamName) || "all").toLowerCase()
  );
  const selectedGeneralSkill = decodeURIComponent(
    (searchParams.get(generalSkillParamName) || "all").toLowerCase()
  );
  const searchTerm = decodeURIComponent(
    (searchParams.get(searchParamName) || "").toLowerCase()
  );
  const showArchived =
    decodeURIComponent(
      (searchParams.get(archivedParamName) || "false").toLowerCase()
    ) === "true";

  //^ Modal Controls
  /**
   * Opens the modal to filter the projects.
   */
  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  /**
   * Closes the modals.
   * These modals are for filtering and displaying more projects.
   */
  const handleCloseModals = () => {
    setIsFilterModalOpen(false);
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
  const certificateCategories: string[] = [
    "All",
    ...allCertificates
      .map((certificate: Certificate) => certificate.category)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  const certificateIssuers: string[] = [
    "All",
    ...allCertificates
      .map((certificate: Certificate) => certificate.issuer)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  const skillCategories: string[] = [
    "All",
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.skills.map((skill: Skill) => skill.category)
      )
      .filter((value, index, self) => value && self.indexOf(value) === index),
  ];

  const hardSkills: string[] = [
    "All",
    ...Array.from(
      new Set(
        allCertificates.flatMap((certificate: Certificate) =>
          certificate.skills
            .filter((skill: Skill) => skill.skillType === "hard")
            .map((skill: Skill) => skill.skill)
        )
      )
    ),
  ];

  const generalSkills: string[] = [
    "All",
    ...Array.from(
      new Set(
        allCertificates.flatMap((certificate: Certificate) =>
          certificate.skills
            .filter((skill: Skill) => skill.skillType === "general")
            .map((skill: Skill) => skill.skill)
        )
      )
    ),
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
          [searchParamName]: newSearchTerm,
          [archivedParamName]: true,
        },
        basePath
      )
    );
  };

  const filteredCertificates = searchedCertificates.filter(
    (certificate: Certificate) => {
      const matchesIssuer =
        selectedIssuer === "all" ||
        certificate.issuer.toLowerCase() === selectedIssuer;
      const matchesCategory =
        selectedCategory === "all" ||
        certificate.category.toLowerCase() === selectedCategory;
      const matchesArchivedStatus = showArchived || !certificate.archived;
      const matchesSkillCategory =
        selectedSkillCategory === "all" ||
        (certificate.skills || []).some(
          (skill) => skill.category?.toLowerCase() === selectedSkillCategory
        );
      const matchesHardSkill =
        selectedTechnicalSkill === "all" ||
        (certificate.skills || []).some(
          (skill) =>
            skill.skill.toLowerCase() === selectedTechnicalSkill &&
            skill.skillType === "hard"
        );
      const matchesGeneralSkill =
        selectedGeneralSkill === "all" ||
        (certificate.skills || []).some(
          (skill) =>
            skill.skill.toLowerCase() === selectedGeneralSkill &&
            skill.skillType === "general"
        );

      return (
        matchesIssuer &&
        matchesCategory &&
        matchesArchivedStatus &&
        matchesSkillCategory &&
        matchesHardSkill &&
        matchesGeneralSkill
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
          [searchParamName]: "",
          [archivedParamName]: false,
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
    searchTerm !== "" ||
    showArchived;

  const filterCategories: FilterCategory[] = [
    {
      name: "Issuer",
      urlParam: issuerParamName,
      options: certificateIssuers,
      selectedValue: selectedIssuer,
    },
    {
      name: "Category",
      urlParam: credentialSectionParamName,
      options: certificateCategories,
      selectedValue: selectedCategory,
    },
    {
      name: "Skill Category",
      urlParam: skillCategoryParamName,
      options: skillCategories,
      selectedValue: selectedSkillCategory,
    },
    {
      name: "Technical Skill",
      urlParam: technicalSkillParamName,
      options: hardSkills,
      selectedValue: selectedTechnicalSkill,
    },
    {
      name: "General Skill",
      urlParam: generalSkillParamName,
      options: generalSkills,
      selectedValue: selectedGeneralSkill,
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
          <OpenFilterModalButton
            handleOpenFilterModal={handleOpenFilterModal}
          />
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
      <FilterModal
        filterCategories={filterCategories}
        resetFilters={resetFilters}
        generateUrl={generateUrl}
        showArchived={showArchived}
        handleCloseModals={handleCloseModals}
        isFilterModalOpen={isFilterModalOpen}
        areFiltersApplied={areFiltersApplied}
        basePath={basePath}
        description={`
          Filters are applied automatically as you select them. Searching and
          filtering automatically show archived certificates.
        `}
      />
    </>
  );
};
export default CredentialsList;
