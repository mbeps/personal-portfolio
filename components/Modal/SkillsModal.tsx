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

interface SkillsModalProps {
  languages: Language[];
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
}

const SkillsModal: React.FC<SkillsModalProps> = ({
  languages,
  isOpen,
  onClose,
}) => {
  const [groupedBy, setGroupedBy] = useState<"language" | "category">(
    "language"
  );

  const organizeSkills = (): Record<string, Skill[]> => {
    let organizedSkills: Record<string, Skill[]> = {};

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
      <div className="flex justify-between items-center">
        <HeadingTwo title="Skills" />
        <Button
          onClick={() =>
            setGroupedBy(groupedBy === "language" ? "category" : "language")
          }
          variant={"filled"}
        >
          Group by {groupedBy === "language" ? "Category" : "Language"}
        </Button>
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
