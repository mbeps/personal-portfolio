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
import FilterModal from "@/components/Filters/Modal/FIlterModal";

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
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const selectedIssuer = searchParams.get("issuer") || "All";
  const selectedCategory = searchParams.get("category") || "All";
  const searchTerm = searchParams.get("search") || "";
  const showArchived = searchParams.get("archived") === "true" || false;
  const basePath = usePathname();

  const router = useRouter();

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

  const searchOptions = {
    keys: ["name", "issuer", "skills", "category"], // Only search these properties
    threshold: 0.3, // Lower threshold means more results
  };

  const fuse = new Fuse(allCertificates, searchOptions);

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

  //^ List of options
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

  const updateSearchTerm = (newSearchTerm: string) => {
    router.push(
      generateUrl(
        {
          issuer: selectedIssuer,
          category: selectedCategory,
          search: newSearchTerm,
          archived: true,
        },
        basePath
      )
    );
  };

  const filteredCertificates = searchedCertificates.filter(
    (certificate) =>
      (showArchived || !certificate.archived) &&
      (selectedIssuer === "All" || certificate.issuer === selectedIssuer) &&
      (selectedCategory === "All" || certificate.category === selectedCategory)
  );

  const groupedCertificates = groupCertificatesByCategory(filteredCertificates);

  const resetFilters = () => {
    router.push(
      generateUrl(
        {
          issuer: "All",
          category: "All",
          search: "",
          archived: false,
        },
        basePath
      )
    );
  };

  const areFiltersApplied =
    selectedIssuer !== "All" ||
    selectedCategory !== "All" ||
    searchTerm !== "" ||
    showArchived;

  const filterCategories = [
    {
      name: "Issuer",
      options: certificateIssuers,
      selectedValue: selectedIssuer,
    },
    {
      name: "Category",
      options: certificateCategories,
      selectedValue: selectedCategory,
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

      {/* Toggle to display archived projects */}

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
