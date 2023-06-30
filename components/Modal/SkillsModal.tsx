import React, { useState } from "react";
import HeadingTwo from "../Content/Text/HeadingTwo";
import HeadingThree from "../Content/Text/HeadingThree";
import Modal from "./Modal";
import Tag from "../Atoms/Tag";
import Button from "../Atoms/Button";
import {
  Language,
  Skill,
  Repository,
} from "@/types/languagesSkillsTechnologies";
import Dropdown, { GroupedByType } from "../Atoms/DropDownMenu";

interface SkillsModalProps {
  languages: Language[];
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
}

/**
 * Displays a modal for the skills.
 * The modal displays the skills organized by category or by language.
 *
 * @param languages (Language[]) The languages of the modal
 * @param isOpen (boolean) Whether the modal is open or not
 * @param onClose (function) Function to close the modal
 * @returns (JSX.Element): modal component (stack of the project
 */
const SkillsModal: React.FC<SkillsModalProps> = ({
  languages,
  isOpen,
  onClose,
}) => {
  const [groupedBy, setGroupedBy] = React.useState<GroupedByType>("language");

  /**
   * Allows to organize the skills by category or by language.
   * @param skills (Skill[]) The skills to organize
   * @returns (Record<string, Skill[]>): the skills organized by category
   */
  const organizeSkills = (): Record<string, Skill[]> => {
    let organizedSkills: Record<string, Skill[]> = {};

    // If the skills are organized by language, we just need to return the skills
    if (groupedBy === "language") {
      organizedSkills = languages.reduce(
        (acc: Record<string, Skill[]>, lang) => {
          if (lang.skills) {
            acc[lang.language] = lang.skills;
          }
          return acc;
        },
        {}
      );
      // if the skills are organized by category, we need to create an array of skills for each category
    } else {
      organizedSkills = languages.reduce(
        (acc: Record<string, Skill[]>, lang) => {
          if (lang.skills) {
            lang.skills.forEach((skill) => {
              const category = skill.category || "Other";
              if (!acc[category]) {
                acc[category] = [];
              }
              acc[category].push(skill);
            });
          }
          return acc;
        },
        {}
      );
    }

    return organizedSkills;
  };

  const skills = organizeSkills();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HeadingTwo title="Skills" />
      <div className="flex mt-4">
        <div
          className="
          flex-grow mr-2 mt-2.5 
          text-right text-neutral-700 dark:text-neutral-300
          "
        >
          Group by:
        </div>
        <Dropdown
          selected={groupedBy}
          options={["language", "category"]}
          setSelected={setGroupedBy}
        />
      </div>
      {Object.entries(skills).map(([group, skills], index) => (
        <div key={index} className="mt-4 text-center md:text-left">
          <HeadingThree title={group} />
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {(skills as Skill[]).map((skill, index) => (
              <Tag key={index}>{skill.skill}</Tag>
            ))}
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default SkillsModal;
