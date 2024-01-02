"use client";

import generateUrl from "@/actions/generateUrl";
import groupSkills from "@/actions/skills/groupSkills";
import Button from "@/components/Button/Button";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
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
  const options = [
    { slug: "category", entryName: "Category" },
    { slug: "skill-type", entryName: "Skill Type" },
    { slug: "none", entryName: "None" },
  ];

  const groupedSkills = groupSkills(selectedGroup, skills);

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
            <Button
              variant="outlined"
              className={`
                px-3 py-2 w-full
                flex
                text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize md:hover:text-neutral-700 dark:md:hover:text-neutral-200
                rounded-xl
                shadow-md md:hover:shadow-lg focus:shadow-lg
                bg-neutral-100 dark:bg-neutral-800
                md:hover:bg-neutral-100 dark:md:hover:bg-neutral-800
                border-2 border-transparent dark:border-transparent
                md:hover:border-red-500 dark:md:hover:border-red-800
                transition-all duration-500 ease-in-out
          `}
            >
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
