"use client";

import Button from "@/components/Atoms/Button";
import SearchInput from "@/components/Inputs/SearchInput";
import HeadingOne from "@/components/Text/HeadingOne";
import Certificate from "@/types/certificates";
import Fuse from "fuse.js";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import CredentialListSection from "./CredentialListSection";
import CredentialFilterModal from "./CredentialFilterModal";
import { ArchiveToggle } from "@/app/projects/components/ArchiveToggle";
import generateUrl from "@/actions/generateUrl";

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
      generateUrl({
        issuer: selectedIssuer,
        category: selectedCategory,
        search: newSearchTerm,
        archived: true,
      })
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
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Credentials" />

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
              variant="outlined"
              onClick={handleOpenFilterModal}
              className={`
                px-4 py-2 w-full
                text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize hover:text-neutral-700 dark:hover:text-neutral-200
                rounded-xl
                shadow-md hover:shadow-lg focus:shadow-lg
                bg-neutral-100 dark:bg-neutral-800 
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                border-2 border-transparent dark:border-transparent
                hover:border-red-500 dark:hover:border-red-800
                transition-all duration-500 ease-in-out
              `}
            >
              <div className="flex items-center space-x-2">
                <BsFilterLeft
                  fontSize={24}
                  className="text-neutral-700 dark:text-neutral-200"
                />
                <span>Filter</span>
              </div>
            </Button>
            {/* Clear Button */}
            <Button
              variant="outlined"
              onClick={resetFilters}
              disabled={!areFiltersApplied}
              className={`
                px-4 py-2 w-full
                text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize hover:text-neutral-700 dark:hover:text-neutral-200
                rounded-xl
                shadow-md hover:shadow-lg focus:shadow-lg
                bg-neutral-100 dark:bg-neutral-800 
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                border-2 border-transparent dark:border-transparent
                hover:border-red-500 dark:hover:border-red-800
                transition-all duration-500 ease-in-out
              `}
            >
              <div className="flex items-center space-x-2">
                <AiOutlineClear
                  fontSize={24}
                  className="text-neutral-700 dark:text-neutral-200"
                />
                <span>Clear All</span>
              </div>
            </Button>
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

        {/* List of projects */}
        <CredentialListSection groupedCertificates={groupedCertificates} />
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
      </div>
    </section>
  );
};
export default CredentialsList;