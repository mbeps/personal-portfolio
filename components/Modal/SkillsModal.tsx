import React from "react";
import Tag from "../Atoms/Tag";
import HeadingThree from "../Text/HeadingThree";
import Dropdown from "../DropDown/DropDownMenu";
import Modal from "./Modal";
import { Skill, languages, Repository } from "@/types/languages";
import { technologies } from "@/types/technologies";

interface SkillsModalProps {
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
const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const [groupedBy, setGroupedBy] = React.useState("category");

  /**
   * Allows grouping the skills by category or by language.
   * Removes duplicates.
   * @param skills (Skill[]) The skills to organize
   * @returns (Record<string, Skill[]>): the skills organized by category
   */
  const groupSkills = (): Record<string, Skill[]> | Skill[] => {
    let organizedSkills: Record<string, Skill[]> | Skill[] = {}; // The skills organized by category

    // Helper function to remove duplicates
    const removeDuplicates = (skills: Skill[]): Skill[] => {
      const skillSet = new Set();
      const uniqueSkills: Skill[] = [];

      skills.forEach((skill) => {
        const serializedSkill = JSON.stringify(skill);
        if (!skillSet.has(serializedSkill)) {
          skillSet.add(serializedSkill);
          uniqueSkills.push(skill);
        }
      });

      return uniqueSkills;
    };

    const allLanguageSkills = languages.flatMap((lang) => lang.skills || []);
    const allSkills = allLanguageSkills.concat(technologies);

    if (groupedBy === "language") {
      organizedSkills = languages.reduce(
        (acc: Record<string, Skill[]>, lang) => {
          if (lang.skills) {
            acc[lang.language] = removeDuplicates(lang.skills);
          }
          return acc;
        },
        {} as Record<string, Skill[]>
      );
      (organizedSkills as Record<string, Skill[]>)["Other"] =
        removeDuplicates(technologies);
    } else if (groupedBy === "category") {
      organizedSkills = allSkills.reduce(
        (acc: Record<string, Skill[]>, skill) => {
          const category = skill.category || "Other";
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(skill);
          return acc;
        },
        {} as Record<string, Skill[]>
      );

      // Remove duplicates for each category
      Object.keys(organizedSkills as Record<string, Skill[]>).forEach(
        (category) => {
          (organizedSkills as Record<string, Skill[]>)[category] =
            removeDuplicates(
              (organizedSkills as Record<string, Skill[]>)[category]
            );
        }
      );
    } else {
      // groupedBy === "none"
      organizedSkills = removeDuplicates(allSkills);
    }

    return organizedSkills;
  };

  const skills = groupSkills();

  return (
    <Modal title="Language Skills" isOpen={isOpen} onClose={onClose}>
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
          options={["category", "language", "none"]}
          setSelected={setGroupedBy}
        />
      </div>
      {groupedBy === "none" ? (
        <div className="mt-4 text-center md:text-left">
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {(skills as Skill[]).map((skill, index) => (
              <Tag key={index}>{skill.skill}</Tag>
            ))}
          </div>
        </div>
      ) : (
        Object.entries(skills as Record<string, Skill[]>).map(
          ([group, skills], index) => (
            <div key={index} className="mt-4 text-center md:text-left">
              <HeadingThree title={group} />
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((skill, index) => (
                  <Tag key={index}>{skill.skill}</Tag>
                ))}
              </div>
            </div>
          )
        )
      )}
    </Modal>
  );
};

export default SkillsModal;
