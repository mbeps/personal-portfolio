"use client";

import skillHasMaterial from "@/lib/material/skillHasMaterial";
import FilterSection from "@/components/filters/FilterSection";
import SkillTag from "@/components/tags/SkillTag";
import { SKILL_PAGE } from "@/constants/pages";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";
import useSkillFilterState from "@/hooks/useSkillFilterState";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn/ui/card";

interface SkillListProps {
  skills: SkillDatabaseKeys[];
}

/**
 * Full skill directory combining the shared filter experience with grouped skill tags that respect the “hide without material” toggle.
 * Works in tandem with `useSkillFilterState` and `SkillTag` so every skill page shares the same filtering logic.
 *
 * @param skills Array of all skill slugs from the database.
 * @returns Filter UI plus grouped skill cards.
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
      <div className="material-sections-wrapper pt-14">
        {groupedSkills.length > 0 ? (
          groupedSkills.map((categoryData: CategorisedSkillsInterface) => (
            <div key={categoryData.skillCategoryName}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h3>
                      {categoryData.skillCategoryName[0].toUpperCase() +
                        categoryData.skillCategoryName.slice(1)}
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap flex-row justify-centermd:justify-start">
                  {Object.entries(categoryData.skills).map(
                    ([count, skillKey]) => (
                      <SkillTag
                        key={count}
                        skillKey={skillKey}
                        hide={
                          !skillHasMaterial(skillKey) &&
                          hideSkillsWithoutMaterial
                        }
                      />
                    )
                  )}
                </CardContent>
              </Card>
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
