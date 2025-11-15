"use client";

import skillHasMaterial from "@/actions/material/skillHasMaterial";
import FilterSection from "@/components/Filters/FilterSection";
import SkillTag from "@/components/Tags/SkillTag";
import { SKILL_PAGE } from "@/constants/pages";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import useSkillFilterState from "@/hooks/useSkillFilterState";
import React from "react";

interface SkillListProps {
  skills: SkillDatabaseKeys[];
}

/**
 * Component displaying all the skills that I have learned and worked with.
 * These skills can be grouped into categories and certain type skills can be ignored.
 * Skills can also be filtered by the number of materials attributed to them.
 *
 * @returns List of skills grouped by category and controls to filter them
 */
const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const basePath: string = SKILL_PAGE.path;
  const {
    searchTerm,
    searchParamName,
    filterCategories,
    groupedSkills,
    areFiltersApplied,
    hideSkillsWithoutMaterial,
  } = useSkillFilterState(skills);

  return (
    <div>
      <FilterSection
        name={SKILL_PAGE.label}
        basePath={basePath}
        searchFilter={{
          searchTerm,
          searchParamName,
        }}
        filterCategories={filterCategories}
        areFiltersApplied={areFiltersApplied}
      />

      {/* List of Skills */}
      <div className="mt-8 text-center md:text-left space-y-20">
        {groupedSkills.length > 0 ? (
          groupedSkills.map((categoryData: SkillsCategoryInterface) => (
            <div key={categoryData.skillCategoryName}>
              <h3>
                {categoryData.skillCategoryName[0].toUpperCase() +
                  categoryData.skillCategoryName.slice(1)}
              </h3>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {Object.entries(categoryData.skills).map(
                  ([count, skillKey]) => (
                    <SkillTag
                      key={count}
                      skillKey={skillKey}
                      hide={
                        !skillHasMaterial(skillKey) && hideSkillsWithoutMaterial
                      }
                    />
                  )
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center min-w-full mt-8">
            <h2 className="text-2xl font-bold">No Matching Skills</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillList;
