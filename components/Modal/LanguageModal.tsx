import React from "react";
import Modal from "./Modal";
import HeadingTwo from "../Content/Text/HeadingTwo";
import HeadingThree from "../Content/Text/HeadingThree";
import Tag from "../Atoms/Tag";
import Button from "../Atoms/Button";
import { Repository, Skill } from "@/types/languagesSkillsTechnologies";

interface ProjectModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
  language: string;
  skills: Skill[];
  repositories: Repository[];
}

/**
 * Displays a modal for each language.
 * The modal displays the skills and repositories for the language.
 * If the language does not have any skills or repositories, the modal cannot be opened.
 * It also displays buttons to open the repositories.
 * The skills are organized by category.
 * @returns (JSX.Element): modal component (stack of the project
 */
const LanguageModal: React.FC<ProjectModalProps> = ({
  skills,
  language,
  repositories,
  isOpen,
  onClose,
}) => {
  const organizeSkillsByCategory = (skills: Skill[]) => {
    return skills.reduce(
      (accumulator: { [category: string]: Skill[] }, skill: Skill) => {
        const { category = "Other" } = skill;
        if (!accumulator[category]) {
          accumulator[category] = [];
        }
        accumulator[category].push(skill);
        return accumulator;
      },
      {}
    );
  };

  const skillsByCategory = organizeSkillsByCategory(skills);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HeadingTwo title={language} />
      {Object.entries(skillsByCategory).map(([category, skills], index) => (
        <div key={index} className="mt-4 text-center md:text-left">
          <HeadingThree title={category} />
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((skill, index) => (
              <Tag key={index}>{skill.skill}</Tag>
            ))}
          </div>
        </div>
      ))}

      {repositories && repositories.length > 0 && (
        <div className="flex flex-wrap flex-col justify-start z-10 mt-5 space-y-2">
          <HeadingThree title="Projects" />
          {repositories.map((repo, index) => (
            <Button
              key={index}
              onClick={() => window.open(repo.repository, "_blank")}
              variant="ghost"
            >
              {repo.name}
            </Button>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default LanguageModal;
