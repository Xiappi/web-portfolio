import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
import Icon from "@mdi/react";

export default function About() {
  return (
    <div className="grid grid-cols-2 gap-10 w-full pt-60 px-10">
      <div className="col-span-2 px-10 flex flex-col justify-center ">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-heading ">
          Nova Scotia born and raised, I am a full-stack software engineer with
          a passion for making an impact
        </h1>
      </div>
      <div className="pl-10">
        <p className="mb-6 text-lg font-normal text-body">
          Hi! I'm Adam - a Full-Stack Developer with a strong foundation and
          proven experience in .NET, TypeScript, React, and Database Management
          Systems. I've led complex data migrations, modernized legacy
          infrastructure, and built polished, user-focused applications, in both
          my professional career and personal projects. I take pride in solving
          hard problems and turning messy systems into clean, reliable
          solutions. Whether it's designing scalable architectures, exploring
          new frameworks, or diving deep into game development, I'm driven by
          curiosity and the desire to constantly improve my craft. Learning is
          at the center of everything I do. I'm always experimenting with new
          technologies, studying best practices, and taking on projects that
          challenge me to grow, both as a developer and as a person.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://github.com/Xiappi"
          target="_blank"
          className="inline-flex items-center mt-4 text-blue-600 hover:underline"
        >
          <Icon path={mdiGithub} size={1} />
          <span className="ml-2">Follow me on GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/adam-mattatall-306b84180/"
          target="_blank"
          className="inline-flex items-center mt-4 text-blue-600 hover:underline"
        >
          <Icon path={mdiLinkedin} size={1} />
          <span className="ml-2">Follow me on LinkedIn</span>
        </a>
        <a
          href="mailto:mattatalladam@gmail.com"
          target="_blank"
          className="inline-flex items-center mt-4 text-blue-600 hover:underline"
        >
          <Icon path={mdiEmail} size={1} />
          <span className="ml-2">Email me</span>
        </a>
      </div>
    </div>
  );
}
