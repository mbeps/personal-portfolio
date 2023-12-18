import React from "react";
import Tag from "../Tags/Tag";
import HeadingThree from "../Text/HeadingThree";
import Modal from "./Modal";

interface ProjectModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
  projectLanguage: string;
  technologies?: string[];
}

/**
 * Modal which displays the tech stack used to build a project.
 * The language and technologies are displayed in different sections.
 *
 * @param projectLanguage (string): language used to build the project
 * @param technologies (string[]): technologies used to build the project
 * @param isOpen (boolean): whether the modal is open or not
 * @param onClose (function): function to close the modal
 * @returns (JSX.Element): modal component (stack of the project
 */
const ProjectModal: React.FC<ProjectModalProps> = ({
  projectLanguage,
  technologies,
  isOpen,
  onClose,
}) => {
  return (
    <Modal title="Project Stack" isOpen={isOpen} onClose={onClose}>
      <div className="mt-4 text-center md:text-left">
        <HeadingThree title="Language" />
        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-5">
          <Tag>{projectLanguage}</Tag>
        </div>
      </div>
      {technologies && (
        <div className="mt-4 text-center md:text-left">
          <HeadingThree title="Technologies" />
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {technologies.map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
