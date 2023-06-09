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
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 mt-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello there! I&#39;m Maruf, a{" "}
              <span className="font-bold">software engineer</span> fueled by{" "}
              <span className="font-bold">
                curiosity, innovation, and an insatiable desire to explore the
                depths of technology
              </span>
              . London, the city of rain, fish and chips, the iconic Big Ben,
              and technology, has been my home base for the past few years.
              Here, at the esteemed Royal Holloway University, I&#39;ve embarked
              on an intellectual odyssey to pursue my BS in Computer Science.
            </p>
            <br />
            <p>
              Software engineering for me is akin to conducting an orchestra - a
              <span className="font-bold"> symphony of codes</span> that come
              together to create something remarkable. From developing APIs to
              building intricate front-end architectures, I&#39;ve dabbled in
              all parts of the{" "}
              <span className="font-bold">software development lifecycle</span>.
            </p>
            <br />
            <p>
              But don&#39;t be fooled, my technical interest doesn&#39;t stop at
              full-stack development. My fascination for understanding the
              &quot;why&quot; behind the &quot;what&quot; led me to{" "}
              <span className="font-bold">Machine Learning</span>. To further
              satiate my curiosity, I&#39;m currently digging deeper into the
              advanced layers of Machine Learning, adding a valuable layer to my
              skill set.
            </p>
            <br />
            <p>
              In the same vein, my passion for{" "}
              <span className="font-bold">efficiency</span> and streamlining
              operations has kindled my interest in{" "}
              <span className="font-bold">DevOps</span>. As I engage with the
              principles of continuous integration, testing, deployment and
              monitoring through Udemy, I find myself increasingly intrigued by
              the interplay of development and operations.
            </p>
            <br />
            <p>
              Away from the computer screen, I find myself diving into a
              multitude of hobbies that bring balance to my life. Whether
              it&#39;s showing off my skills in football and badminton,
              immersing myself in science-based literature, or packing a bag to
              discover a new city, I believe in{" "}
              <span className="font-bold">
                seizing the day and living life to the fullest
              </span>
              .
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
