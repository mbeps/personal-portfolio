import React from "react";
import HeadingTwo from "../Content/Text/HeadingTwo";
import Modal from "./Modal";
import Button from "../Atoms/Button";

interface MoreProjectsModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
}

/**
 * Modal which displays links to various other collection of projects.
 *
 * @param isOpen (boolean): whether the modal is open or not
 * @param onClose (function): function to close the modal
 * @returns (JSX.Element): modal component (stack of the project
 */
const MoreProjectsModal: React.FC<MoreProjectsModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HeadingTwo title="More Projects" />
      <p className="mt-5 text-lg text-center">
        These are links to other collections of projects:
      </p>
      <div className="flex flex-wrap flex-col justify-start z-10 mt-5 space-x-2">
        <Button
          action="https://github.com/stars/mbeps/lists/leetcode"
          variant="ghost"
          isSamePage={false}
        >
          LeetCode Projects
        </Button>
        <Button
          action="https://github.com/stars/mbeps/lists/university"
          variant="ghost"
          isSamePage={false}
        >
          University Projects
        </Button>
      </div>
    </Modal>
  );
};

export default MoreProjectsModal;
