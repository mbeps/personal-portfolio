"use client";

import Tag from "@/components/Tags/Tag";
import SkillsModal from "@/components/Modal/SkillsModal";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import { languages } from "@/constants/languages";
import { technologies } from "@/constants/technologies";
import { Skill } from "@/types/skills";
import { useState } from "react";

/**
 * Displays a list of skills that I have.
 * These skills may or many not have languages associated with them.
 * There is an option to view more skills which will open a modal.
 * @returns (JSX.Element): skill section (list of skills)
 */
const SkillSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /**
   * Gets the list of skills from all the languages.
   */
  const allLanguageSkills: Skill[] = languages.reduce((acc, language) => {
    if (language.skills) {
      return acc.concat(language.skills);
    }
    return acc;
  }, [] as Skill[]);

  /**
   * List of all skills.
   * This includes skills from languages and technologies.
   */
  // const allSkills: Skill[] = allLanguageSkills.concat(technologies);

  /**
   * This is a list of categories that should be ignored.
   * Any skills that are in these categories will not be displayed.
   * This categories are from the Skill type.
   */
  const ignoredCategories: string[] = [
    "Project Managers",
    "Object Relational Mappers",
    "Version Control System",
    "Web Sockets",
    "Mathematics",
    "Other",
  ];

  /**
   * List of all skills.
   * This includes skills from languages and technologies.
   */
  const allSkills: Skill[] = allLanguageSkills
    .concat(technologies)
    .filter((skill) => !ignoredCategories.includes(skill.category || "Other"));

  /**
   * Gets the first 'limit' skills.
   * These are then displayed as tags.
   * @param limit (number): the number of skills to take
   * @returns (string[]): list of skill names
   */
  const firstNSkills = (limit: number): Skill[] => {
    const uniqueSkills = new Map<string, Skill>();

    allSkills.forEach((skill) => {
      if (!uniqueSkills.has(skill.skill)) {
        uniqueSkills.set(skill.skill, skill);
      }
    });

    return Array.from(uniqueSkills.values()).slice(0, limit);
  };

  /**
   * Gets the first few skills from each category.
   * These are then displayed as tags.
   * @param limitPerCategory (number): the number of skills to take from each category
   * @returns (string[]): list of skill names
   */
  const firstNSkillsPerCategory = (limitPerCategory: number): Skill[] => {
    // Categorize the skills
    const categories: Record<string, Skill[]> = allSkills.reduce(
      (acc, skill) => {
        const category = skill.category || "Other"; // If no category, put in 'Other' category
        if (!acc[category]) acc[category] = []; // Initialize category
        acc[category].push(skill); // Add skill to category
        return acc; // Return updated categories
      },
      {} as Record<string, Skill[]> // Initialize categories
    );

    // Take the first 'limitPerCategory' skills from each category
    let skills: Skill[] = []; // List of skills
    Object.values(categories).forEach((categorySkills) => {
      const firstSkills = categorySkills.slice(0, limitPerCategory); // Take the first 'limitPerCategory' skills
      skills = skills.concat(firstSkills); // Merge with existing skills
    });

    return skills;
  };

  const handleDisplaySkills = () => {
    return firstNSkillsPerCategory(2).slice(0, 16);
    return firstNSkills(100);
  };

  return (
    <>
      <HeadingThree title="Skills & Tools" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
        {handleDisplaySkills().map((skill: Skill, idx: number) => (
          <SkillTag key={idx} skill={skill} />
        ))}
        <div className="relative group">
          <Tag onClick={handleOpenModal}>...</Tag>
        </div>
        <SkillsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default SkillSection;
