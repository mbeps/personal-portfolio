import React from "react";
import HeadingTwo from "../Text/HeadingTwo";
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
    <Modal title="More Projects" isOpen={isOpen} onClose={onClose}>
      <p className="mt-5 text-lg text-center">
        These are links to other collections of projects:
      </p>
      <div className="flex flex-wrap flex-col justify-start z-10 mt-5 space-y-2">
        <Button
          onClick="https://github.com/stars/mbeps/lists/leetcode"
          variant="ghost"
        >
          LeetCode Projects
        </Button>
        <Button
          onClick="https://github.com/stars/mbeps/lists/university"
          variant="ghost"
        >
          University Projects
        </Button>
      </div>

      <div className="border-b border-neutral-300 dark:border-neutral-700 mt-3" />

      <p className="mt-5 text-lg text-center">
        These are links to projects built using specific languages:
      </p>
      <div className="flex flex-wrap flex-col justify-start z-10 mt-5 space-y-2">
        <Button
          onClick="https://github.com/mbeps?tab=repositories&q=&type=&language=python&sort="
          variant="ghost"
        >
          Python Projects
        </Button>
        <Button
          onClick="https://github.com/mbeps?tab=repositories&q=&type=&language=jupyter+notebook&sort="
          variant="ghost"
        >
          Jupyter Notebooks Projects
        </Button>
        <Button
          onClick="https://github.com/mbeps?tab=repositories&q=&type=&language=java&sort="
          variant="ghost"
        >
          Java Projects
        </Button>
        <Button
          onClick="https://github.com/mbeps?tab=repositories&q=&type=&language=jupyter+notebook&sort="
          variant="ghost"
        >
          TypeScript Projects
        </Button>
      </div>

      <div className="border-b border-neutral-300 dark:border-neutral-700 mt-3" />

      <p className="mt-5 text-lg text-center">
        Bellow is the link to view all the repositories:
      </p>
      <div className="flex flex-wrap flex-col justify-start z-10 mt-5 space-y-2">
        <Button
          onClick="https://github.com/mbeps?tab=repositories"
          variant="ghost"
        >
          GitHub Repositories
        </Button>
      </div>

      <div className="border-b border-neutral-300 dark:border-neutral-700 mt-3" />

      <p className="mt-5 text-lg text-center">
        Bellow is the link to view the games I created using GameMaker:
      </p>
      <div className="flex flex-wrap flex-col justify-start z-10 mt-5 space-y-2">
        <Button onClick="https://bepary-games.itch.io/" variant="ghost">
          Itch.io Profile
        </Button>
      </div>
    </Modal>
  );
};

export default MoreProjectsModal;
