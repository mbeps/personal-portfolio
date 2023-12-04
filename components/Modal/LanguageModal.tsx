import React, { useState } from "react";
import Button from "../Atoms/Button";
import Tag from "../Atoms/Tag";
import HeadingThree from "../Text/HeadingThree";
import Dropdown from "../DropDown/DropDownMenu";
import Modal from "./Modal";
import organizeSkillsByCategory from "@/actions/organizeSkillsByCategory";
import Link from "next/link";
import { Skill } from "@/types/skills";

interface ProjectModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
  language: string;
  skills: Skill[];
  repository?: string;
}

/**
 * Displays a modal for each language.
 * The modal displays the skills and repositories for the language.
 * If the language does not have any skills or repositories, the modal cannot be opened.
 * It also displays buttons to open the repositories.
 * The skills are organized by category.
 * @param isOpen (boolean) Whether the modal is open or not
 * @param onClose (function) Function to close the modal
 * @param language (string) The language of the modal
 * @param skills (Skill[]) The skills of the language
 * @param repositories (Repository[]) The repositories of the language
 * @returns (JSX.Element): modal component (stack of the project
 */
const LanguageModal: React.FC<ProjectModalProps> = ({
  skills,
  language,
  repository,
  isOpen,
  onClose,
}) => {
  const [groupedBy, setGroupedBy] = useState("category");

  const skillsByCategory = organizeSkillsByCategory(skills);

  return (
    <Modal title={language} isOpen={isOpen} onClose={onClose}>
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
            {skills.map((skill, index) => (
              <Tag key={index}>{skill.skill}</Tag>
            ))}
          </div>
        </div>
      ) : (
        Object.entries(skillsByCategory).map(([category, skills], index) => (
          <div key={index} className="mt-4 text-center md:text-left">
            <HeadingThree title={category} />
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((skill, index) => (
                <Tag key={index}>{skill.skill}</Tag>
              ))}
            </div>
          </div>
        ))
      )}

      {repository && (
        <div
          className="
          flex flex-wrap flex-col 
          text-center md:text-left 
          justify-start z-10 mt-5 space-y-2"
        >
          <HeadingThree title="Projects" />

          <Link href={repository}>
            <div className="w-full">
              <Button
                variant="ghost"
                className="w-full"
              >{`${language} Projects`}</Button>
            </div>
          </Link>
        </div>
      )}
    </Modal>
  );
};

export default LanguageModal;
