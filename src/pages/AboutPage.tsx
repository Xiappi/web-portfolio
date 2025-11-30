import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
import Icon from "@mdi/react";
import profile2 from "../assets/profile-2.png";

export default function About() {
  return (
    <div className="  w-full pt-20 md:pt-28 lg:pt-40 px-4 md:px-8 lg:px-12 flex justify-center">
      <div className="  max-w-5xl w-full grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-10">
        <div className="lg:col-span-2">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading">
            Full-stack software engineer from Nova Scotia, building reliable
            systems and polished user experiences.
          </h1>
        </div>

        <div className="max-w-xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
          <p className="mb-4 text-base md:text-lg font-normal text-body">
            Hi! I'm Adam! A full-stack developer with experience in .NET,
            TypeScript, React, and data-heavy systems. I've led complex data
            migrations, modernized legacy infrastructure, and shipped
            user-focused applications in both my professional career and
            personal projects.
          </p>

          <p className="mb-4 text-base md:text-lg font-normal text-body">
            I love turning messy systems into clean, reliable solutions and
            diving into problems that make me think hard. Whether it's designing
            scalable architectures, exploring new frameworks, or building games,
            I'm driven by curiosity and a desire to keep improving my craft.
          </p>

          <ul className="mb-6 text-base md:text-lg font-normal text-body list-disc list-inside space-y-1">
            <li>
              Experienced with .NET, TypeScript, React, and modern tooling
            </li>
            <li>
              Led large insurance data migrations and legacy modernization
            </li>
            <li>
              Constantly learning, experimenting, and refining how I build
              software
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="/projects"
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View my projects
            </a>
            <a
              href="mailto:mattatalladam@gmail.com"
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex justify-start lg:justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-5 md:p-6 flex flex-col items-center gap-4 w-full max-w-sm">
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
              {/* Replace src with your final portfolio image */}
              <img
                src={profile2}
                alt="Adam Mattatall portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm md:text-base text-body text-center">
              Open to full-stack and backend roles, remote or based in Nova
              Scotia. Always excited to tackle complex systems and ship
              thoughtful user experiences.
            </p>

            <div className="flex flex-col gap-2 w-full">
              <a
                href="https://github.com/Xiappi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
              >
                <Icon path={mdiGithub} size={0.9} />
                <span className="ml-2">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/adam-mattatall-306b84180/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
              >
                <Icon path={mdiLinkedin} size={0.9} />
                <span className="ml-2">LinkedIn</span>
              </a>

              <a
                href="mailto:mattatalladam@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
              >
                <Icon path={mdiEmail} size={0.9} />
                <span className="ml-2">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
