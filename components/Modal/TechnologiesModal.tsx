import React from "react";
import HeadingTwo from "../Content/Text/HeadingTwo";
import HeadingThree from "../Content/Text/HeadingThree";
import Modal from "./Modal";
import Tag from "../Atoms/Tag";
import { Technology } from "@/types/languagesSkillsTechnologies";

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
  /**
   * Organizes the technologies by category.
   * For each category, it creates an array of technologies.
   * @param technologies (Technology[]) The technologies to organize
   */
  const organizeTechnologiesByCategory = (technologies: Technology[]) => {
    return technologies.reduce(
      (accumulator: { [category: string]: Technology[] }, tech: Technology) => {
        const { category = "Other" } = tech;
        if (!accumulator[category]) {
          accumulator[category] = [];
        }
        accumulator[category].push(tech);
        return accumulator;
      },
      {}
    );
  };

  const technologiesByCategory = organizeTechnologiesByCategory(technologies);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HeadingTwo title="Technologies" />
      {Object.entries(technologiesByCategory).map(
        ([category, technologies], index) => (
          <div key={index} className="mt-4 text-center md:text-left">
            <HeadingThree title={category} />
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {technologies.map((tech, index) => (
                <Tag key={index}>{tech.name}</Tag>
              ))}
            </div>
          </div>
        )
      )}
    </Modal>
  );
};

export default TechnologiesModal;
