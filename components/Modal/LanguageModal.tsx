import React, { useState } from "react";
import Button from "../Atoms/Button";
import Tag from "../Atoms/Tag";
import HeadingThree from "../Text/HeadingThree";
import Dropdown from "../DropDown/DropDownMenu";
import Modal from "./Modal";
import organizeSkillsByCategory from "@/actions/organizeSkillsByCategory";
import Link from "next/link";
import { Skill } from "@/types/skills";
import Project from "@/types/projects";
import allProjects from "@/constants/projects";
import isSkillAssociatedWithProject from "@/actions/skills/isSkillAssociatedWithProject";
import isSkillAssociatedWithCertificate from "@/actions/skills/isSkillAssociatedWithCertificate";
import Certificate from "@/types/certificates";
import { BlogMetadata } from "@/types/blog";
import allCertificates from "@/constants/certificates";
import isSkillAssociatedWithBlogs from "@/actions/skills/isSkillAssociatedWithBlogs";
import blogs from "@/constants/blogs";
import SkillTag from "../Tags/SkillTag";

interface ProjectModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
  language: Skill;
  skills: Skill[];
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
  isOpen,
  onClose,
}) => {
  const [groupedBy, setGroupedBy] = useState("category");

  const skillsByCategory = organizeSkillsByCategory(skills);
  const projects = allProjects;
  const certificates = allCertificates;
  const allBlogs = blogs;

  const hasProjects = isSkillAssociatedWithProject(language, projects);
  const hasCertificates = isSkillAssociatedWithCertificate(
    language,
    certificates
  );
  const hasBlogs = isSkillAssociatedWithBlogs(language, allBlogs);
  const hasMaterial = hasProjects || hasCertificates || hasBlogs;

  return (
    <Modal title={language.skill} isOpen={isOpen} onClose={onClose}>
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
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
      ) : (
        Object.entries(skillsByCategory).map(([category, skills], index) => (
          <div key={index} className="mt-4 text-center md:text-left">
            <HeadingThree title={category} />
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))
      )}

      {hasMaterial && (
        <div className="text-center md:text-left">
          <HeadingThree title="Material" />
        </div>
      )}
      {hasProjects && (
        <div
          className="
          flex flex-wrap flex-col 
          text-center md:text-left 
          justify-start z-10 mt-5 space-y-2"
        >
          <Link href={`/projects?archived=true&language=${language.slug}`}>
            <div className="w-full">
              <Button
                variant="ghost"
                className="w-full"
              >{`${language.skill} Projects`}</Button>
            </div>
          </Link>
        </div>
      )}

      {hasCertificates && (
        <div
          className="
            flex flex-wrap flex-col 
            text-center md:text-left 
            justify-start z-10 mt-5 space-y-2"
        >
          <Link
            href={`
            /credentials?archived=true&technical=${language.slug}
            `}
          >
            <div className="w-full">
              <Button
                variant="ghost"
                className="w-full"
              >{`${language.skill} Certificates`}</Button>
            </div>
          </Link>
        </div>
      )}

      {hasBlogs && (
        <div
          className="
            flex flex-wrap flex-col 
            text-center md:text-left 
            justify-start z-10 mt-5 space-y-2"
        >
          <Link
            href={`
            /blogs?technical=${language.slug}
            `}
          >
            <div className="w-full">
              <Button
                variant="ghost"
                className="w-full"
              >{`${language.skill} Blogs`}</Button>
            </div>
          </Link>
        </div>
      )}

      {hasMaterial && (
        <>
          <div
            className="
            flex flex-wrap flex-col 
            text-center md:text-left 
            justify-start z-10 mt-5 space-y-2"
          >
            <Link
              href={`
            /skills/${language.slug}
            `}
            >
              <div className="w-full">
                <Button
                  variant="ghost"
                  className="w-full"
                >{`All ${language.skill} Material`}</Button>
              </div>
            </Link>
          </div>
        </>
      )}
    </Modal>
  );
};

export default LanguageModal;
