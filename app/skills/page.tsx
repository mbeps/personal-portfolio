import PageDescription from "@/components/UI/PageDescription";
import HeadingOne from "@/components/Text/HeadingOne";
import { languages } from "@/database/skills/languages";
import allSkills from "@/database/skills/skills";
import React from "react";
import SkillList from "./components/SkillList";

const description = `
	Explore my collection of skills on various topics. 
	You will be able to navigate to projects, certificates and blogs directly from here.
`;

export const metadata = {
  title: "Maruf Bepary - Skills",
  description: description,
};

export default function SkillPage() {
  const skills = [...languages, ...allSkills];

  return (
    <main>
      <section id="blogs">
        <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title="Skills" />
          <PageDescription description={description} />

          <SkillList skills={skills} />
        </div>
      </section>
    </main>
  );
}
