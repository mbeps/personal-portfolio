"use client";

import generateUrl from "@/actions/generateUrl";
import { ArchiveToggle } from "@/app/projects/components/ArchiveToggle";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import OpenFilterModalButton from "@/components/Filters/Page/OpenFilterModalButton";
import SearchInput from "@/components/Inputs/SearchInput";
import HeadingOne from "@/components/Text/HeadingOne";
import Certificate from "@/types/certificates";
import Fuse from "fuse.js";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import CredentialFilterModal from "./CredentialFilterModal";
import CredentialListSection from "./CredentialListSection";

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
const CredentialFilterSearchSection: React.FC<CredentialsListListProps> = ({
  allCertificates,
}) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const selectedIssuer = searchParams.get("issuer") || "All";
  const selectedCategory = searchParams.get("category") || "All";
  const searchTerm = searchParams.get("search") || "";
  const showArchived = searchParams.get("archived") === "true" || false;

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
      generateUrl({
        issuer: selectedIssuer,
        category: selectedCategory,
        search: newSearchTerm,
        archived: true,
      })
    );
  };

  const resetFilters = () => {
    router.push(
      generateUrl({
        issuer: "All",
        category: "All",
        search: "",
        archived: false,
      })
    );
  };

  const areFiltersApplied =
    selectedIssuer !== "All" ||
    selectedCategory !== "All" ||
    searchTerm !== "" ||
    showArchived;

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
      />

      {/* Toggle to display archived projects */}

      {/* Filter Modal */}
      <CredentialFilterModal
        generateUrl={generateUrl}
        areFiltersApplied={areFiltersApplied}
        resetFilters={resetFilters}
        isFilterModalOpen={isFilterModalOpen}
        handleCloseModals={handleCloseModals}
        certificateCategories={certificateCategories}
        certificateIssuers={certificateIssuers}
        selectedCategory={selectedCategory}
        selectedIssuer={selectedIssuer}
        searchTerm={searchTerm}
        showArchived={showArchived}
      />
    </>
  );
};
export default CredentialFilterSearchSection;
