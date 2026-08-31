"use client";

import type React from "react";
import FilterSection from "@/components/filters/FilterSection";
import SkillTag from "@/components/tags/SkillTag";
import { ROUTES } from "@/constants/routes";
import type SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import useSkillFilterState from "@/hooks/useSkillFilterState";
import type CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";
import { skillHasMaterial } from "@/lib/material/skillUsageHelpers";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcn/ui/card";

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
  const basePath: string = ROUTES.SKILLS.path;
  const {
    searchTerm,
    setSearchTerm,
    filterCategories,
    groupedSkills,
    areFiltersApplied,
    hideSkillsWithoutMaterial,
  } = useSkillFilterState(skills);

  return (
    <div>
      <FilterSection
        name={ROUTES.SKILLS.name}
        basePath={basePath}
        searchFilter={{
          searchTerm,
          onChange: setSearchTerm,
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
                <CardContent className="flex flex-row flex-wrap justify-centermd:justify-start">
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
                    ),
                  )}
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <div className="mt-8 flex min-w-full justify-center">
            <h2 className="font-bold text-2xl">No Matching Skills</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillList;
