import React from "react";
import Image from "next/image";

const skills = [
  { skill: "React" },
  { skill: "Next.JS" },
  { skill: "NextAuth" },
  { skill: "Jest" },
  { skill: "Vitest" },
  { skill: "Tailwind CSS" },
  { skill: "Chakra UI" },
  { skill: "Poetry" },
  { skill: "Flask" },
  { skill: "Numpy" },
  { skill: "Jupyter Notebooks" },
  { skill: "PyTest" },
  { skill: "Maven" },
  { skill: "JUnit" },
];

const languages = [
  { language: "Python" },
  { language: "Java" },
  { language: "JavaScript" },
  { language: "TypeScript" },
  { language: "Shell" },
];

const technologies = [
  { technology: "Git" },
  { technology: "SMN" },
  { technology: "Firebase" },
  { technology: "Supabase" },
  { technology: "GitHub Actions" },
  { technology: "Jenkins" },
  { technology: "Docker" },
  { technology: "REST" },
  { technology: "GraphQL" },
  { technology: "PostgreSQL" },
  { technology: "MongoDB" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* Left section */}
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 mt-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hey, my name is Maruf and I&#39;m a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in London, UK.
            </p>
            <br />
            <p>
              I will graduate from Royal Holloway University with a BS in
              Computer Science. I have been working on various projects and
              experimenting with different technologies to widen my knowledge.
            </p>
            <br />
            <p>
              In addition to full stack development, I am also interested in
              Machine Learning and Mathematics. I am currently learning more
              advanced topics in Machine Learning, building upon what I learnt
              in university. I am also learning DevOps through Udemy.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy;
              these include playing football and badminton, reading Science,
              learning about tech and traveling.
            </p>
          </div>

          {/* Right section */}
          <div className="text-center md:w-1/2 md:text-left">
            <Section title="Languages" data={languages} field="language" />
            <Section title="Skills" data={skills} field="skill" />
            <Section
              title="Technologies"
              data={technologies}
              field="technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

interface DataItem {
  [key: string]: string;
}

// Define type for the props
interface SectionProps {
  title: string;
  data: DataItem[];
  field: string;
}

// Define your reusable component
const Section: React.FC<SectionProps> = ({ title, data, field }) => (
  <>
    <h2 className="text-2xl font-bold mb-6 mt-6">{title}</h2>
    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
      {data.map((item, idx) => (
        <p
          key={idx}
          className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded-lg font-semibold"
        >
          {item[field]}
        </p>
      ))}
    </div>
  </>
);
