import Icon from "@mdi/react";
import { mdiLinkVariant } from "@mdi/js";
import type ProjectCard from "../models/Project";
export default function ProjectCardComponent({
  projectCard,
}: {
  projectCard: ProjectCard;
}) {
  return (
    <div className="flex flex-col justify-evenly w-full max-w-[22rem] min-h-100 rounded-3xl p-4 md:p-6 shadow-md transition delay-75 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl bg-white cursor-pointer hover:bg-gray-50">
      <div className="inline-block text-sm font-bold">
        <Icon path={projectCard.icon} size={2} />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">
        {projectCard.name}
      </h3>
      <p className="mt-3 text-gray-500 leading-relaxed">
        {projectCard.description}
      </p>

      <div className="flex justify-between">
        <a
          href={projectCard.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center text-sm font-semibold text-emerald-500 hover:text-emerald-600"
        >
          <Icon path={mdiLinkVariant} size={1} className="mr-2" />
          Github
        </a>
        {projectCard.website && (
          <a
            href={projectCard.website}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center text-sm font-semibold text-emerald-500 hover:text-emerald-600"
          >
            <Icon path={mdiLinkVariant} size={1} className="mr-2" />
            Website
          </a>
        )}
      </div>
    </div>
  );
}
