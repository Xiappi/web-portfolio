import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/ProjectsData";
import type Project from "../models/Project";
import profileImg from "../assets/profile.png";

export default function HomePage() {
  return (
    <>
      <div className=" flex flex-col lg:flex-row w-full pt-20 md:pt-32 lg:pt-60 px-4 md:px-6 lg:px-10">
        <div className="flex-[3] px-4 md:px-6 lg:px-10 flex flex-col justify-center ">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading ">
            Full-stack web and application engineer, and amateur snowboarder.
          </h1>
          <p className="mb-6 text-base md:text-lg font-normal text-body mt-6 md:mt-10">
            I'm a full-stack software engineer specializing in .NET Core, React,
            and modern cloud-native systems. I love solving complex problems,
            whether it's migrating legacy data, improving system performance, or
            building clean, intuitive interfaces. I'm driven by curiosity,
            reliability, and a desire to build software that genuinely makes
            things better, and I am always looking for new challenges and
            opportunities to grow as a developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="https://github.com/Xiappi"
              target="_blank"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <Icon path={mdiGithub} size={1} />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adam-mattatall-306b84180/"
              target="_blank"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <Icon path={mdiLinkedin} size={1} />
              <span className="ml-2">LinkedIn</span>
            </a>
            <a
              href="mailto:mattatalladam@gmail.com"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <Icon path={mdiEmail} size={1} />
              <span className="ml-2">Email</span>
            </a>
          </div>
        </div>
        <div className="flex-[2] sm:max-w-sm w-full lg:max-w-lg flex items-center justify-center lg:px-10 mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm aspect-[3/4]">
            <img
              src={profileImg}
              alt="Profile"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg object-cover rotate-5 shadow-black"
            />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 lg:p-10 mt-10 mx-2 md:mx-4 lg:mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Projects.map((project: Project) => (
          <div key={project.name} className="basis-1/3">
            <ProjectCard projectCard={project} />
          </div>
        ))}
      </div>
    </>
  );
}
