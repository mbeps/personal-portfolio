import Tag from "@/components/Atoms/Tag";
import SkillsModal from "@/components/Modal/SkillsModal";
import HeadingThree from "@/components/Text/HeadingThree";
import { Skill, languages } from "@/types/languages";
import { technologies } from "@/types/technologies";
import { useState } from "react";

/**
 * Displays a list of skills that I have.
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

  const allLanguageSkills: Skill[] = languages.reduce((acc, language) => {
    if (language.skills) {
      return acc.concat(language.skills);
    }
    return acc;
  }, [] as Skill[]);

  const allSkills: Skill[] = allLanguageSkills.concat(technologies);

  // allSkills.sort((a, b) => {
  //   const categoryA = a.category || "Other";
  //   const categoryB = b.category || "Other";
  //   return categoryA.localeCompare(categoryB);
  // });

  const firstNSkills = (limit: number) => {
    const skillNames = Array.from(
      new Set(allSkills.map((skill) => skill.skill))
    ).slice(0, limit);
    return skillNames;
  };

  const firstNSkillsPerCategory = (limitPerCategory: number) => {
    // Categorize the skills
    const categories: Record<string, Skill[]> = allSkills.reduce(
      (acc, skill) => {
        const category = skill.category || "Other";
        if (!acc[category]) acc[category] = [];
        acc[category].push(skill);
        return acc;
      },
      {} as Record<string, Skill[]>
    );

    // Take the first 'limitPerCategory' skills from each category, extract skill names, and flatten
    let skillNames: string[] = [];
    Object.values(categories).forEach((categorySkills) => {
      const names = categorySkills
        .slice(0, limitPerCategory)
        .map((skill) => skill.skill);
      skillNames = Array.from(new Set(skillNames.concat(names))); // Merge with existing names, removing duplicates
    });
    return skillNames;
  };

  const handleDisplaySkills = () => {
    return firstNSkillsPerCategory(3);
    return firstNSkills(100);
  };

  return (
    <>
      <HeadingThree title="Language Skills" />
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
