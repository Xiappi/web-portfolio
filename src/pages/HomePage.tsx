import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";

export default function HomePage() {
  return (
    <div className="flex w-full pt-50 px-10">
      <div className="flex-[3] px-10">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-heading ">
          Full-stack web and application engineer, and amateur snowboarder.
        </h1>
        <p className="mb-6 text-lg font-normal text-body mt-10">
          I'm a full-stack software engineer specializing in .NET Core, React,
          and modern cloud-native systems. I love solving complex problems,
          whether it's migrating legacy data, improving system performance, or
          building clean, intuitive interfaces. I'm driven by curiosity,
          reliability, and a desire to build software that genuinely makes
          things better.
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
      <div className="flex-[2] flex items-center justify-center px-10 ">
        <img
          src="src\assets\profile.png"
          alt="Profile"
          className="rounded-lg w-full h-auto shadow-lg object-cover rotate-5 shadow-black"
        />
      </div>
    </div>
  );
}
