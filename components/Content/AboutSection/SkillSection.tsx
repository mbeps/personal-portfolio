import Tag from "@/components/Atoms/Tag";
import SkillsModal from "@/components/Modal/SkillsModal";
import HeadingThree from "@/components/Text/HeadingThree";
import { languages } from "@/constants/languages";
import { technologies } from "@/constants/skills";
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
  const allSkills: Skill[] = allLanguageSkills.concat(technologies);

  /**
   * Gets the first 'limit' skills.
   * These are then displayed as tags.
   * @param limit (number): the number of skills to take
   * @returns (string[]): list of skill names
   */
  const firstNSkills = (limit: number) => {
    const skillNames = Array.from(
      new Set(allSkills.map((skill) => skill.skill)) // Extract skill names
    ).slice(0, limit); // Remove duplicates
    return skillNames;
  };

  /**
   * Gets the first few skills from each category.
   * These are then displayed as tags.
   * @param limitPerCategory (number): the number of skills to take from each category
   * @returns (string[]): list of skill names
   */
  const firstNSkillsPerCategory = (limitPerCategory: number) => {
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

    // Take the first 'limitPerCategory' skills from each category, extract skill names, and flatten
    let skillNames: string[] = []; // List of skill names
    Object.values(categories).forEach((categorySkills) => {
      const names = categorySkills // Extract skill names
        .slice(0, limitPerCategory) // Take the first 'limitPerCategory' skills
        .map((skill) => skill.skill); // Extract skill names
      skillNames = Array.from(new Set(skillNames.concat(names))); // Merge with existing names, removing duplicates
    });
    return skillNames;
  };

  const handleDisplaySkills = () => {
    return firstNSkillsPerCategory(4).slice(0, 25);
    return firstNSkills(100);
  };

  return (
    <>
      <HeadingThree title="Skills & Tools" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
        {handleDisplaySkills().map((item, idx) => (
          <Tag key={idx}>{item}</Tag>
        ))}
        <Tag onClick={handleOpenModal}>...</Tag>
        <SkillsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default SkillSection;