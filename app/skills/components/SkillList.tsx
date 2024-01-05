"use client";

import generateUrl from "@/actions/generateUrl";
import groupSkills from "@/actions/skills/groupSkills";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import Skill from "@/types/skills";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const searchParams = useSearchParams();
  const basePath = usePathname();
  const router = useRouter();

  const selectedGroup = searchParams.get("group") || "category";
  const excludeHardSkills = searchParams.get("hard") === "true";
  const excludeGeneralSkills = searchParams.get("general") === "true";
  const excludeSoftSkills = searchParams.get("soft") === "true";

  const options = [
    { slug: "category", entryName: "Category" },
    { slug: "skill-type", entryName: "Skill Type" },
    { slug: "language", entryName: "Language" },
    { slug: "none", entryName: "None" },
  ];

  const excludedSkillTypes: ("hard" | "general" | "soft")[] = [];

  if (excludeHardSkills) excludedSkillTypes.push("hard");
  if (excludeGeneralSkills) excludedSkillTypes.push("general");
  if (excludeSoftSkills) excludedSkillTypes.push("soft");

  // Group skills with the exclusion list
  const groupedSkills = groupSkills(selectedGroup, skills, excludedSkillTypes);

  function handleSelect(value: string) {
    router.push(generateUrl({ group: value }, basePath));
  }

  return (
    <div>
      <div className="flex mt-4 w-full justify-end">
        <div className="flex mr-2 mt-2.5 text-right text-neutral-700 dark:text-neutral-300">
          Group by:
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="w-48">
            <Button variant="default" className="w-full">
              <div className="flex items-start justify-between space-x-2 w-full">
                <span>Category</span>
                <BsChevronDown
                  fontSize={16}
                  className="text-neutral-700 dark:text-neutral-200 mt-1"
                />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 ">
            {options.map((option, index) => (
              <DropdownMenuItem
                key={index}
                className={`
                  ${option.slug === selectedGroup ? "font-bold" : ""}`}
                onSelect={() => handleSelect(option.slug)}
              >
                {option.entryName}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-4 text-center md:text-left">
        {Object.keys(groupedSkills).map((group) => (
          <div key={group}>
            <HeadingThree title={group[0].toUpperCase() + group.slice(1)} />
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
