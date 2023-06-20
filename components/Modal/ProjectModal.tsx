import React from "react";
import Modal from "./Modal";
import HeadingTwo from "../Content/Text/HeadingTwo";
import HeadingThree from "../Content/Text/HeadingThree";

interface ProjectModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
  projectLanguage: string;
  technologies?: string[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  projectLanguage,
  technologies,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HeadingTwo title="Project Stack" />
      <div className="mt-4">
        <HeadingThree title="Language" />
        <p className="text-lg mt-5">{projectLanguage}</p>
      </div>
      {technologies && (
        <div className="mt-4">
          <HeadingThree title="Technologies" />
          <ul>
            {technologies.map((tech, index) => (
              <li key={index} className="mb-1">
                • {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
