import Title from "@/components/Title";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    name: "Circus Discussions",
    description:
      "A social media discussion platform that enables users to engage with each other in a variety of ways. This is build using Firebase, Next.JS and Chakra UI. ",
    image: "/projects/circus-discussions-fyp.png",
    repository: "https://github.com/mbeps/next_discussion_platform",
    link: "https://circus-discussion.vercel.app/",
  },
  {
    name: "Drumroll Music",
    description:
      "A simple music streaming site where users can upload and listen to music. This is built using Supabase, Next.JS and Tailwind CSS. ",
    image: "/projects/drumroll-music.png",
    repository: "https://github.com/mbeps/drumroll-music",
    link: "",
  },
  {
    name: "Ringmaster Messaging",
    description:
      "A simple messaging app to allow users to chat with other users or in group chats. This was for learning custom back-ends and was built using Next.JS, NextAuth, MongoDB, Pusher and Tailwind CSS. ",
    image: "/projects/ringmaster-messaging.png",
    repository: "https://github.com/mbeps/ringmaster-messaging",
    link: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <Title title="Projects" />

      <div className="flex flex-col space-y-20 mt-14">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <ProjectItem
                name={project.name}
                description={project.description}
                imageURL={project.image}
                projectURL={project.repository}
                siteURL={project.link}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
