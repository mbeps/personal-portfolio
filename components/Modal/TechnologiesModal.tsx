"use client";

import React, { useState } from "react";
import HeadingTwo from "../Content/Text/HeadingTwo";
import HeadingThree from "../Content/Text/HeadingThree";
import Modal from "./Modal";
import Tag from "../Atoms/Tag";
import { Technology } from "@/types/languagesSkillsTechnologies";
import Dropdown from "../DropDown/DropDownMenu";

interface TechnologiesModalProps {
  technologies: Technology[];
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
}

/**
 * Modal which displays technologies organized by category.
 *
 * @param technologies (Technology[]): Array of technologies
 * @param isOpen (boolean): whether the modal is open or not
 * @param onClose (function): function to close the modal
 * @returns (JSX.Element): modal component
 */
const TechnologiesModal: React.FC<TechnologiesModalProps> = ({
  technologies,
  isOpen,
  onClose,
}) => {
  const [groupedBy, setGroupedBy] = useState("category");

  /**
   * Organizes the technologies by category.
   * For each category, it creates an array of technologies.
   * User can choose to group by category or not.
   * If grouped by category, it returns an object with the categories as keys and the array of technologies as values.
   * If not grouped by category, it returns the array of technologies.
   * @param technologies (Technology[]) The technologies to organize
   */
  const organizeTechnologies = ():
    | Record<string, Technology[]>
    | Technology[] => {
    let organizedTechnologies: Record<string, Technology[]> | Technology[] = [];

    if (groupedBy === "category") {
      organizedTechnologies = technologies.reduce(
        (acc: Record<string, Technology[]>, tech) => {
          const { category = "Other" } = tech;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(tech);
          return acc;
        },
        {}
      );
    } else {
      // groupedBy === "none"
      organizedTechnologies = technologies;
    }

    return organizedTechnologies;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HeadingTwo title="Technologies" />
      <div className="flex mt-4">
        <div className="flex-grow mr-2 mt-2.5 text-right text-neutral-700 dark:text-neutral-300">
          Group by:
        </div>
        <Dropdown
          selected={groupedBy}
          options={["category", "none"]}
          setSelected={setGroupedBy}
        />
      </div>
      {groupedBy === "none" ? (
        <div className="mt-4 text-center md:text-left">
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {(technologies as Technology[]).map((tech, index) => (
              <Tag key={index}>{tech.name}</Tag>
            ))}
          </div>
        </div>
      ) : (
        Object.entries(
          organizeTechnologies() as Record<string, Technology[]>
        ).map(([group, techs], index) => (
          <div key={index} className="mt-4 text-center md:text-left">
            <HeadingThree title={group} />
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {techs.map((tech, index) => (
                <Tag key={index}>{tech.name}</Tag>
              ))}
            </div>
          </div>
        ))
      )}
    </Modal>
  );
};

export default TechnologiesModal;