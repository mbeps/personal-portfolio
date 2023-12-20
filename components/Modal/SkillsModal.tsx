import groupSkills from "@/actions/skills/groupSkills";
import hardSkills from "@/database/skills/hardSkills";
import { languages } from "@/database/skills/languages";
import Skill from "@/types/skills";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import Dropdown from "../DropDown/DropDownMenu";
import SkillTag from "../Tags/SkillTag";
import HeadingThree from "../Text/HeadingThree";
import Modal from "./Modal";
import { technologies } from "@/database/skills/skills";

interface SkillsModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
}

/**
 * Displays a modal for the skills.
 * The modal displays the skills organized by category or by language.
 * This modal displays skills from languages and technologies.
 *
 * @param languages (Language[]) The languages of the modal
 * @param isOpen (boolean) Whether the modal is open or not
 * @param onClose (function) Function to close the modal
 * @returns (JSX.Element): modal component (stack of the project
 */
const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const [groupedBy, setGroupedBy] = React.useState("category");
  const displayedSkills: Skill[] = [...languages, ...technologies].filter(
    (skill) => skill.isMainSkill
  );

  const groupSkills = (
    skills: Skill[],
    groupedBy: string
  ): Record<string, Skill[]> => {
    if (groupedBy === "none") {
      return { None: skills };
    }

    return skills.reduce((acc, skill) => {
      // Group by category
      if (groupedBy === "category") {
        const key = skill.category;
        acc[key] = acc[key] || [];
        acc[key].push(skill);
      }
      // Group by language
      else if (
        groupedBy === "language" &&
        skill.category === "Programming Languages"
      ) {
        skill.skills?.forEach((subSkill) => {
          if (subSkill.skillType === "hard" && subSkill.isMainSkill) {
            const key = skill.name; // Grouping under the main programming language
            acc[key] = acc[key] || [];
            acc[key].push(subSkill);
          }
        });
      }
      return acc;
    }, {} as Record<string, Skill[]>);
  };

  const groupedSkills = groupSkills(displayedSkills, groupedBy);
  return (
    <Modal title="Skills & Tools" isOpen={isOpen} onClose={onClose}>
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
          options={[
            { slug: "category", entryName: "Category" },
            { slug: "language", entryName: "Language" },
            { slug: "none", entryName: "None" },
          ]}
          onSelect={setGroupedBy}
        />
      </div>

      {Object.entries(groupedSkills).map(([group, skills], index) => (
        <div key={index} className="mt-4 text-center md:text-left">
          <HeadingThree title={group} />
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
      ))}

      {/* separator */}
      <div className="w-full h-px bg-neutral-200 dark:bg-neutral-700 my-8" />

      <Link href="/skills" className="flex justify-center mt-10">
        <Button variant="outlined">View All Skills</Button>
      </Link>
    </Modal>
  );
};

export default SkillsModal;
