import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/ProjectsData";
import type Project from "../models/Project";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full pt-60 px-10">
        <div className="flex-[3] px-10 flex flex-col justify-center ">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-heading ">
            Full-stack web and application engineer, and amateur snowboarder.
          </h1>
          <p className="mb-6 text-lg font-normal text-body mt-10">
            I'm a full-stack software engineer specializing in .NET Core, React,
            and modern cloud-native systems. I love solving complex problems,
            whether it's migrating legacy data, improving system performance, or
            building clean, intuitive interfaces. I'm driven by curiosity,
            reliability, and a desire to build software that genuinely makes
            things better, and I am always looking for new challenges and
            opportunities to grow as a developer.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Xiappi"
              target="_blank"
              className="inline-flex items-center mt-4 text-blue-600 hover:underline"
            >
              <Icon path={mdiGithub} size={1} />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adam-mattatall-306b84180/"
              target="_blank"
              className="inline-flex items-center mt-4 text-blue-600 hover:underline"
            >
              <Icon path={mdiLinkedin} size={1} />
              <span className="ml-2">LinkedIn</span>
            </a>
            <a
              href="mailto:mattatalladam@gmail.com"
              className="inline-flex items-center mt-4 text-blue-600 hover:underline"
            >
              <Icon path={mdiEmail} size={1} />
              <span className="ml-2">Email</span>
            </a>
          </div>
        </div>
        <div className="flex-[2] max-h-[50vh] flex items-center justify-center px-10 ">
          <img
            src="src\assets\profile.png"
            alt="Profile"
            className="rounded-lg w-full h-full shadow-lg object-cover rotate-5 shadow-black"
          />
        </div>
      </div>
      <div className="p-10 mt-10 mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((project: Project) => (
          <div key={project.name} className="basis-1/3">
            <ProjectCard projectCard={project} />
          </div>
        ))}
      </div>
    </>
  );
}
