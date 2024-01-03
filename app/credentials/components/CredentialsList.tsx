"use client";

import generateUrl from "@/actions/generateUrl";
import stringToSlug from "@/actions/stringToSlug";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterOverlay from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import Certificate from "@/types/certificates";
import FilterCategory from "@/types/filters/FilterCategory";
import FilterOption from "@/types/filters/FilterOption";
import Skill from "@/types/skills";
import Fuse from "fuse.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import CredentialListSection from "./CredentialListSection";
import { Button } from "@/components/shadcn/ui/button";
import { AiOutlineClear } from "react-icons/ai";
import Link from "next/link";
import { BsFilterLeft } from "react-icons/bs";

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
    searchParams.get(issuerParamName) || "all",
  );
  const selectedCategory = decodeURIComponent(
    searchParams.get(credentialSectionParamName) || "all",
  );
  const selectedSkillCategory = decodeURIComponent(
    searchParams.get(skillCategoryParamName) || "all",
  );
  const selectedTechnicalSkill = decodeURIComponent(
    searchParams.get(technicalSkillParamName) || "all",
  );
  const selectedGeneralSkill = decodeURIComponent(
    searchParams.get(generalSkillParamName) || "all",
  );
  const selectedSoftSkill = decodeURIComponent(
    searchParams.get(softSkillParamName) || "all",
  );
  const searchTerm = decodeURIComponent(
    searchParams.get(searchParamName) || "",
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
      "issuer",
      "category",
      "technicalSkills.skill",
      "technicalSkills.category",
      "technicalSkills.skill.skill",
      "softSkills.skill",
      "softSkills.category",
    ], // Only search these properties
    threshold: 0.3, // Lower threshold means more results
  };

  const fuse = new Fuse(allCertificates, searchOptions);

  //^ Group By Category
  const groupCertificatesByCategory = (
    certificates: Certificate[],
  ): Record<string, Certificate[]> => {
    return certificates.reduce<Record<string, Certificate[]>>(
      (grouped, certificate) => {
        (grouped[certificate.category] =
          grouped[certificate.category] || []).push(certificate);
        return grouped;
      },
      {},
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
          self.findIndex((v) => v.slug === value.slug) === index,
      )
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
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
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const skillCategories: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.technicalSkills.map((skill: Skill) => ({
          slug: stringToSlug(skill.category),
          entryName: skill.category,
        })),
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const hardSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.technicalSkills
          .filter((skill: Skill) => skill.skillType === "hard")
          .map((skill: Skill) => ({
            slug: stringToSlug(skill.slug), // Convert skill name to slug
            entryName: skill.name,
          })),
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const generalSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.technicalSkills
          .filter((skill: Skill) => skill.skillType === "general")
          .map((skill: Skill) => ({
            slug: stringToSlug(skill.slug), // Convert skill name to slug
            entryName: skill.name,
          })),
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const softSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allCertificates
      .flatMap((certificate: Certificate) =>
        certificate.technicalSkills
          .filter((skill: Skill) => skill.skillType === "soft")
          .map((skill: Skill) => ({
            slug: stringToSlug(skill.slug), // Convert skill name to slug
            entryName: skill.name,
          })),
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
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
        basePath,
      ),
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
        (certificate.technicalSkills || []).some(
          (skill) =>
            stringToSlug(skill.category) ===
            stringToSlug(selectedSkillCategory),
        );
      const matchesHardSkill =
        selectedTechnicalSkill === "all" ||
        (certificate.technicalSkills || []).some(
          (skill) =>
            skill.slug === selectedTechnicalSkill && skill.skillType === "hard",
        );
      const matchesGeneralSkill =
        selectedGeneralSkill === "all" ||
        (certificate.technicalSkills || []).some(
          (skill) =>
            skill.slug === selectedGeneralSkill &&
            skill.skillType === "general",
        );
      const matchesSoftSkill =
        selectedSoftSkill === "all" ||
        (certificate.technicalSkills || []).some(
          (skill) =>
            skill.slug === selectedSoftSkill && skill.skillType === "soft",
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
    },
  );

  const groupedCertificates = groupCertificatesByCategory(filteredCertificates);

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
        archiveFilter={{
          paramName: archivedParamName,
          status: showArchived,
        }}
      />
    </>
  );
};
export default CredentialsList;
