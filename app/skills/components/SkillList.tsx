"use client";

import generateUrl from "@/actions/generateUrl";
import groupSkills from "@/actions/skills/groupSkills";
import Dropdown from "@/components/DropDown/DropDownMenu";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import { Skill } from "@/types/skills";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const searchParams = useSearchParams();
  const selectedGroup = searchParams.get("group") || "category";
  const options = [
    { slug: "category", entryName: "Category" },
    { slug: "language", entryName: "Language" },
    { slug: "skill-type", entryName: "Skill Type" },
    { slug: "none", entryName: "None" },
  ];

  const groupedSkills = groupSkills(selectedGroup, skills);

  const router = useRouter();

  function handleSelect(value: string) {
    router.push(generateUrl({ group: value }, "/skills"));
  }

  return (
    <div>
      <div className="flex mt-4">
        <div className="flex-grow mr-2 mt-2.5 text-right text-neutral-700 dark:text-neutral-300">
          Group by:
        </div>
        <Dropdown
          selected={selectedGroup}
          options={options}
          onSelect={handleSelect}
        />
      </div>

      <div className="mt-4 text-center md:text-left">
        {Object.keys(groupedSkills).map((group) => (
          <div key={group}>
            <HeadingThree title={group} />
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {groupedSkills[group].map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
