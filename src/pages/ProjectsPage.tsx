import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/ProjectsData";
import type Project from "../models/Project";

export default function ProjectsPage() {
  return (
    <div className="pt-50">
      <div className="p-10 flex flex-col justify-center ">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-heading ">
          Here are some of my projects
        </h1>
      </div>
      <div className="pl-10">
        <p className="mb-6 text-lg font-normal text-body">
          This page highlights the projects that define my growth as a
          developer, built with the tools I love most, including (but not
          limited to) .NET, C#, React, TypeScript, Firebase, Postgres, and
          Unity. I enjoy working across the full stack, from designing scalable
          backend systems to creating seamless, responsive front-end
          experiences. My problem-solving style is based on clarity and
          iteration: break big problems into manageable steps, build something
          functional quickly, then refine it into something clean, efficient,
          and reliable. Whether I'm architecting a data-driven web app,
          optimizing workflows, or experimenting with game mechanics, I focus on
          thoughtful decisions, strong fundamentals, and continuous improvement.
        </p>
      </div>

      <div className="py-10 mt-10 mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((project: Project) => (
          <div key={project.name} className="basis-1/3">
            <ProjectCard projectCard={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
